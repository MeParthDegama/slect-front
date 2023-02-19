import React from "react";
import { IconButtonSquare } from "./button";

type ModalProp = {
    title: string,
    des: any,
    button: JSX.Element,
    show: boolean
    onClose?: React.MouseEventHandler<HTMLButtonElement>
}

const Modal = ({ title, des, button, show, onClose }: ModalProp) => {
    return (
        <div className={`modal-wrap ${show ? "show" : ""}`} style={{position: "absolute"}}>
            <div className="modal">
                <div className="close-button">
                    <IconButtonSquare ivc={true} icon={<i className="bi bi-x-lg"></i>} onClick={onClose} />
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
        </div>
    )
}

export default Modal
