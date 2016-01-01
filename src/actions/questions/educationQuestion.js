import { SET_EDUCATION_QUESTION } from 'constants'

export function setEducationQuestion(educationQuestion) {
  return {
    type: SET_EDUCATION_QUESTION,
    yearsExperience: educationQuestion.yearsExperience,
    yearsEducation: educationQuestion.yearsEducation,
    observationID: educationQuestion.observationID,
    answers: educationQuestion.answers,
    answer: educationQuestion.answer
  }
}
