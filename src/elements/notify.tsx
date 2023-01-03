import React, { useEffect, useState } from "react";
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

    let [ctime, setTime] = useState('')

    useEffect(() => {
        setTime(`notify_id_${Date.now()}`)
    }, [])

    return (
        <div className="notification" id={ctime}>
            <span className="title">{title}</span>
            <span className="des">{des}</span>
            <IconButtonSquare onClick={
                (e) => {
                    document.getElementById(ctime)?.classList.add("notifaction_remove")
                    setTimeout(() => {
                        document.getElementById(ctime)?.remove()
                    }, 500);
                }
            } ivc={true} icon={<i className="bi bi-x"></i>} />
            <div className={`status-line ${status === NotifyBlockEnum.SUCCESS ? "success" : "error"}`}></div>
        </div>
    )
}

const Notify = () => {

    let nonification = useAppSelector(state => state.notify.notifes)

    return (
        <div className="noti-wrap" id="notify-wrap">

            {nonification}

        </div>
    )
}

export { Notify, NotifyBlock, NotifyBlockEnum }
