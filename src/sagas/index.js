import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'
import { take, call, put, select, apply } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { setTooltipMessage } from 'reducers/tooltip'
import { getLoginCredentials } from 'selectors/loginCredentials'
import { LOGIN, LOGOUT } from 'reducers/user'
import { setCategory } from 'reducers/category'
import { showModal } from 'reducers/modal'
import { CHOOSE_CATEGORY } from 'reducers/round'


export function* watchLoginFlow() {
  Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  while (true) { // eslint-disable-line no-constant-condition
    // LOG IN USER
    while (!Parse.User.current()) {
      browserHistory.push('/')
      yield take(LOGIN)
      const login = yield select(getLoginCredentials)

      try {
        yield call(Parse.User.logIn, login.email, login.password)
        browserHistory.push('/home')
      } catch(error) {
        yield put(setTooltipMessage('Error: ' + error.code + ' ' + error.message))
      }
    }

    // LOG OUT USER
    if (window.location.pathname === '/') {
      browserHistory.push('/home')
    }
    yield take(LOGOUT)
    yield call(Parse.User.logOut)
  }
}


export function* watchChooseCategory() {
  yield* takeLatest(CHOOSE_CATEGORY, chooseCategory)
}
function* chooseCategory(action) {
  var query = new Parse.Query('Categories')
  query.equalTo('name', action.payload.categoryName)
  const category = yield apply(query, query.first)
  // Select only the covariates and the outcomes that the 'client' desires.
  let covariateDataTypes = [], covariateNames = [], covariateRanges = [],
    outcomeDataTypes = [], numBins = [], outcomeNames = [], outcomeRanges = [],
    pointsPerToken = [], questionInstructions = [], tokens = [],
    covariatesToDisplay = category.get('covariatesToDisplay'), outcomesToDisplay = category.get('outcomesToDisplay')

  for (let index of covariatesToDisplay) {
    covariateDataTypes.push(category.get('covariateDataTypes')[index])
    covariateNames.push(category.get('covariateNames')[index])
    covariateRanges.push(category.get('covariateRanges')[index])
  }
  for (let index of outcomesToDisplay) {
    outcomeDataTypes.push(category.get('outcomeDataTypes')[index])
    numBins.push(category.get('numBins')[index])
    outcomeNames.push(category.get('outcomeNames')[index])
    outcomeRanges.push(category.get('outcomeRanges')[index])
    pointsPerToken.push(category.get('pointsPerToken')[index])
    questionInstructions.push(category.get('questionInstructions')[index])
    tokens.push(category.get('tokens')[index])
  }

  let selectedCategory = {
    allCovariateDataTypes: category.get('covariateDataTypes'),
    allCovariateNames: category.get('covariateNames'),
    categorySurveyInstructions: category.get('categorySurveyInstructions'),
    covariateDataTypes,
    covariateNames,
    covariateRanges,
    covariatesToDisplay,
    index: category.get('index'),
    name: category.get('name'),
    numBins,
    outcomeDataTypes,
    outcomeNames,
    outcomeRanges,
    outcomesToDisplay,
    pointsPerToken,
    questionInstructions,
    questionsPerRound: category.get('questionsPerRound'),
    roundInstructions: category.get('roundInstructions'),
    tokens
  }

  yield put(setCategory(selectedCategory))
  yield put(showModal(true))
}

// export function* watchGetCategoryNames() {
//   yield* takeLatest(GET_CATEGORY_NAMES, getCategoryNames)
// }
// function* getCategoryNames() {
//   Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  // let query = new Parse.Query('Categories')

  // try {
  //   let categories = yield cps(query.find)//({ success(categories) { return categories }})
  // } catch(err) {
  //   console.log(err)
  // }
  // console.log(categories)
  // // try {
  // //   categories = yield call(getCategories, query)
  // // } catch(err) {
  // //   console.log(err)
  // // }
  // console.log('after get categories')
  // console.log(categories)
  // let categoryNames = []
  // for (let category of categories) {
  //   console.log('in for')
  //   categoryNames.push(category.get('name'))

  //   // Iterate through all unlocked categories of the user,
  //   // and if category[i] is listed in there, unlock that index.
  //   let unlock = false
  //   for (let name of Parse.User.current().get('unlockedCategories')) {
  //     if (name === category.get('name')) {
  //       unlock = true
  //     }
  //   }
  //   yield put(setUnlocked(unlock, category.get('index')))
  // }
  // yield put(setCategoryNames(categoryNames))
// }

// export function setUnlockedCategories(categories) {
//   return (dispatch) => {
//     Parse.initialize(APP_ID, JAVASCRIPT_KEY)
//     for (let category of categories) {
//       let unlocked = false
//       for (let name of Parse.User.current().get('unlockedCategories')) {
//         if (name === category.get('name')) {
//           unlocked = true
//         }
//       }
//       dispatch(setUnlocked(unlocked, category.get('index')))
//     }
//   }
// }


// export function* watchStartRound() {
//   yield* takeLatest('START_ROUND', startRound)
// }
// function* startRound(action) {
//   // Validate Ranges
//   browserHistory.push('/round')
// }


// export function* watchRoundFlow() {
//   while (true) { // eslint-disable-line no-constant-condition
//     yield take('SETUP_QUESTION')

//   }
// }


/*
 *  select
 *  - use if component does not need selected state to begin with
 *  action
 *  - use if the component already needs the selected state for some reason
 */
