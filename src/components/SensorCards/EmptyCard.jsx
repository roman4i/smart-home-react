import React from "react";
import "./SensorCards.scss";

const EmptyCard = () => {
    return (
        <div className="sensorCard">
            <div className="cardTitle">Import Cards</div>
            <div>
                You must add cards from settings. Just connect new sensor by address
            </div>
        </div>
    );
}

export default EmptyCard;