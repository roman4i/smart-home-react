import React from "react";
import "./Header.scss"
import Auth from "../Auth/Auth";

const Header = () => {
    return (
        <header>
            <div className="headerTitle">Smart home panel</div>
            <Auth />
        </header>
    )
}

export default Header;