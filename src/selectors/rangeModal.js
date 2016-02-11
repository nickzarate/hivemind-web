import { createSelector } from 'reselect'

const rangesFormSelector = (state) => state.form.data
const rangeSelector = (state) => state.round.range
const showSelector = (state) => state.round.showModal
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  rangesFormSelector,
  rangeSelector,
  showSelector,
  categorySelector,
  (data, range, showModal, currentCategory) => {
    return {
      data,
      range,
      showModal,
      instructions: currentCategory ? currentCategory.get('instructions') : ''
    }
  }
)
