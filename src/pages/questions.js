import React, { useState } from "react";
import Header from "../components/Header";
import WeatherSearch from "../utils/openweather-api";



const Questions =() =>{ 
    return <div>
        <Header/>

        <div className="content">
        Let's create the best music playlist that matches the current weather!
        First of all, please tell me which city are you staying now?"
        </div>

       <WeatherSearch/>
      </div>
  }

export default Questions;
