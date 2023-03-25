import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questions from "./pages/questions";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <div >
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Questions' element={<Questions/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
