import Typed from "react-typed";


const Question2 =()=>{
return <div>
    <Typed
    strings={[
        "Let's make the most out of the day with the best music playlist.",
        "What music genre do you enjoy the most?"
        ]}
        typeSpeed={40}
    >
    </Typed>
    <div>
         <button  className="genre pop">Pop</button>
         <button  className="genre rock">Rock</button>
         <button  className="genre classical">Classical</button>
     </div>
</div>
}

export default Question2;
