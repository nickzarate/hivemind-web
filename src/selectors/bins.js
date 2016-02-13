import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const binValuesSelector = (state) => state.question.binValues
const bankSelector = (state) => state.question.bank
const rangesSelector = (state) => state.round.ranges

function getBinText(numBins, ranges) {
  let binValues = []
  let binText = []
  let difference = ranges[1] - ranges[0]
  let step = difference / numBins
  step = Math.floor(step + 0.5)
  binValues.push(Math.floor(ranges[0] + 0.5))
  for (let i = 0; i < numBins; i++) {
    let lastValue = binValues[binValues.length - 1]
    let nextValue = lastValue + step
    let text = lastValue + '-' + nextValue
    binValues.push(nextValue)
    binText.push(text)
  }
  return binText
}

function getBinTexts(numBins, ranges) {
  let binTexts = []
  for (let i = 0; i < numBins.length; i++) {
    binTexts.push(getBinText(numBins[i], ranges[i]))
  }
}

export default createSelector(
  categorySelector,
  binValuesSelector,
  bankSelector,
  rangesSelector,
  (currentCategory, binValues, bank, ranges) => {
    return {
      bank: bank.length > 0 ? bank : [[]],
      binTexts: currentCategory ? getBinTexts(currentCategory.get('numBins'), ranges) : [[]],
      binValues: binValues.length > 0 ? binValues : [[]]
    }
  }
)
