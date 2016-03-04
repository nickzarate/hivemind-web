import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const rangesSelector = (state) => state.forms.ranges

export default createSelector(
  categorySelector,
  rangesSelector,
  (category, ranges) => {
    return {
      worth: getWorth(category.discrete, category.pointsPerToken, category.outcomeRanges, category.outcomeNames, ranges)
    }
  }
)

function getWorth(discrete, pointsPerToken, outcomeRanges, outcomeNames, ranges) {
  var worth = []
  for (var i = 0; i < pointsPerToken.length; i++) {
    var temp = discrete[i] ? pointsPerToken[i] : 0

    if ( !discrete[i]
         && ranges[outcomeNames[i]]
         && ranges[outcomeNames[i]].lower >= 0
         && ranges[outcomeNames[i]].upper > 0 )
    {
      var estimatedRange = ranges[outcomeNames[i]].upper - ranges[outcomeNames[i]].lower
      var actualRange = outcomeRanges[i][1] - outcomeRanges[i][0]
      temp += pointsPerToken[i]
      temp *= estimatedRange === 0 ? 0 : (actualRange / estimatedRange)
    }

    worth.push(Math.floor(temp))
  }
  return worth
}
