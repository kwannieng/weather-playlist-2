import React from "react";
import hero from "../assets/images/hero1.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../components/Header";

const Home = () =>{
return <div>
    <Header/>
    <img src={hero} alt="hero" className="hero"/>
    <div>
        <h1>Weather Playlist</h1>
    </div>

    <div>
        <p>
           Welcome! Let's create a music playlist that match the weather.
           <Link to="Questions">
           <button>Go</button>
           </Link>
        </p>
        
    </div>
</div>
}

export default Home;