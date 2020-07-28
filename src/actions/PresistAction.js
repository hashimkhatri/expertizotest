import { QUESTIONS } from "./types";

export const addInList = (data) => (dispatch) => {
  var changeData = {
    questions: data.presist.questions,
    totalQuestions: data.presist.questions.length,
    startFrom: data.presist.startFrom + 1,
    answered: data.presist.answered + 1,
    wrongAnswered: data.presist.wrongAnswered,
    correctAnswered: data.presist.correctAnswered,
  };
  if (data.isCorrect === "Correct!") {
    changeData["correctAnswered"] = data.presist.correctAnswered + 1;
  } else {
    changeData["wrongAnswered"] = data.presist.wrongAnswered + 1;
  }
  dispatch({
    type: QUESTIONS,
    payload: changeData,
  });
};
