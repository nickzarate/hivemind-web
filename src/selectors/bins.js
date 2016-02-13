import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const binValuesSelector = (state) => state.question.binValues
const bankSelector = (state) => state.question.bank
const rangeSelector = (state) => state.round.range

function getBinText(numBins, range) {
  let binValues = []
  let binText = []
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

export default createSelector(
  categorySelector,
  binValuesSelector,
  bankSelector,
  rangeSelector,
  (currentCategory, binValues, bank, range) => {
    return {
      binText: currentCategory ? getBinText(currentCategory.get('numBins'), range) : [],
      binValues,
      bank
    }
  }
)
