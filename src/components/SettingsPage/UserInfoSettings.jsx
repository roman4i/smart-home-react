import React from "react";

import "./SettingsPageComp.scss";

const UserInfoSettings = (props) => {
    const {login, color} = props;
    return (
        <div className="userInfoSettings">
            <div>
                {`Login: ${login}`}
            </div>
            <div>
                {`Color: ${color}`}
            </div>
        </div>
    )
}

export default UserInfoSettings;
