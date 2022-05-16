import React from "react";
import "./FooterText.scss";

const FooterText = ({text}) => {
    return (
        <div className="footerLine">
            <div className="footerArrow">{">"}</div>
            <div className="footerText">{text}</div>
        </div>
    )
}

export default FooterText