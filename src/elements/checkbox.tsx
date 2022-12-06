import React from "react";

type CheckBoxProp = {
    name: string
    id: string
}
const CheckBox = ({ name, id }: CheckBoxProp) => {
    return (
        <div className="checkbox">
            <label htmlFor={id} className="checkbox-title">
                <input id={id} type={"checkbox"} />
                <span className="checkmark"></span>
                {name}
            </label>

        </div>
    )
}

export default CheckBox;