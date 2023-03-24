import Typed from "react-typed";
import WeatherSearch from "../utils/openweather-api";

const Question1 =() => {

    return (
      <div>
        <Typed
            strings={[
                "Let's create the best music playlist that match the current weather!",
                ]}
                typeSpeed={40}
            >
        </Typed>

       <WeatherSearch/>

      </div>
    );
}

export default Question1;