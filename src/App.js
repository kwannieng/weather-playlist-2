import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questions from "./pages/initial-questions";
import Home from "./pages/home";
import Login from './pages/login';
import Question1 from './lib/question1';
import Question2 from './lib/question2';


function App() {
  return (
    <Router>
      <div >
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Questions' element={<Questions/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Question1' element={<Question1/>}></Route>
         <Route path='/Question2' element={<Question2/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
