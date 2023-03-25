import { useState } from "react";
import './style.css';
import { Link, NavLink } from 'react-router-dom';
let valence

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
      valence = ((json.list[0].main.temp - 273.15)/60).toFixed(1);
      localStorage.setItem("Valence", valence)
    });
    
    setSearch(true);
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

          </div>
          <Link to="/Login">
          <button className="nextbutton">Next</button>
          </Link>
        </>
      )}

    </div>
  );
}

export default WeatherSearch;
