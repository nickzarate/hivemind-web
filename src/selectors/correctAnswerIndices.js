import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const rangesSelector = (state) => state.forms.ranges
const questionSelector = (state) => state.question

function getContinuousAnswerIndex(numBins, range, outcomeValue) {
  let binValues = []
  let difference = range[1] - range[0]
  //If correct answer index is not within the specified range, return -1
  if (outcomeValue < range[0] || outcomeValue > range[1]) {
    return -1
  }
  //Find the correct answer index within the given range
  let step = difference / numBins
  step = Math.floor(step + 0.5)
  binValues.push(Math.floor(range[0] + 0.5))
  for (let i = 0; i < numBins; i++) {
    let lastValue = binValues[binValues.length - 1]
    let nextValue = lastValue + step
    if (outcomeValue >= lastValue && outcomeValue <= nextValue) {
      return i
    }
    binValues.push(nextValue)
  }
}

function getCorrectAnswerIndices(category, ranges, question) {
  let correctAnswerIndices = []
  for (let outcome of category.outcomes) {
    const { variableName } = outcome
    if (outcome.valueType === 'categorical') {
      correctAnswerIndices.push(question[variableName] - outcome.range[0])
    } else if (outcome.valueType === 'continuous') {
      let range = [0,0]
      if (
        ranges[variableName]
        && ranges[variableName].lower >= 0
        && ranges[variableName].upper > 0
      ) {
        range = [ranges[variableName].lower, ranges[variableName].upper]
      }
      correctAnswerIndices.push(getContinuousAnswerIndex(outcome.numBins, range, question[variableName]))
    } else {
      correctAnswerIndices.push(question[variableName] ? 0 : 1)
    }
  }
  return correctAnswerIndices
}

export default createSelector(
  categorySelector,
  rangesSelector,
  questionSelector,
  (category, ranges, question) => getCorrectAnswerIndices(category, ranges, question)
)
