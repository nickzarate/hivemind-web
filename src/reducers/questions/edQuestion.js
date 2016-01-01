import { SET_ED_QUESTION } from 'constants'

const initialState = {
  yearsExperience: 0,
  yearsEducation: 0,
  observationID: 0,
  answers: ['','','','','','','','',''],
  answer: 0
}

export default function edQuestion(state = initialState, action) {
  switch (action.type) {
  case SET_ED_QUESTION:
    return {
      yearsExperience: action.yearsExperience,
      yearsEducation: action.yearsEducation,
      observationID: action.observationID,
      answers: action.answers,
      answer: action.answer
    }
  default:
    return state
  }
}
