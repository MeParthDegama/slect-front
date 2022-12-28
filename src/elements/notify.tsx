import React from "react";
import { IconButtonSquare } from "./button";
import { useAppSelector } from "../state/hooks";

enum NotifyBlockEnum {
    SUCCESS,
    ERROR,
}

type NotificationProp = {
    title: string
    des: string
    status: NotifyBlockEnum
}

const NotifyBlock = ({ title, des, status }: NotificationProp) => {
    return (
        <div className="notification">
            <span className="title">{title}</span>
            <span className="des">{des}</span>
            <IconButtonSquare ivc={true} icon={<i className="bi bi-x"></i>} />
            <div className={`status-line ${status === NotifyBlockEnum.SUCCESS ? "success" : "error"}`}></div>
        </div>
    )
}

const Notify = () => {

    let nonification = useAppSelector(state => state.notify.notifes)

    return (
        <div className="noti-wrap" id="notify-wrap">

            <NotifyBlock title="Delete Successful" des="3 file delete successful 3 file delete successful 3 file delete successful" status={NotifyBlockEnum.SUCCESS} />

            {nonification}

        </div>
    )
}

export { Notify, NotifyBlock, NotifyBlockEnum }
