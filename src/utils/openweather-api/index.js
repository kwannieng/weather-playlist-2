import { useState, useEffect } from "react";
import SpotifyApi from "../spotify-api";
import './style.css'
let valency

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [search, setSearch] = useState(false);

  const APIKey = "1673070f077419daf583240cb1a971fe";

  const fetchData = async () => {
    const URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    const result = await fetch(URL);
    localStorage.setItem("city", city)
    result.json().then(json => {
      setTemp((json.list[0].main.temp - 273.15).toFixed(2));
      valency = ((json.list[0].main.temp - 273.15)/60).toFixed(1);
      localStorage.setItem("Valency", valency)
    });
    
    setSearch(true)
  }

  const click = () => {
    fetchData();
  }

  const cityChange = event => {
    setCity(event.target.value);
    
  }


  return (
    <div>
      {!search && <input className="Usercity" onChange={cityChange} type="text" value={city} />}
      {!search && <button className="citybutton" onClick={click}>Confirm</button>}

      {search && (
        <>
          <div className="weather">
            Hello {city}!
            It's {temp}°C right now.

            <SpotifyApi/> 
          </div>
        </>
      )}

    </div>
  );
}

export default WeatherSearch;
