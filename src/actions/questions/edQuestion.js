import { SET_ED_QUESTION } from 'constants'

export function setEdQuestion(edQuestion) {
  return {
    type: SET_ED_QUESTION,
    yearsExperience: edQuestion.yearsExperience,
    yearsEducation: edQuestion.yearsEducation,
    observationID: edQuestion.observationID,
    answers: edQuestion.answers,
    answer: edQuestion.answer
  }
}
