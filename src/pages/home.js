import React from "react";
import hero from "../assets/images/hero1.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../components/Header";

const Home = () =>{
return <div>
    <Header/>
    <img src={hero} alt="hero" className="hero"/>
    <div className="intro">
        <h1>Weather Playlist</h1>
        <div>
        <p>
           Welcome! 
           Let's create a music playlist that match the weather.
        </p>
        <Link to="Questions">
           <button>Start</button>
        </Link>
    </div>
    </div>
</div>
}

export default Home;