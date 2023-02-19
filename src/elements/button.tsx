import React from "react";

type ButtonProp = {
    name: string,
    primary?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean
}

const Button = ({ name, primary, onClick, disabled }: ButtonProp) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`btn btn-std ${primary ? "btn-primary" : ""}`}>
            {name}
        </button>
    )
}

type IconButtonProp = {
    name: string,
    icon: JSX.Element,
    primary?: boolean,
    ivc?: boolean,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean
}

const IconButton = ({ name, icon, ivc, active, onClick, disabled, primary }: IconButtonProp) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`btn btn-icon ${ivc ? "ivc" : ""} ${active ? "active" : ""} ${primary ? "btn-primary" : ""}`}>
            {icon}
            <span style={{ marginLeft: "8px" }}>{name}</span>
        </button>
    )
}

type IconButtonPropSquare = {
    icon: JSX.Element
    ivc?: boolean,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean
}

const IconButtonSquare = ({ icon, ivc, active, onClick, disabled }: IconButtonPropSquare) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`btn btn-icon btn-square ${ivc ? "ivc" : ""} ${active ? "active" : ""}`}>
            {icon}
        </button>
    )
}

type ToggleButtonProp = {
    iconLeft: JSX.Element,
    iconRight: JSX.Element,
    active?: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const ToogleButton = ({ iconLeft, iconRight, active, onClick }: ToggleButtonProp) => {
    return (
        <div className="btn btn-toggle" onClick={onClick}>
            <div className={`btn-active ${active ? "active-right" : ""}`}>

            </div>
            <div className="btn-icons">
                {iconLeft} {iconRight}
            </div>
        </div>
    )
}


export { Button, IconButton, IconButtonSquare, ToogleButton }
