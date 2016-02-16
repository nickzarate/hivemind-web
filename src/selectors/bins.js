import { createSelector } from 'reselect'
import pointsSelector from 'selectors/points'

const categorySelector = (state) => state.round.currentCategory
const binValuesSelector = (state) => state.question.binValues
const bankSelector = (state) => state.question.bank
const rangesSelector = (state) => state.round.ranges

function getContinuousBinText(numBins, range) {
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

function getDiscreteBinText(range) {
  let binText = []
  for (let i = range[0]; i <= range[1]; i++) {
    binText.push(i)
  }
  return binText
}

function getBinTexts(currentCategory, ranges) {
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
  let bins = []
  let newRanges = ranges.slice(0)
  for (let i = 0; i < currentCategory.get('outcomeRanges').length; i++) {
    if (currentCategory.get('discrete')[i]) {
      bins.push(getDiscreteBinText(currentCategory.get('outcomeRanges')[i]))
    } else {
      //SKETCHY
      let index = 0
      for (let j = 0; j < i; j++) {
        index += currentCategory.get('discrete')[j] ? 0 : 1
      }
      newRanges[index][0] = Number(newRanges[index][0])
      newRanges[index][1] = Number(newRanges[index][1])
      bins.push(getContinuousBinText(currentCategory.get('numBins')[i], newRanges[index]))
    }
  }
  return bins.length ? bins : [[]]
}

export default createSelector(
  categorySelector,
  binValuesSelector,
  bankSelector,
  rangesSelector,
  pointsSelector,
  (currentCategory, binValues, bank, ranges, worth) => {
    return {
      bank: bank.length > 0 ? bank : [[]],
      binTexts: currentCategory ? getBinTexts(currentCategory, ranges) : [[]],
      binValues: binValues.length > 0 ? binValues : [[]],
      worth: worth.worth
    }
  }
)
