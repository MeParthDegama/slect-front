import React from "react";

type InputProp = {
    type: string,
    placeholder?: string
    icon?: JSX.Element
    className?: string
    onChange?: React.FormEventHandler<HTMLDivElement> | undefined,
    name?: string
}

const Input = ({ type, placeholder, icon, className, onChange, name }: InputProp) => {
    return (
        <div className={`input ${icon ? "input-icon" : ""} ${className || ""}`}>
            {icon ? <div className="icon">{icon}</div> : ""}
            <input onChange={onChange} type={type} placeholder={placeholder || ""} name={name} />
        </div>
    )
}

export { Input }