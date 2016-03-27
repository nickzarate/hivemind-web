import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const rangesSelector = (state) => state.forms.ranges

export default createSelector(
  categorySelector,
  rangesSelector,
  (category, ranges) => {
    return {
      worth: getWorth(category.outcomeDataTypes, category.pointsPerToken, category.outcomeRanges, category.outcomeNames, ranges)
    }
  }
)

function getWorth(outcomeDataTypes, pointsPerToken, outcomeRanges, outcomeNames, ranges) {
  let worth = []
  for (let i = 0; i < pointsPerToken.length; i++) {
    let temp = 0
    if (outcomeDataTypes[i].type === 'discrete' || outcomeDataTypes[i].type === 'boolean') {
      temp = pointsPerToken[i]
    }
    if ( outcomeDataTypes[i].type === 'continuous'
         && ranges[outcomeNames[i]]
         && ranges[outcomeNames[i]].lower >= 0
         && ranges[outcomeNames[i]].upper > 0 )
    {
      let estimatedRange = ranges[outcomeNames[i]].upper - ranges[outcomeNames[i]].lower
      let actualRange = outcomeRanges[i][1] - outcomeRanges[i][0]
      temp += pointsPerToken[i]
      temp *= estimatedRange === 0 ? 0 : (actualRange / estimatedRange)
    }
    worth.push(Math.floor(temp))
  }
  return worth
}
