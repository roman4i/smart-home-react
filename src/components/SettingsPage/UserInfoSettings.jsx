import React, { useState } from "react";

import "./SettingsPageComp.scss";

const UserInfoSettings = (props) => {
    const {login, color, setLogin} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({login, color});

    const editEvent = () => {
        setIsEditing( old => !old);
        if (isEditing) setLogin(editedData);
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
        console.log(editedData);
    }

    return (
        <div className="userInfoSettings">
            <div>User`s Info</div>
            <div className="userSettingsString">
                <div>Login:</div>
                { isEditing ?
                <input type="text" name="login" placeholder={login} onChange={changeParamEvent}/> :
                <div>{login}</div>}
            </div>
            <div className="userSettingsString">
                <div>Color:</div>
                { isEditing ?
                <input type="text" name="color" placeholder={color} onChange={changeParamEvent}/> :
                <div>{color}</div>}
            </div>
            <input type="button" value={isEditing ? "Save" : "Edit"} onClick={editEvent} />
        </div>
    )
}

export default UserInfoSettings;
