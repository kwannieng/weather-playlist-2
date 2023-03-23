import React, { Component } from "react";
import Question1 from "../lib/question1";
import Question2 from "../lib/question2";

class Questions extends Component {
  state = {
    currentQuestion: <Question1 />
  };

  handleQuestionChange = question => {
    this.setState({ currentQuestion: question });
  };

  renderQuestion = () => {
    return <div>
      <Question2 />
    </div>;
  }

  handleClick = () => {
    this.handleQuestionChange(this.renderQuestion());
  }

  render() {
    return <div>
        {this.state.currentQuestion}
        <button onClick={this.handleClick}>Next</button>
    </div>;
  }
}

export default Questions;
