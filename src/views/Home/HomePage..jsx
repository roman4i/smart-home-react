import React, { useContext } from "react";
import Card from "../../components/SensorCards/Card";
import EmptyCard from "../../components/SensorCards/EmptyCard";
import GlobalContext from "../../store/Context";
import "./HomePage.scss";

const HomePage = () => {
    const {sensorsData, sensorsToShow} = useContext(GlobalContext);
    let Cards;
    if (sensorsData.length !== 0) {
        Cards = sensorsData.map((card, key) => 
            {
            return(
                sensorsToShow[0][key].isShown && <Card title={card.name} sensors={card.val} key={key} />
            )}
        )
    } else {
        Cards = <EmptyCard />;
    }

    return (
        <div className="sensorsContainer">
            {Cards}
        </div>
    )
}

export default HomePage