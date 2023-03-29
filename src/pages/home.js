import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../components/Header";
import Hero from "../components/hero";
import SpotifyApi from "../utils/spotify-api";

const Home = () =>{
return <div>
    <Header/>
    <Hero/>

    <div className="intro">
        <h1>Weather Playlist</h1>
        <div>
        <p>
           Welcome!
        </p>
        <p>
           Let's create a music playlist that matches the weather.
        </p>
        <SpotifyApi/>
    </div>
    </div>
</div>
}

export default Home;