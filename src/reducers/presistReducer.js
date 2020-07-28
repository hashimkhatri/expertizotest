import { QUESTIONS } from "../actions/types";
import question from "./questions.json";
const INITIAL_STATE = {
  questions: question,
  totalQuestions: question.length,
  startFrom: 0,
  answered: 0,
  wrongAnswered: 0,
  correctAnswered: 0,
};

function presistStoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case QUESTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}
export default presistStoreReducer;
