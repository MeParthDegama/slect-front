import React from "react";
import { IconButtonSquare } from "./button";

type ModalProp = {
    title: string,
    des: string,
    button: JSX.Element,
    show: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Modal = ({ title, des, button, show, onClick }: ModalProp) => {
    return (
        <div className={`ws-error modal ${show ? "show" : ""}`} style={{ pointerEvents: "all" }}>
            <div className="close-button">
                <IconButtonSquare ivc={true} icon={<i className="bi bi-x-lg"></i>} onClick={onClick} />
            </div>
            <span className="title">
                {title}
            </span>
            <span className="des">
                {des}
            </span>
            <div className="btns">
                {button}
            </div>
        </div>
    )
}

export default Modal
