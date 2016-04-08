import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const rangesSelector = (state) => state.forms.ranges

function getContinuousBinText(numBins, range) {
  let binValues = [], binText = []
  let difference = range[1] - range[0]
  let step = difference / numBins
  step = Math.floor(step + 0.5)
  binValues.push(Math.floor(range[0] + 0.5))
  for (let i = 0; i < numBins; i++) {
    let lastValue = binValues[binValues.length - 1]
    let nextValue = lastValue + step
    let text = lastValue + '-' + nextValue
    binValues.push(nextValue)
    binText.push(text)
  }
  return binText
}

function getBinText(category, ranges) {
  let binTexts = []
  for (let outcome of category.outcomes) {
    const { variableName } = outcome
    let binText = []
    if (outcome.valueType === 'continuous') {
      let range = [0,0]
      if (
        ranges[variableName]
        && ranges[variableName].lower >= 0
        && ranges[variableName].upper > 0
      ) {
        range = [ranges[variableName].lower, ranges[variableName].upper]
      }
      binText = getContinuousBinText(outcome.numBins, range)
    } else {
      binText = outcome.labels ? outcome.labels : outcome.values
    }
    binTexts.push(binText)
  }
  return binTexts
}

export default createSelector(
  categorySelector,
  rangesSelector,
  (category, ranges) => getBinText(category, ranges)
)
