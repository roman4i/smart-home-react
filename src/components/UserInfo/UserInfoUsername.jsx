import React, { useContext } from "react";
import GlobalContext from "../../store/Context";
import "./UserInfo.scss";

const UserInfoUsername = () => {
    const { userData } = useContext(GlobalContext);

    return (
        <div className="userNameContainer">
            <div>Hello </div>
            <div className="userLogin">{ userData.login }</div>
        </div>
    )
}

export default UserInfoUsername;