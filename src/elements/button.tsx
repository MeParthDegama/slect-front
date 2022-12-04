import React from "react";

type ButtonProp = {
    name: string
}

const Button = ({ name }: ButtonProp) => {
    return (
        <button className="btn btn-std">
            {name}
        </button>
    )
}

type IconButtonProp = {
    name: string
    icon: JSX.Element
    ivc?: boolean,
    active?: boolean
}

const IconButton = ({ name, icon, ivc, active }: IconButtonProp) => {
    return (
        <button className={`btn btn-icon ${ivc ? "ivc" : ""} ${active ? "active" : ""}`}>
            {icon}
            <span style={{ marginLeft: "8px" }}>{name}</span>
        </button>
    )
}

type ToggleButtonProp = {
    iconLeft: JSX.Element
    iconRight: JSX.Element
    active?: boolean
}
const ToogleButton = ({ iconLeft, iconRight, active }: ToggleButtonProp) => {
    return (
        <div className="btn btn-toggle">
            <div className={`btn-active ${active ? "active-right" : ""}`}>

            </div>
            <div className="btn-icons">
                {iconLeft} {iconRight}
            </div>
        </div>
    )
}


export { Button, IconButton, ToogleButton }
