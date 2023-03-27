import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../components/Header";
import Hero from "../components/hero";

const Home = () =>{
return <div>
    <Header/>
    <Hero/>
    {/* <img src={hero} alt="hero" className="hero"/> */}

    <div className="intro">
        <h1>Weather Playlist</h1>
        <div>
        <p>
           Welcome! 
           Let's create a music playlist that matches the weather.
        </p>
        <Link to="Questions">
           <button>Start</button>
        </Link>
    </div>
    </div>
</div>
}

export default Home;