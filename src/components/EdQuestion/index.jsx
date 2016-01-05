import React, { PropTypes } from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { questionActions } from 'actions'
import { reduxify, rand } from 'toolbox'
import Question from 'components/Question'

export class EdQuestion extends Question {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.pullQuestion()
  }


  handleSubmit(answers, estimate) {
    return () => {
      const { question } = this.props
      //TODO: Store answer to current round

      // //STORE INFORMATION AS A PARSE ANSWER
      // var points = answers[question.questionInfo.correctAnswer] * 50
      // var currentUser = Parse.User.current()
      // currentUser.increment('honey', points)
      // currentUser.save()
      // var that = this

      // //Set the education question to an answer
      // var EducationAnswer = Parse.Object.extend('EducationAnswer')
      // var educationAnswer = new EducationAnswer()
      // educationAnswer.set('educationQuestion', this.props.questionPointer)

      // //Set the answers and the estimate
      // educationAnswer.set('answers', question.answers)
      // educationAnswer.set('pointEstimate', question.estimate)

      // educationAnswer.save({
      //   success: function(educationAnswer) {
      //     //saveAnswer(educationAnswer)
      //     if (question.currentRound) {
      //       var EducationRound = Parse.Object.extend('EducationRound')
      //       var educationRound = new EducationRound()
      //       educationRound.set('educationAnswers', [])
      //     } else {
      //       educationRound.add('educationAnswers', educationAnswer)
      //     }
      //   },
      //   error: function(error) {
      //     alert('Error: ' + error.code + ' ' + error.message)
      //   }
      // })

      // var saveAnswer = function(educationAnswer) {
      //   var answerHistory = currentUser.get('answerHistory')
      //   answerHistory.fetch({
      //     success: function(answerHistory) {
      //       if (that.props.newRound) {
      //         console.log('first question')
      //         answerHistory.set('latestEducationRound', [])
      //       } else {
      //         console.log('not the first question')
      //       }
      //       answerHistory.add('latestEducationRound', educationAnswer)
      //       answerHistory.save({
      //         success: function() {
      //           that.props.onAnswered()
      //         },
      //         error: function(error) {
      //           alert('Couldnt save answer history: Error: ' + error.code + ' ' + error.message)
      //         }
      //       })
      //     },
      //     error: function(error) {
      //       alert('Couldnt fetch answer history: Error: ' + error.code + ' ' + error.message)
      //     }
      //   })
      // }

      this.refs.estimateInput.value = ''
      this.props.onSubmit(answers, estimate)
      this.props.actions.resetBank()
      this.pullQuestion()
    }
  }

  pullQuestion() {
    var loadQuestion = function(response) {
      var question = {
        x1: response.get('yearsExperience'),
        x2: response.get('yearsEducation'),
        observationID: observationID,
        answerText: response.get('answers'),
        correctAnswer: response.get('answer')
      }
      this.props.actions.setQuestion(question)
    }.bind(this)

    var observationID = rand(1, 100)
    var EducationQuestion = Parse.Object.extend('EducationQuestion')
    var query = new Parse.Query(EducationQuestion)
    query.equalTo('observationID', observationID)
    query.first({
      success(response) {
        loadQuestion(response)
      },
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      }
    })
  }

  render() {
    console.log(this)
    const { question } = this.props
    return (
      <div>
        <p>{ 'Hello!' }</p>
        <p>{ 'Bank: ' }{ this.props.question.bank }</p>
        <p>{ 'years of experience: ' }{ question.questionInfo.x1 }</p>
        <p>{ 'years of education: ' }{ question.questionInfo.x2 }</p>
        <input
          onChange={ this.handleEstimate }
          placeholder="ESTIMATE"
          ref="estimateInput"
        />
        <button onClick={ this.handleDeposit(0) }>{ question.questionInfo.answerText[0] }{ ': ' }{ question.answers[0] }</button>
        <button onClick={ this.handleDeposit(1) }>{ question.questionInfo.answerText[1] }{ ': ' }{ question.answers[1] }</button>
        <button onClick={ this.handleDeposit(2) }>{ question.questionInfo.answerText[2] }{ ': ' }{ question.answers[2] }</button>
        <button onClick={ this.handleDeposit(3) }>{ question.questionInfo.answerText[3] }{ ': ' }{ question.answers[3] }</button>
        <button onClick={ this.handleDeposit(4) }>{ question.questionInfo.answerText[4] }{ ': ' }{ question.answers[4] }</button>
        <button onClick={ this.handleDeposit(5) }>{ question.questionInfo.answerText[5] }{ ': ' }{ question.answers[5] }</button>
        <button onClick={ this.handleDeposit(6) }>{ question.questionInfo.answerText[6] }{ ': ' }{ question.answers[6] }</button>
        <button onClick={ this.handleDeposit(7) }>{ question.questionInfo.answerText[7] }{ ': ' }{ question.answers[7] }</button>
        <button onClick={ this.handleDeposit(8) }>{ question.questionInfo.answerText[8] }{ ': ' }{ question.answers[8] }</button>

        <button onClick={ this.handleSubmit(question.answers, question.estimate) }>{ 'Submit Question' }</button>
      </div>
    )
  }
}

EdQuestion.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default reduxify({
  component: EdQuestion,
  reducer: 'question',
  actions: questionActions
})
