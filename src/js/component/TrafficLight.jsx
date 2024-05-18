import React, { useState } from "react";


// let light = "red"


const TrafficLight = () => {
    const [green, setGreen] = useState(true);
    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(false);


    function setColor(color) {
       if (color === "green") {
            setGreen(true)
            setYellow(false)
            setRed(false)
       }
       if (color === "yellow") {
            setYellow(true)
            setGreen(false)
            setRed(false)
       }
       if (color === "red") {
            setRed(true)
            setGreen(false)
            setYellow(false)
       }  
    }


    return (
        <div>
            <button onClick={() => setColor("red")} className={`btn btn-danger ${!red && "opacity-25" }`}>rojo</button>
            <button onClick={() => setColor("yellow")} className={`btn btn-warning ${!yellow && "opacity-25" }`}>amarillo</button>
            <button onClick={() => setColor("green")} className={`btn btn-success ${!green && "opacity-25" }`}>verde</button>
        </div>
    )


}   

export default TrafficLight;