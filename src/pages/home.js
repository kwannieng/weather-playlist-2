import React from "react";
import hero from "../assets/images/hero1.jpg";

const Home = () =>{
return <div>
    <img src={hero} alt="hero" className="hero"/>
    <div>
        <h1>Weather Playlist</h1>
    </div>

    <div>
        <p>
           Welcome! Let's create a music playing that match the weather.
        </p>
    </div>
</div>
}

export default Home;