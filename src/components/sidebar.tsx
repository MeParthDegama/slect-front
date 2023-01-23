import React, { useEffect, useState } from "react";
import { IconButton } from "../elements/button";
import { NotifyBlock, NotifyBlockEnum } from "../elements/notify";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { change as changeWidth } from "../state/sidebarwidthSlices";
import { addNotify } from "../state/notifySlices";

const SideBar = () => {

    let sidebarWidth = useAppSelector(state => state.sidebarwidth.value)
    let userProfile = useAppSelector(start => start.profile)

    const dispatch = useAppDispatch()

    const NewNotification = () => {
        dispatch(addNotify(<NotifyBlock title="Login Faild" des="Username or Password invalid" status={NotifyBlockEnum.ERROR} />))
    }

    return (
        <div className="side-bar" style={{ minWidth: sidebarWidth }}>
            <div className="user-btn">
                <button className="btn btn-ivc" onClick={NewNotification}>
                    <img src={"/img/profile.jpg"} alt={"Robert Devid"} />
                    <abbr title={userProfile.username}>
                        {userProfile.fullname}
                    </abbr>
                </button>
            </div>

            <div className="nav-bar">
                <span className="group-title">File Manager</span>
                <IconButton ivc={true} active={true} name="Home" icon={<i className="bi bi-house-door-fill"></i>} />
                <IconButton ivc={true} active={false} name="Recent" icon={<i className="bi bi-arrow-counterclockwise"></i>} />
                <IconButton ivc={true} active={false} name="Shared Files" icon={<i className="bi bi-share-fill"></i>} />
                <IconButton ivc={true} active={false} name="Trash Bin" icon={<i className="bi bi-trash3-fill"></i>} />

                <span className="group-title">Libery</span>
                <IconButton ivc={true} active={false} name="Images" icon={<i className="bi bi-image"></i>} />
                <IconButton ivc={true} active={false} name="Videos" icon={<i className="bi bi-play-circle-fill"></i>} />
                <IconButton ivc={true} active={false} name="Documents" icon={<i className="bi bi-file-earmark-fill"></i>} />
                <IconButton ivc={true} active={false} name="Git Repository" icon={<i className="bi bi-git"></i>} />
                <IconButton ivc={true} active={false} name="Favorites" icon={<i className="bi bi-star-fill"></i>} />

                <span className="group-title">System</span>
                <IconButton ivc={true} active={false} name="Terminal" icon={<i className="bi bi-terminal-fill"></i>} />
                <IconButton ivc={true} active={false} name="System Monitor" icon={<i className="bi bi-speedometer"></i>} />
            </div>

            <div className="setting-nav">
                <IconButton ivc={true} active={false} name="Settings" icon={<i className="bi bi-gear-fill"></i>} />
            </div>

        </div>
    )
}

const SideBarExp = () => {

    let sidebarWidth = useAppSelector(state => state.sidebarwidth.value)
    const dispatch = useAppDispatch()

    const [change, setChange] = useState(false);

    const mouseDown = () => {
        console.log("down");
        setChange(true)
    }

    const mouseUp = () => {
        console.log("up");
        setChange(false)
    }

    document.onmousemove = (e) => {
        if (change) {
            if (e.clientX <= 170) {
                dispatch(changeWidth(170))
            } else if (e.clientX >= 400) {
                dispatch(changeWidth(400))
            } else {
                dispatch(changeWidth(e.clientX))
            }
        }
    }

    return (
        <div className="side-bar-exp" onMouseDown={mouseDown} onMouseUp={mouseUp} style={{ left: sidebarWidth }}>

        </div>
    )
}

export { SideBar, SideBarExp }
