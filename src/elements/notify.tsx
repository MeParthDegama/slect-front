import React from "react";
import { IconButtonSquare } from "./button";

enum NotificationEnum {
    SUCCESS,
    ERROR,
}

type NotificationProp = {
    title: string
    des: string
    status: NotificationEnum 
}

const Notification = ({title, des, status}: NotificationProp) => {
    return (
        <div className="notification">
            <span className="title">{title}</span>
            <span className="des">{des}</span>
            <IconButtonSquare ivc={true} icon={<i className="bi bi-x"></i>} />
            <div className={`status-line ${status == NotificationEnum.SUCCESS ? "success" : "error" }`}></div>
        </div>
    )
}

const Notify = () => {
    return (
        <div className="noti-wrap">
            <Notification title="Login Faild" des="Username or Password invalid" status={NotificationEnum.ERROR} />
            <Notification title="Delete Successful" des="3 file delete successful 3 file delete successful 3 file delete successful" status={NotificationEnum.SUCCESS} />
        </div>
    )
}


export default Notify
