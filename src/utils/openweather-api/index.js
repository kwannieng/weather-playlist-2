import { useState, useEffect } from "react";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);

  const APIKey = "1673070f077419daf583240cb1a971fe";

  const fetchData = async () => {
    const URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    const result = await fetch(URL);
    result.json().then(json => {
      setTemp((json.list[0].main.temp - 273.15).toFixed(2));
    });
  }

  const click = () => {
    fetchData();
  }

  const cityChange = event => {
    setCity(event.target.value);
  }

  return (
    <div>
      <input className="Usercity" onChange={cityChange} type="text" value={city} />
      <button onClick={click}>Confirm</button>

      Hello {city}!
      It's {temp}°C right now.
    </div>
  );
}

export default WeatherSearch;
