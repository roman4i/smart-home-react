import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const links = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/settings',
        text: 'Settings'
    }
]

const Navigation = () => {
    const Buttons = links.map((button, num) => {
        return (<Link to={button.link} key={num}>{button.text}</Link>)
    })

    return (
        <div className="navButtonsContainer">
            {Buttons}
        </div>
    )
}

export default Navigation