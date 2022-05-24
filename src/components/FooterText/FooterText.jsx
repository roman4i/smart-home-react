import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../store/Context";
import "./FooterText.scss";

const FooterText = () => {
    const { logger } = useContext(GlobalContext);
    const [loggerPosition, setLoggerPosition] = useState(0);
    const {time, msg} = logger.loggedData[loggerPosition];

    const navButtons = (event) => {
        const { value } = event.target;

        if ((value === "Up") && (loggerPosition < (logger.loggedData.length - 1))) {
            setLoggerPosition(old => old + 1)
        }
        if (value === "Down" && loggerPosition > 0) {
            setLoggerPosition(old => old - 1)
        }
    }

    useEffect(() => {
        setLoggerPosition(logger.loggedData.length - 1)
    }, [logger.loggedData])

    return (
        <div className="footerLine">
            <div className="footerArrow">{">"}</div>
            <div className="footerText">
                <div>{time + ' ' + msg}</div>
                <div>
                    <input type="button" value="Up" 
                        onClick={navButtons} 
                        disabled={loggerPosition >= logger.loggedData.length-1 ? true : false}
                    />
                    <input type="button" value="Down" 
                        onClick={navButtons} 
                        disabled={loggerPosition <= 0 ? true : false}
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterText