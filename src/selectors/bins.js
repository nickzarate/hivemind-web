import { createSelector } from 'reselect'
import pointsSelector from 'selectors/points'
import correctAnswerIndicesSelector from 'selectors/correctAnswerIndices'

const categorySelector = (state) => state.category
const binValuesSelector = (state) => state.answer.binValues
const bankSelector = (state) => state.answer.bank
const rangesSelector = (state) => state.forms.ranges

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

function getBinTexts(category, ranges) {
  var bins = []
  for (var i = 0; i < category.outcomeRanges.length; i++) {
    var outcomeName = category.outcomeNames[i]
    if (category.discrete[i]) {
      bins.push(getDiscreteBinText(category.outcomeRanges[i]))
    } else {
      var range = [0,0]

      if ( ranges[outcomeName]
           && ranges[outcomeName].lower >= 0
           && ranges[outcomeName].upper > 0 )
      {
        range = [ranges[outcomeName].lower, ranges[outcomeName].upper]
      }

      bins.push(getContinuousBinText(category.numBins[i], range))
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
  correctAnswerIndicesSelector,
  (category, binValues, bank, ranges, worth, correctAnswerIndices) => {
    return {
      bank,
      binTexts: getBinTexts(category, ranges),
      binValues: binValues.length > 0 ? binValues : [[]],
      worth: worth.worth,
      correctAnswerIndices: correctAnswerIndices.correctAnswerIndices
    }
  }
)
