import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'
import { take, call, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { setTooltipMessage } from 'reducers/tooltip'
import { getLoginCredentials } from 'selectors/loginCredentials'
import { LOGIN, LOGOUT } from 'reducers/user'
// import { setCategory } from 'reducers/category'
// import { showModal } from 'reducers/modal'
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
    console.log(Parse.User.logOut())
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
  const category = yield call(query.first)
  var selectedCategory = {
    categorySurveyInstructions: category.get('categorySurveyInstructions'),
    covariateNames: category.get('covariateNames'),
    covariateRanges: category.get('covariateRanges'),
    discrete: category.get('discrete'),
    index: category.get('index'),
    instructions: category.get('instructions'),
    name: category.get('name'),
    numBins: category.get('numBins'),
    outcomeNames: category.get('outcomeNames'),
    outcomeRanges: category.get('outcomeRanges'),
    pointsPerToken: category.get('pointsPerToken'),
    questionInstructions: category.get('questionInstructions'),
    questionsPerRound: category.get('questionsPerRound'),
    tokens: category.get('tokens')
  }
  yield put(setCategory(selectedCategory))
  yield put(showModal(true))
}


export function* watchGetCategoryNames() {
  yield* takeLatest(GET_CATEGORY_NAMES, getCategoryNames)
}
function* getCategoryNames() {
  Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  var query = new Parse.Query('Categories')

  console.log(query)
  console.log(query.find)
  try {
    var categories = yield cps(query.find)//({ success(categories) { return categories }})
  } catch(err) {
    console.log(err)
  }
  console.log(categories)
  // try {
  //   categories = yield call(getCategories, query)
  // } catch(err) {
  //   console.log(err)
  // }
  console.log('after get categories')
  console.log(categories)
  var categoryNames = []
  for (var category of categories) {
    console.log('in for')
    categoryNames.push(category.get('name'))

    // Iterate through all unlocked categories of the user,
    // and if category[i] is listed in there, unlock that index.
    var unlock = false
    for (var name of Parse.User.current().get('unlockedCategories')) {
      if (name === category.get('name')) {
        unlock = true
      }
    }
    yield put(setUnlocked(unlock, category.get('index')))
  }
  yield put(setCategoryNames(categoryNames))
}
function* getCategories(query) {
  yield call(query.find)
  //   ({
  //   success(categories) {
  //     console.log(categories)
  //     return categories
  //   },
  //   error(error) {
  //     return 'Error: ' + error.message
  //   }
  // })
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
//     for (var category of categories) {
//       var unlocked = false
//       for (var name of Parse.User.current().get('unlockedCategories')) {
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
