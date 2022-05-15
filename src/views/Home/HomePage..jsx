import React from "react";
import Card from "../../components/SensorCards/Card";
import { sensorsData } from "../../store/fake-sensors";
import "./HomePage.scss";

const HomePage = () => {
    const Cards = sensorsData.map((card, key) => 
        <Card title={card.name} sensors={card.val} key={key} />
    )

    return (
        <div className="sensorsContainer">
            {Cards}
        </div>
    )
}

export default HomePage