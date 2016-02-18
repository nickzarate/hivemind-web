import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.round.ranges
const outcomesSelector = (state) => state.question.currentQuestion

function getContinuousAnswerIndex(numBins, range, outcome) {
  let binValues = []
  let difference = range[1] - range[0]
  //If correct answer index is not within the specified range, return -1
  if (outcome < range[0] || outcome > range[1]) {
    return -1
  }
  //Find the correct answer index within the given range
  let step = difference / numBins
  step = Math.floor(step + 0.5)
  binValues.push(Math.floor(range[0] + 0.5))
  for (let i = 0; i < numBins; i++) {
    let lastValue = binValues[binValues.length - 1]
    let nextValue = lastValue + step
    if (outcome >= lastValue && outcome <= nextValue) {
      return i
    }
    binValues.push(nextValue)
  }
}

function getCorrectAnswerIndices(currentCategory, ranges, currentQuestion) {
  let numDiscrete = 0
  for (let discrete of currentCategory.get('discrete')) {
    numDiscrete += discrete ? 0 : 1
    if (!discrete && ranges.length === 0) {
      return [[]]
    }
    if (ranges.length < numDiscrete) {
      return [[]]
    }
  }
  let correctAnswerIndices = []
  let newRanges = ranges.slice(0)
  for (let i = 0; i < currentCategory.get('outcomeRanges').length; i++) {
    if (currentCategory.get('discrete')[i]) {
      correctAnswerIndices.push(currentQuestion.get('outcomes')[i] - currentCategory.get('outcomeRanges')[i][0])
    } else {
      //SKETCHY
      let index = 0
      for (let j = 0; j < i; j++) {
        index += currentCategory.get('discrete')[j] ? 0 : 1
      }
      newRanges[index][0] = Number(newRanges[index][0])
      newRanges[index][1] = Number(newRanges[index][1])
      correctAnswerIndices.push(getContinuousAnswerIndex(currentCategory.get('numBins')[i], newRanges[index], currentQuestion.get('outcomes')[index]))
    }
  }
  return correctAnswerIndices.length ? correctAnswerIndices : []
}

export default createSelector(
  categorySelector,
  rangesSelector,
  outcomesSelector,
  (currentCategory, ranges, currentQuestion) => {
    return {
      correctAnswerIndices: (currentCategory && currentQuestion) ? getCorrectAnswerIndices(currentCategory, ranges, currentQuestion) : []
    }
  }
)
