import React, { Component,useState } from "react";
import Question1 from "../components/questions";
import Header from "../components/Header";

const Questions =() =>{
  return <div>
    <Header/>
    <Question1/>
  </div>
}


// class Questions extends Component {
//   state = {
//     currentQuestion: <Question1 />
//   };

//   handleQuestionChange = question => {
//     this.setState({ currentQuestion: question });
//   };

//   renderQuestion = () => {
//     return <div>
//       <Question2 />
//     </div>;
//   }

//   handleClick = () => {
//     this.handleQuestionChange(this.renderQuestion());
//   }

//   render() {
//     return <div>
//         {this.state.currentQuestion}
//         <button onClick={this.handleClick}>Next</button>


//     </div>;
//   }
// }

export default Questions;
