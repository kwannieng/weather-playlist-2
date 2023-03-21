import {useState, useEffect} from "react";

const URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + APIKey
const APIKey = "1673070f077419daf583240cb1a971fe";
let searchCity = '';


function search () {
    const [ temp , setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch (URL)
            result.json().then(json => {
                setTemp(json.main.temp - 273.15)
            });
        }
        fetchData();
    }, []);

    


//     let fIconCode1 = response.list[1].weather[0].icon
//   console.log(fIconCode1)

//   let fIconURL1 = "https://openweathermap.org/img/wn/" + fIconCode1 + "@2x.png";


}

export default search;