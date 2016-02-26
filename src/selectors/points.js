import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.forms.ranges

const tokenSelector = createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      pointsPerToken: currentCategory ? currentCategory.get('pointsPerToken') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : [],
      discrete: currentCategory ? currentCategory.get('discrete') : [],
      outcomeNames: currentCategory ? currentCategory.get('outcomeNames') : []
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

export default createSelector(
  [tokenSelector, rangesSelector],
  (token, ranges) => {
    return {
      worth: getWorth(token.discrete, token.pointsPerToken, token.outcomeRanges, token.outcomeNames, ranges)
    }
  }
)
