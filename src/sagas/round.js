// import { Parse } from 'parse'
// import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
// import { fork, select, apply } from 'redux-saga/effects'
// import { takeLatest } from 'redux-saga'
// import { SUBMIT_QUESTION, FETCH_QUESTIONS } from 'reducers/round'
// import submitQuestionSelector from 'selectors/submitQuestion'
// import fetchQuestionsSelector from 'selectors/sagas/fetchQuestions'
// import { rand } from 'utilities/misc'


// export default function* fireRoundSagas() {
//   Parse.initialize(APP_ID, JAVASCRIPT_KEY)
//   yield fork(watchSubmitQuestion)
//   yield fork(watchFetchQuestions)
// }



// function* watchFetchQuestions() {
//   yield* takeLatest(FETCH_QUESTIONS, fetchQuestions)
// }
// function* fetchQuestions() {
//   // do something
//   Parse.initialize(APP_ID, JAVASCRIPT_KEY)
//   const { /*outcomesToDisplay, covariatesToDisplay, questionsPerRound,*/numObservations, categoryName } = yield select(fetchQuestionsSelector)

//   // let covariateValuesCovered = []
//   // let Questions = Parse.Object.extend('Questions')
//   // let query = new Parse.Query(Questions)
//   // console.log(categoryName)
//   // console.log(numObservations)

//   // query.equalTo('type', categoryName)
//   // console.log(query)
//   // query.find().then(function(questions) {
//   //   console.log(questions)
//   //   console.log(questions[0])
//   //   console.log(questions[1])
//   //   console.log(questions[numObservations - 1])
//   // })

//   let Questions = Parse.Object.extend('Questions')
//   let query = new Parse.Query(Questions)
//   query.equalTo('type', categoryName)
//   // query.ascending('index')
//   let questions = []
//   let currentIndex = 0
//   console.log(questions)
//   console.log(currentIndex)
//   console.log(numObservations)

//   const count = yield apply(query, query.count)
//   console.log(count)
//   let numberOfQueries = count / 100
//   if (count % 100 !== 0) {
//     numberOfQueries += 1
//   }
//   for (let i = 0; i < numberOfQueries; i++) {
//     query.greaterThan('index', currentIndex)
//     let newArray = yield apply(query, query.find)
//     for (let item of newArray) {
//       questions.push(item)
//     }
//     currentIndex += newArray.length
//   }

//   let question = questions[rand(0, questions.length)]
//   console.log(question)

//   // query.find().then(function(results) {
//   //   let objectsInQuery = 
//   // })

//   // for (let i = 0; i < questionsPerRound; i++) {
//   //   //Create query for random question
//   //   let observationId = rand(1, numObservations)
//   //   let Question = Parse.Object.extend('Questions')
//   //   let query = new Parse.Query(Question)
//   //   query.equalTo('type', categoryName)
//   //   query.equalTo('observationId', observationId)
//   // }
//   // //Create query for random question
//   // let observationId = rand(1, numObservations)
//   // let Question = Parse.Object.extend('Questions')
//   // let query = new Parse.Query(Question)
//   // query.equalTo('type', categoryName)
//   // query.equalTo('observationId', observationId)
//   // //Pull question and set state
//   // query.first().then(function(question) {
//   //   let covariateValues = [], outcomeValues = []
//   //   for (let index of covariatesToDisplay) {
//   //     covariateValues.push(question.get('covariateValues')[index])
//   //   }
//   //   for (let index of outcomesToDisplay) {
//   //     outcomeValues.push(question.get('outcomeValues')[index])
//   //   }
//   //   let selectedQuestion = {
//   //     covariateValues,
//   //     objectId: question.id,
//   //     outcomeValues
//   //   }
//   //   dispatch(setQuestion(selectedQuestion))
//   //   browserHistory.push('/round/question')
//   // })
// }



// /*
//  *  Listen for SUBMIT_QUESTION action
//  */
// function* watchSubmitQuestion() {
//   yield* takeLatest(SUBMIT_QUESTION, submitQuestion)
// }
// function* submitQuestion() {
//   const info = select(submitQuestionSelector)
//   console.log(info)
// }
