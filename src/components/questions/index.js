import Typed from "react-typed";
import WeatherSearch from "../../utils/openweather-api";
import './style.css'

const Question1 =() => {

    return (
      <div>
      <div className="content">
        <Typed
            strings={[
                "Let's create the best music playlist that match the current weather! </br> First of all, please tell me which city are you staying now?"
                ]}
                typeSpeed={40}
            >
        </Typed>
        </div>
       <WeatherSearch/>

      </div>
    );
}

export default Question1;
