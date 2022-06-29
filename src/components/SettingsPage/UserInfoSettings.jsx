import React, { useState, useContext } from "react";
import GlobalContext from "../../store/Context";
import formatLoggerData from "../../utils/loggerFormater";

import "./SettingsPageComp.scss";

const UserInfoSettings = (props) => {
    const {login, color, setLogin} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({login, color});
    const {logger, setSensorsData, sensorsToShow} = useContext(GlobalContext);
    const [editColor, setEditColor] = useState(false);

    const editEvent = () => {
        setIsEditing( old => !old);
        if (isEditing) {
            let isSend = false;
            if (editedData.login !== login) {
                isSend = true;
                logger.setLoggedData( oldLog => {
                    return formatLoggerData(oldLog, 'Edited login')
                })
            }
            if ((editedData.color !== color) && editColor) {
                isSend = true;
                logger.setLoggedData( oldLog => {
                    return formatLoggerData(oldLog, 'Edited color')
                })
            }
            if (isSend && editColor){
                fetch('http://localhost:8080/API/setUser', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        login: editedData.login,
                        color: editedData.color
                    })
                })
                .then(resp => {
                    if (resp.status === 200) {
                        setLogin(editedData)
                        logger.setLoggedData(oldLog => {
                            return formatLoggerData(oldLog, 'Updated user`s color')
                        })
                    }
                    if (resp.status === 201) {
                        setLogin(editedData)
                        logger.setLoggedData(oldLog => {
                            return formatLoggerData(oldLog, `Added new user - ${editedData.login}`)
                        })
                        resp.json().then(takeNewSensors => {
                            if(takeNewSensors.sensors.length === 0) {
                                setSensorsData([])
                            }
                        })
                    }
                })

                .catch(reqErr => logger.setLoggedData(oldLog => {
                    setEditedData({login, color});
                    return formatLoggerData(oldLog, 'Failed to update user`s data')
                }))
            }
            if(isSend && (editColor === false)) {
                fetch(`http://localhost:8080/API/users/${editedData.login}`)
                .then(resp => {
                    return {
                        status: resp.status,
                        payload: resp.json()
                    }
                })
                .then(result => {
                    if (result.status === 200) {
                        result.payload.then(sensData => {
                            setLogin({
                                login: editedData.login,
                                color: sensData.color
                            })
                            setSensorsData(sensData.sensors);
                            // sensorsToShow[1](sensData.sensors.map(val => {
                            //     const defs = {
                            //       name: val.name,
                            //       isShown: true,
                            //     }
                            //     return (defs)
                            // }))
                        })
                    } else {
                        setEditedData({login, color});
                        logger.setLoggedData(oldLog => {
                            return formatLoggerData(oldLog, 'No user`s data in the base')
                        })
                    }
                })
                .catch(reqError => logger.setLoggedData(oldLog => {
                    setEditedData({login, color});
                    return formatLoggerData(oldLog, 'Failed to load user`s data')
                }))
            }
        };
    }

    const changeParamEvent = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case "login":
                setEditedData(old => {
                    return ({...old, login:value})
                })
            break;
            case "color":
                setEditedData(old => {
                    return ({...old, color:value})
                })
            break;
        }
    }

    return (
        <div className="userInfoSettings">
            <div className="settingsContainerTitle">User`s Info</div>
            <div className="userSettingsString">
                <div>Login:</div>
                { isEditing ?
                <input type="text" name="login" placeholder={login} onChange={changeParamEvent}/> :
                <div>{login}</div>}
            </div>
            <div className="userSettingsString">
                <div>Color:</div>
                { isEditing ? 
                    (<input type="text" name="color" placeholder={color} onChange={changeParamEvent}/>) :
                    (<>
                        <div>{color}</div>
                        <input type="checkbox" checked={editColor} onChange={()=> setEditColor( old => !old)}/>
                    </>)
                }
            </div>
            <input type="button" value={isEditing ? "Save" : "Edit"} onClick={editEvent} />
        </div>
    )
}

export default UserInfoSettings;
