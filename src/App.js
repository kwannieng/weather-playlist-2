import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initialquestions from "./pages/initial-questions";
import Home from "./pages/home";
import Login from './pages/login';


function App() {
  return (
    <Router>
      <div >
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Initialquestions' element={<Initialquestions/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
