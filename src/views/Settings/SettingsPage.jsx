import React, {useContext} from "react";
import UserInfoSettings from "../../components/SettingsPage/UserInfoSettings";
import SensorsSettings from "../../components/SettingsPage/SensorsSettings";
import GlobalContext from "../../store/Context";
import AddCardLink from "../../components/SettingsPage/AddCardLink";

import "./SettingsPage.scss";

const SettingsPage = () => {
    const { userData, setUserData } = useContext(GlobalContext)

    return (
        <div className="settingsPlaceholder">
            <UserInfoSettings login={userData.login} setLogin={setUserData} color={userData.color} />
            <SensorsSettings />
            <AddCardLink />
        </div>
    )
}

export default SettingsPage;
