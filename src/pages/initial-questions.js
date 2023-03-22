import { useState } from "react";
import Typed from "react-typed";
import { Question1, Question2, Greeting} from "../components/questions";


const Initialquestions =() => {
    const [city, setCity] = useState("");
    const click = () => {
        alert(city)
    }
    const cityChange = event =>{
        setCity(event.target.value)
    }
    
    return (
      <div>
        <Typed
            strings={[
                "Let's create the best music playlist that match the current weather!",
                "First of all, please tell me which city are staying right now?"
                ]}
                typeSpeed={40}
            >
        </Typed>

        <div>
        <input className="Usercity" onChange={cityChange}  type="text" value = {city}/>
        <button onClick = {click}>Confirm</button>
        </div>


      </div>


    );
}

export default Initialquestions;