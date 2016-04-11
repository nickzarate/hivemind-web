import { setUnlocked } from 'reducers/round'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import { setCategories } from 'reducers/round'
import { showModal } from 'reducers/modal'
import { setCategory } from 'reducers/category'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'
import { resetAnswers } from 'actions/answers'

export function fetchCategories() {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let query = new Parse.Query('Categories')
    let trimmedCategories = []
    query.find().then(function(categories) {
      for (const category of categories) {
        // Check to see if the user has unlocked the category, if so, set it as being unlocked
        // let unlocked = false
        // for (let name of Parse.User.current().get('unlockedCategories')) {
        //   if (name === category.get('tempName')) {
        //     unlocked = true
        //   }
        // }
        trimmedCategories.push({
          name: category.get('tempName'),
          unlocked: true
        })
      }
      dispatch(setCategories(trimmedCategories))
    })
  }
}

export function fetchCategory(categoryName) {
  return (dispatch) => {
    var query = new Parse.Query('Categories')
    query.equalTo('tempName', categoryName)
    query.first().then(function(category) {
      // Select only the covariates and the outcomes that the 'client' desires.
      let covariates = [], outcomes = []

      for (let variable of category.get('variables')) {
        if (variable.variableType === 'covariate' && variable.display) {
          covariates.push(variable)
        } else if (variable.variableType === 'outcome' && variable.display) {
          outcomes.push(variable)
        }
      }

      let selectedCategory = {
        categorySurveyInstructions: category.get('categorySurveyInstructions'),
        covariates,
        index: category.get('index'),
        name: category.get('tempName'),
        numObservations: category.get('numObservations'),
        outcomes,
        questionsPerRound: category.get('questionsPerRound'),
        roundInstructions: category.get('roundInstructions')
      }
      dispatch(setCategory(selectedCategory))
      dispatch(resetAnswers())
      dispatch(showModal(true))
    })
  }
}

/*
 *  Validate ranges, if everything looks good, start the round.
 */
export function handleStart() {
  return (dispatch, getState) => {
    const { forms: { ranges }, category: { outcomes } } = getState()

    // Validation
    for (let i = 0; i < outcomes.length; i++) {
      if (outcomes[i].valueType === 'continuous' && !ranges[outcomes[i].variableName]) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(outcomes[i].variableName))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(outcomeName))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (ranges[outcomeName].lower >= ranges[outcomeName].upper) {
        dispatch(setTooltipMessage(outcomeName + ' range has a smaller upper bound than lower bound, try again.'))
        dispatch(setTooltipTarget(outcomeName))
        return
      }
    }
    browserHistory.push('/round')
  }
}

/*
 *  If all values in the form are filled, unlock the category, and set the information on the current user
 */
export function handleSurveySubmission() {
  return (dispatch, getState) => {
    const { forms: { covariates }, category } = getState()
    let covariateValues = []
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let user = Parse.User.current()

    // Validation
    for (let covariate of category.covariates) {
      if (isNaN(covariates[covariate.variableName])) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(covariate.variableName))
        return
      }
      covariateValues.push(
        typeof covariates[covariate.variableName] === 'string'
        ? Number(covariates[covariate.variableName])
        : covariates[covariate.variableName]
      )
    }

    dispatch(setUnlocked(category.index))
    let information = { [category.name]: covariateValues }
    user.add('unlockedCategories', category.name)
    user.save({ categoryInformation: Object.assign(user.get('categoryInformation'), information) })
  }
}
