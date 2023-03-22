import Typed from "react-typed";


const Question1 = () => {
    return (
        <Typed
        strings={
            ["First of all, please tell me which city are staying right now?"]
        }
        typeSpeed={40}>
       </Typed>
    )
}

const Greeting = () => {
    return (
        <Typed
        strings={
            ["Hello ${city}! It's a ${weather} day. Let's make the most out of the day with the best music playlist."]
        }
        />
    )
}

const Question2 = () => {
    return (
        <div>
            <Typed
            strings={
                ["What music genre do you enjoy the most?"]
            }
            typeSpeed={40}>
            <button className="genre pop">Pop</button>
            <button className="genre rock">Rock</button>
            <button className="genre classical"> Classical</button>
            </Typed>
        </div>)
}

export {
    Greeting,
    Question1, 
    Question2}
