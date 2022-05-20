import React, {useState, useContext} from "react";
import AddSensorsCard from "./AddSensorsCardData";
import insertSensorCard from "../../utils/addSensorsCard";
import GlobalContext from "../../store/Context";

const SensorsSettings = (props) => {
    const { setSensorsData, sensorsData, sensorsToShow } = useContext(GlobalContext);

    const [changeCards, setChangeCards] = useState(false);

    const basicCard = {
        cardName: "",
        valName: "",
        val: "",
    }
    const [newCardData, setNewCardData] = useState(basicCard);

    const handleCheckbox = (event) => {
        const {name, checked} = event.target;
        sensorsToShow[1](old => {
           return (old.map( val => {
                const toReturn = val.name === name ? {...val, isShown: checked} : val;
                return(toReturn)
            }))
        })
    }

    const sensArray = sensorsData.map((sensor, num) => {
        return (
        <div className="sensorsSettingsString" key={num}>
            <div>
                {sensor.name + ": " + sensor.val.length + " strings"}
            </div>
            <input 
                type="checkbox" 
                name={sensor.name} 
                onChange={handleCheckbox}
                checked={sensorsToShow[0][num].isShown}
            />
        </div>
        )
    })

    const [inputError, setInputError] = useState(false)

    const onChangeCard = (event) => {
        const {value} = event.target;

        if (value === "Save") {
            const showError = (
                (newCardData.cardName === "") || (newCardData.valName === "") || (newCardData.val === "")) ?
                 true : false
                if (!showError) {
                    setSensorsData( old => {
                        let newShown = true;
                        old.forEach(element => {
                            if(element.name === newCardData.cardName) newShown = false;
                        });
                        if (newShown) {
                            sensorsToShow[1]( old => {
                                return (
                                    [...old, {
                                        name:newCardData.cardName,
                                        isShown: true,
                                    }]
                                )
                            })
                        }
                        return insertSensorCard(old, newCardData);
                })
                setNewCardData(basicCard)
                setChangeCards(old => !old)
            } else {
                    setInputError(true);
                }
        } else {
            setChangeCards(old => !old)
            setInputError(false)
        }
    }

    return (
        <div className="sensorsSettings">
            <div className="settingsContainerTitle">Sensors Info</div>
            <div>
                <div className="sensorcCountStr">{`Sensors in system: ${sensorsData.length}`}</div>
                <div>
                    {sensArray}
                </div>
            </div>
            { changeCards && <AddSensorsCard setData={setNewCardData} errors={inputError} />}
            <div className={changeCards ? "settingsBtnsGroup" : ""}>
                <input type="button" value={changeCards ? "Save" : "Add"} onClick={onChangeCard} />
                {changeCards && <input type="button" value="Cancel" onClick={onChangeCard} />}
            </div>
        </div>
    )
}

export default SensorsSettings;
