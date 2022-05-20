import React from "react";

const AddSensorsCard = ({setData, errors}) => {
    const changeEvent = (event) => {
        const {name, value} = event.target;

        if(name ==="cardName") {
            setData(old => {
                return {...old, cardName: value}
            })
        }
        if(name ==="valName") {
            setData(old => {
                return {...old, valName: value}
            })
        }
        if(name ==="val") {
            setData(old => {
                return {...old, val: value}
            })
        }
    }

    const redText = {
        color: 'red',
    }

    return (
        <div className="addSensorCard">
            <input type="text" name="cardName" placeholder="Card name" onChange={changeEvent} />
            <br />
            <input type="text" name="valName" placeholder="Value name" onChange={changeEvent} />
            <br />
            <input type="text" name="val"  placeholder="Value" onChange={changeEvent} />
            {errors && <br />}
            {errors && <div style={redText}>No empty input(s)</div>}
        </div>
    )
}

export default AddSensorsCard;