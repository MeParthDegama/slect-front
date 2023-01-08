import React from "react";

type OverLayProp = {
    show?: boolean
}

const OverLay = ({ show }: OverLayProp) => {

    return (
        <div className={`overlay ${show ? "show" : ""}`}>
            <div className="loader"></div>
        </div>
    )

}

export default OverLay
