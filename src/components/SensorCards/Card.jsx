import React from "react";
import "./SensorCards.scss";

const Card = (props) => {
    const {title, sensors} = props
    const SensorsList = sensors.map((sens, num) => 
        <div className="sensorString" key={num}>
            <div>{sens.name}</div>
            <div>{sens.val}</div>
        </div>
    )

    return (
        <div className="sensorCard">
            <div className="cardTopImage"></div>
            <div className="cardTitle">{title}</div>
            {SensorsList}
        </div>
    )
}

export default Card