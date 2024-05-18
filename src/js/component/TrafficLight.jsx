import React, { useState } from "react";





const TrafficLight = () => {
    const [green, setGreen] = useState(true);
    const [yellow, setYellow] = useState(false);
    const [red, setRed] = useState(false);

    const [purple, setPurple] = useState(false);

    const [newColor, setNewColor] = useState(false);


    function addNewColor() {
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

        if (newColor === false) {
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
            if (green === true) {
                setColor("yellow")
            }
            if (yellow === true) {
                setColor("red")
            }
            if (red === true) {
                setColor("purple")
            }
            if (purple === true) {
                setColor("green")
            }
        }
        if (newColor === false) {
            if (green === true) {
                setColor("yellow")
            }
            if (yellow === true) {
                setColor("red")
            }
            if (red === true) {
                setColor("green")
            }
        }
    }


    if (newColor === true) {
        return (
            <div className="row d-flex justify-content-center py-5">
                <div className="d-flex flex-column align-items-center py-5">
                <div className="bg-dark p-3">
                        <button onClick={() => setColor("red")} className={`light btn btn-danger rounded-circle ${!red && "opacity-25"}`}></button>
                    </div>
                    <div className="bg-dark p-3">
                        <button onClick={() => setColor("yellow")} className={`light btn btn-warning rounded-circle ${!yellow && "opacity-25"}`}></button>
                    </div>
                    <div className="bg-dark p-3">
                        <button onClick={() => setColor("green")} className={`light btn btn-success rounded-circle ${!green && "opacity-25"}`}></button>
                    </div>
                    <div className="bg-dark p-3">
                     <button onClick={() => setColor("purple")} className={`new light btn rounded-circle ${!purple && "opacity-25"}`}></button>
                    </div>
                </div>
                <div className="col-12 py-5">
                    <button onClick={() => changeLight()} className="mx-2 button btn btn-success">Change Light</button>
                    <button onClick={() => addNewColor()} className="mx-2 button btn btn-success">Purple On/Off</button>

                </div>
            </div>
        )
    }

    if (newColor === false) {
        return (
            <div className="row py-5">
                <div className="col d-flex flex-column align-items-center py-5">
                    <div className="bg-dark p-3">
                        <button onClick={() => setColor("red")} className={`light btn btn-danger rounded-circle ${!red && "opacity-25"}`}></button>
                    </div>
                    <div className="bg-dark p-3">
                        <button onClick={() => setColor("yellow")} className={`light btn btn-warning rounded-circle ${!yellow && "opacity-25"}`}></button>
                    </div>
                    <div className="bg-dark p-3">
                        <button onClick={() => setColor("green")} className={`light btn btn-success rounded-circle ${!green && "opacity-25"}`}></button>
                    </div>
                </div>
                <div className="col-12 py-5">
                    <button onClick={() => changeLight()} className="mx-2 button btn btn-success">Change Light</button>
                    <button onClick={() => addNewColor()} className="mx-2 button btn btn-success">Purple On/Off</button>
                </div>
            </div>
        )
    }
}
export default TrafficLight;