import React, { useContext } from "react";
import GlobalContext from "../../store/Context";
import "./UserInfo.scss";

const UserInfoLogo = () => {
    const { userData } = useContext(GlobalContext);
    const logoColor = {
        backgroundColor: userData.color,
    }

    return (
        <div className="userLogo" style={logoColor}>
            <div className="userWord">{userData.login[0]}</div>
        </div>
    )
}
export default UserInfoLogo;