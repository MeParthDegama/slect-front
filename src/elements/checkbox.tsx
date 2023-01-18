import React from "react";

type CheckBoxProp = {
    name: string
    id: string
    onChange?: React.FormEventHandler<HTMLDivElement> | undefined,
}
const CheckBox = ({ name, id, onChange }: CheckBoxProp) => {
    return (
        <div className="checkbox">
            <label htmlFor={id} className="checkbox-title">
                <input id={id} type={"checkbox"} onChange={onChange} />
                <span className="checkmark"></span>
                {name}
            </label>

        </div>
    )
}

export default CheckBox;