import React, { useState } from "react";





const TrafficLight = () => {
    const [green, setGreen] = useState(true);
    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(false);
    
    const [purple, setPurple] = useState(false);

    const [newColor, setNewColor] = useState(false);


    function addNewColor (){
        if (newColor === false)
            setNewColor(true)
            setColor("purple")
        if (newColor === true)
            setNewColor(false)
            setColor("red")
    }
 

    function setColor(color) {
        if (newColor === true) {
            if (color === "purple") {
                setPurple(true)
                setGreen(false)
                setYellow(false)
                setRed(false)
            }
            if (color === "green") {
                setGreen(true)
                setYellow(false)
                setRed(false)
                setPurple(false)
            }
            if (color === "yellow") {
                setYellow(true)
                setGreen(false)
                setRed(false)
                setPurple(false)
            }
            if (color === "red") {
                setRed(true)
                setGreen(false)
                setYellow(false)
                setPurple(false)
            }
        }

        if(newColor === false) {
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
       

    }


    function changeLight() {
        if (newColor === true) {
            if (green === true ){
                setColor("yellow")
            }    
            if (yellow === true){
                setColor("red")
            }
            if (red === true){
                setColor("purple")
            }
            if (purple === true){
                setColor("green")
            }
        }
        if (newColor === false) {
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
    }

    
    if (newColor === true){
        return (
            <div>
                <button onClick={() => setColor("red")} className={`btn btn-danger ${!red && "opacity-25"}`}>rojo</button>
                <button onClick={() => setColor("yellow")} className={`btn btn-warning ${!yellow && "opacity-25"}`}>amarillo</button>
                <button onClick={() => setColor("green")} className={`btn btn-success ${!green && "opacity-25"}`}>verde</button>
                <button onClick={() => setColor("purple")} className={`btn btn-success ${!purple && "opacity-25"}`}>purpura</button>
                <button onClick={() => changeLight()} className="btn btn-success">Change Light</button>
                <button onClick={() => addNewColor()} className="btn btn-success">Add Purple</button>

            </div>
        )
    }

    if (newColor === false){
        return (
            <div>
                <button onClick={() => setColor("red")} className={`btn btn-danger ${!red && "opacity-25"}`}>rojo</button>
                <button onClick={() => setColor("yellow")} className={`btn btn-warning ${!yellow && "opacity-25"}`}>amarillo</button>
                <button onClick={() => setColor("green")} className={`btn btn-success ${!green && "opacity-25"}`}>verde</button>
                <button onClick={() => changeLight()} className="btn btn-success">Change Light</button>
                <button onClick={() => addNewColor()} className="btn btn-success">Add Purple</button>

            </div>
    )
    }



        }
export default TrafficLight;