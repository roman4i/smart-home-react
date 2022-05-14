import React from "react";
import "./Navigation.scss";

const links = [
    {
        link: '/home',
        text: 'Home'
    },
    {
        link: '/settings',
        text: 'Settings'
    }
]

const Navigation = () => {
    const Buttons = links.map((button, num) => {
        return (<a href={button.link} key={num}>{button.text}</a>)
    })

    return (
        <div className="navButtonsContainer">
            {Buttons}
        </div>
    )
}

export default Navigation