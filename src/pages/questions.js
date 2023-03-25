import React, { Component,useState } from "react";
import Question1 from "../components/questions";
import Header from "../components/Header";
import Login from "../components/SpotifyLogin";



class Questions extends Component {
  state = {
    currentQuestion: <Question1 />
  };

  handleQuestionChange = question => {
    this.setState({ currentQuestion: question });
  };

  renderQuestion = () => {
    return <div>
      <Header/>
      <Login/>
    </div>;
  }

  handleClick = () => {
    this.handleQuestionChange(this.renderQuestion());
  }

  render() {
    return <div>
        <Header/>
        {this.state.currentQuestion}
    </div>;
  }
}

export default Questions;
