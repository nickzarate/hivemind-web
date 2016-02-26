import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.forms.ranges
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
  let correctAnswerIndices = []
  for (let i = 0; i < currentCategory.get('outcomeRanges').length; i++) {
    var outcomeName = currentCategory.get('outcomeNames')[i]
    if (currentCategory.get('discrete')[i]) {
      correctAnswerIndices.push(currentQuestion.get('outcomes')[i] - currentCategory.get('outcomeRanges')[i][0])
    } else {
      var range = [0,0]
      if ( ranges[outcomeName]
           && ranges[outcomeName].lower >= 0
           && ranges[outcomeName].upper > 0 )
      {
        range = [ranges[outcomeName].lower, ranges[outcomeName].upper]
      }
      correctAnswerIndices.push(getContinuousAnswerIndex(currentCategory.get('numBins')[i], range, currentQuestion.get('outcomes')[i]))
    }
  }
  return correctAnswerIndices
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
