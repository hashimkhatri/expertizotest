import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addInList } from "../../actions/PresistAction";
import { OptionHelper, getPercentage, myDecode } from "../../utils/Helper";
import Stars from "./Stars";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import RenderOptions from "./RenderOptions";

class Landing extends Component {
  constructor(props) {
    super(props);
    const {
      presist: { questions, startFrom },
    } = props;
    this.state = {
      presist: this.props.presist,
      submitAnswer: "",
      options: OptionHelper(
        questions[startFrom]["incorrect_answers"],
        questions[startFrom]["correct_answer"]
      ),
      buttonDisabled: false,
      isCorrect: "",
    };
  }

  submit = () => {
    const {
      presist: { startFrom, totalQuestions, questions },
      submitAnswer,
    } = this.state;
    if (submitAnswer === "") {
      alert("Please select an option");
    } else {
      var cAns = myDecode(questions[startFrom]["correct_answer"]);
      var uAns = submitAnswer;
      this.setState(
        {
          isCorrect: cAns === uAns ? "Correct!" : "Sorry!",
          buttonDisabled: true,
        },
        () => {
          if (startFrom < totalQuestions - 1) {
            this.props.addInList(this.state);
          }
        }
      );
    }
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    setTimeout(() => {
      const {
        presist: { questions, startFrom },
      } = nextProps;
      this.setState({
        presist: nextProps.presist,
        submitAnswer: "",
        options: OptionHelper(
          questions[startFrom]["incorrect_answers"],
          questions[startFrom]["correct_answer"]
        ),
        buttonDisabled: false,
        isCorrect: "",
      });
    }, 1000);
  };
  render() {
    const {
      presist: {
        questions,
        startFrom,
        totalQuestions,
        answered,
        wrongAnswered,
        correctAnswered,
      },
      options,
      submitAnswer,
      buttonDisabled,
      isCorrect,
    } = this.state;
    const star = { easy: 1, medium: 2, hard: 3 };
    const questionsObject = questions[startFrom];
    const overAllPercentage = getPercentage(answered + 1, totalQuestions);
    const correctPercentage = getPercentage(correctAnswered, totalQuestions);
    const wrongPercentage = getPercentage(wrongAnswered, totalQuestions);
    const score =
      correctAnswered === 0
        ? correctAnswered
        : getPercentage(correctAnswered, answered);
    return (
      <>
        <TopBar percentage={overAllPercentage} />
        <section className="jumbotron myjumbotron">
          <div className="container">
            <h1 className="jumbotron-heading">
              Question {answered + 1 + " of " + totalQuestions}
            </h1>
            <div>
              <span className="categoryHeading">
                {myDecode(questionsObject["category"])}
              </span>
            </div>

            <Stars star={star[questionsObject["difficulty"]]} />
            <p className="question">{myDecode(questionsObject["question"])}</p>
            <div className="row">
              <RenderOptions
                options={options}
                currentAnswer={submitAnswer}
                onChange={(data) => {
                  this.setState({ submitAnswer: data });
                }}
              />
            </div>
            <h4 className="text-center ">{isCorrect}</h4>
            <div className="text-center">
              <button
                className={classnames("btn btn-secondary my-2", {
                  disabled: buttonDisabled,
                })}
                onClick={this.submit}
              >
                Next Question
              </button>
            </div>
          </div>
        </section>
        <BottomBar
          percentage={overAllPercentage}
          correctPercentage={correctPercentage}
          wrongPercentage={wrongPercentage}
          score={score}
        />
      </>
    );
  }
}

Landing.propTypes = {
  errors: PropTypes.object.isRequired,
  presistStore: PropTypes.array,
  addInList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  presist: state.presistStore,
});

export default connect(mapStateToProps, { addInList })(Landing);
