import { createSelector } from 'reselect'

const categorySelector = (state) => state.category
const rangesSelector = (state) => state.forms.ranges

function getPoints(category, ranges) {
  let points = []
  for (let outcome of category.outcomes) {
    let temp = 0
    if (outcome.valueType !== 'continuous') {
      temp = outcome.pointsPerToken
    } else if (
      ranges[outcome.variableName]
      && ranges[outcome.variableName].lower >= 0
      && ranges[outcome.variableName].upper > 0
    ) {
      let estimatedRange = ranges[outcome.variableName].upper - ranges[outcome.variableName].lower
      let actualRange = outcome.range[1] - outcome.range[0]
      temp += outcome.pointsPerToken
      temp *= estimatedRange === 0 ? 0 : (actualRange / estimatedRange)
    }
    points.push(Math.floor(temp))
  }
  return points
}

export default createSelector(
  categorySelector,
  rangesSelector,
  (category, ranges) => getPoints(category, ranges)
)
