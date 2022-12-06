import React from "react";

type InputProp = {
    type: string,
    placeholder?: string
    icon?: JSX.Element
    className?: string
}

const Input = ({type, placeholder, icon, className}: InputProp) => {
    return (
        <div className={`input ${icon ? "input-icon" : ""} ${className || ""}`}>
            {icon ? <div className="icon">{icon}</div> : ""}
            <input type={type} placeholder={placeholder || ""} />
        </div>
    )
}

export { Input }