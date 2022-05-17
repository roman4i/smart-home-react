import React from "react";

const SensorsSettings = (props) => {
    const { sensors } = props;
    const sensArray = sensors.map((sensor, num) => {

        return (<div key={num}>
            {sensor.name + " " + sensor.val.length + " strings"}
        </div>)
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
