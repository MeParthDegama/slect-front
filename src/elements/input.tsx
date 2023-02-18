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


type IconInputFileProp = {
    name: string,
    icon: JSX.Element,
    primary?: boolean,
    ivc?: boolean,
    active?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
}

const IconInputFile = ({ name, icon, ivc, active, onChange, disabled, primary }: IconInputFileProp) => {
    return (
        <div style={{ position: "relative" }} className={`btn btn-icon ${ivc ? "ivc" : ""} ${active ? "active" : ""} ${primary ? "btn-primary" : ""}`}>
            {icon}
            <span style={{ marginLeft: "8px" }}>{name}</span>
            <input onChange={onChange} type={"file"} name={""} style={{ width: "100%", height: "100%", background: "red", position: "absolute", opacity: "0", cursor: "pointer" }} disabled={disabled} />
        </div>
    )
}

export { Input, IconInputFile }