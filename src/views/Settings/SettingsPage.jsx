import React, {useContext} from "react";
import UserInfoSettings from "../../components/SettingsPage/UserInfoSettings";
import SensorsSettings from "../../components/SettingsPage/SensorsSettings";
import GlobalContext from "../../store/Context";

import "./SettingsPage.scss";

const SettingsPage = () => {
    const { userData, sensorsData, setUserData, sensorsToShow } = useContext(GlobalContext)

    return (
        <div className="settingsPlaceholder">
            <UserInfoSettings login={userData.login} setLogin={setUserData} color={userData.color} />
            <SensorsSettings sensors={sensorsData} toShow={sensorsToShow} />
        </div>
    )
}

export default SettingsPage;
