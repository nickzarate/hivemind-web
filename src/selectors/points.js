import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory
const rangesSelector = (state) => state.round.ranges

const tokenSelector = createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      pointsPerToken: currentCategory ? currentCategory.get('pointsPerToken') : [],
      outcomeRanges: currentCategory ? currentCategory.get('outcomeRanges') : [],
      discrete: currentCategory ? currentCategory.get('discrete') : []
    }
  }
)

function getWorth(discrete, pointsPerToken, outcomeRanges, ranges) {
  //SKETCHY
  let numDiscrete = 0
  for (let i = 0; i < discrete.length; i++) {
    numDiscrete += discrete[i] ? 0 : 1
    if (!discrete[i] && ranges.length === 0) {
      return []
    }
    if (ranges.length < numDiscrete) {
      return []
    }
  }

  let worth = []
  for (let i = 0; i < outcomeRanges.length; i++) {
    let temp = pointsPerToken[i]
    if (!discrete[i]) {
      //SKETCHY
      let index = 0
      for (let j = 0; j < i; j++) {
        index += discrete[j] ? 0 : 1
      }
      let estimatedRange = ranges[index][1] - ranges[index][0]
      let actualRange = outcomeRanges[i][1] - outcomeRanges[i][0]
      temp *= estimatedRange === 0 ? 0 : (actualRange / estimatedRange)
    }
    worth.push(Math.floor(temp))
  }
  return worth
}

export default createSelector(
  tokenSelector,
  rangesSelector,
  (token, ranges) => {
    return {
      worth: getWorth(token.discrete, token.pointsPerToken, token.outcomeRanges, ranges)
    }
  }
)
