import React, { useContext } from "react";
import Card from "../../components/SensorCards/Card";
import GlobalContext from "../../store/Context";
import "./HomePage.scss";

const HomePage = () => {
    const {sensorsData} = useContext(GlobalContext);
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