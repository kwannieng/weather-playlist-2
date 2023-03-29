import React, { useState } from "react";
import Typed from "react-typed";
import Header from "../components/Header";
import WeatherSearch from "../utils/openweather-api";



const Questions =() =>{ 
    return <div>
        <Header/>

        <div className="content">
        <Typed
            strings={[
                "Let's create the best music playlist that matches the current weather! </br> First of all, please tell me which city are you staying now?"
                ]}
                typeSpeed={40}
            >
        </Typed>
        </div>

       <WeatherSearch/>
      </div>
  }

export default Questions;
