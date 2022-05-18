import React from "react";

const SensorsSettings = (props) => {
    const { sensors, toShow } = props;

    const handleCheckbox = (event) => {
        const {name, checked} = event.target;
        toShow[1](old => {
           return (old.map( val => {
                const toReturn = val.name === name ? {...val, isShown: checked} : val;
                return(toReturn)
            }))
        })
    }

    const sensArray = sensors.map((sensor, num) => {
        return (
        <>
            <div key={num}>
                {sensor.name + " " + sensor.val.length + " strings"}
            </div>
            <input 
                type="checkbox" 
                name={sensor.name} 
                onChange={handleCheckbox}
                checked={toShow[0][num].isShown}
            />
        </>
        )
    })

    return (
        <div className="sensorsSettings">
            <div>Sensors Info</div>
            <div>{`Sensors in system: ${sensors.length}`}</div>
            <div>
                {sensArray}
            </div>
        </div>
    )
}

export default SensorsSettings;
