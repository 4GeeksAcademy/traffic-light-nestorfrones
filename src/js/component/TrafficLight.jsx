import React, { useState } from "react";





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


    function changeLight() {
        
        if (green === true ){
            setColor("yellow")
        }    
        if (yellow === true){
            setColor("red")
        }
        if (red === true){
            setColor("green")
        }
    }
    

    return (
        <div>
            <button onClick={() => setColor("red")} className={`btn btn-danger ${!red && "opacity-25"}`}>rojo</button>
            <button onClick={() => setColor("yellow")} className={`btn btn-warning ${!yellow && "opacity-25"}`}>amarillo</button>
            <button onClick={() => setColor("green")} className={`btn btn-success ${!green && "opacity-25"}`}>verde</button>
            <button onClick={() => changeLight()} className="btn btn-success">Change Light</button>
        </div>
    )


        }
export default TrafficLight;