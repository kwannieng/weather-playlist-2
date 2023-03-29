import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questions from "./pages/questions";
import Home from "./pages/home";
import Playlist from './pages/playlist';


function App() {
  return (
    <Router>
      <div >
        <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Questions' element={<Questions/>}></Route>
         <Route path='/Playlist' element={<Playlist/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
