import React, {useState, useEffect} from "react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero6.jpg";
import hero3 from "../../assets/images/hero2.jpg";
import hero4 from "../../assets/images/hero7.jpg";
import hero5 from "../../assets/images/hero3.jpg";
import hero6 from "../../assets/images/hero8.jpg";
import hero7 from "../../assets/images/hero4.jpg";
import hero8 from "../../assets/images/hero9.jpg";
import hero9 from "../../assets/images/hero5.jpg";
import hero10 from "../../assets/images/hero10.jpg";


const heroArray = [
    hero1, 
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
    hero7,
    hero8,
    hero9,
    hero10,
]

const Hero =() =>{

const [heroimg, setHeroimg] = useState(heroArray[0])
const [index, setIndex] = useState(0);

useEffect(() => {
  const timerId = setInterval(
    () => setIndex((i) => (i + 1) % heroArray.length), // <-- increment index
    6000
  );
  return () => clearInterval(timerId);
}, []);

useEffect(() => {
  setHeroimg(heroArray[index]);
}, [index]);


return <div>
    <img src={heroimg} alt="hero" className="hero"/>
</div>
}

export default Hero;