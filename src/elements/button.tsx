import React from "react";

type ButtonProp = {
    name: string,
    primary?: boolean,
}

const Button = ({ name, primary }: ButtonProp) => {
    return (
        <button className={`btn btn-std ${primary ? "btn-primary" : ""}`}>
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

type IconButtonPropSquare = {
    icon: JSX.Element
    ivc?: boolean,
    active?: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButtonSquare = ({ icon, ivc, active, onClick }: IconButtonPropSquare) => {
    return (
        <button onClick={onClick} className={`btn btn-icon btn-square ${ivc ? "ivc" : ""} ${active ? "active" : ""}`}>
            {icon}
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


export { Button, IconButton, IconButtonSquare, ToogleButton }
