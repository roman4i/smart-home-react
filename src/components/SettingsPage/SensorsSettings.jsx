import React, { useContext} from "react";
import GlobalContext from "../../store/Context";
import formatLoggerData from "../../utils/loggerFormater";

const SensorsSettings = () => {
    const { sensorsData, sensorsToShow, logger } = useContext(GlobalContext);

    const handleCheckbox = (event) => {
        const {name, checked} = event.target;
        sensorsToShow[1](old => {
           return (old.map( val => {
                const toReturn = val.name === name ? {...val, isShown: checked} : val;
                return toReturn
            }))
        })
        logger.setLoggedData( old => {
            const checkedPhrase = checked ? 'showing' : 'hided'
            return formatLoggerData(old, 'Card "' + name + '" now is ' + checkedPhrase)
        })
    }

    const sensArray = sensorsToShow[0]?.map((val, num) => {
        return (
            <div className="sensorsSettingsString" key={num}>
                <div>
                    {sensorsData[num]?.name + ": " + sensorsData[num]?.val.length + " strings"}
                </div>
                <input 
                    type="checkbox" 
                    name={sensorsData[num]?.name} 
                    onChange={handleCheckbox}
                    checked={val.isShown}
                />
            </div>
        )
    })

    return (
        <div className="sensorsSettings">
            <div className="settingsContainerTitle">Sensors Info</div>
            <div>
                <div className="sensorcCountStr">{`Sensors in system: ${sensorsData.length}`}</div>
                <div>
                    {sensArray}
                </div>
            </div>
        </div>
    )
}

export default SensorsSettings;
