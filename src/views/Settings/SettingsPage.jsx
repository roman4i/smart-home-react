import React, {useContext} from "react";
import UserInfoSettings from "../../components/SettingsPage/UserInfoSettings";
import SensorsSettings from "../../components/SettingsPage/SensorsSettings";
import GlobalContext from "../../store/Context";

import "./SettingsPage.scss";

const SettingsPage = () => {
    const { userData, sensorsData } = useContext(GlobalContext)

    return (
        <div className="settingsPlaceholder">
            <UserInfoSettings login={userData.login} color={userData.color} />
            <SensorsSettings sensors={sensorsData} />
        </div>
    )
}

export default SettingsPage;
