import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button, IconButton } from "../elements/button";
import Modal from "../elements/modal";
import { NotifyBlock, NotifyBlockEnum } from "../elements/notify";
import { setConnError } from "../state/connErrorSlices";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { addNotify } from "../state/notifySlices";
import { change as changeWidth } from "../state/sidebarwidthSlices";
import { setToken } from "../state/TokenSlices";

const SideBar = () => {

    const dispatch = useAppDispatch()

    let sidebarWidth = useAppSelector(state => state.sidebarwidth.value)
    let userProfile = useAppSelector(state => state.profile)

    let navigate = useNavigate()

    let [showLogout, setLogout] = useState(false)

    const cookie = new Cookies()

    let path = window.location.pathname

    // tmp
    const showConnError = () => {
        dispatch(setConnError())
    }

    const logOut = () => {
        dispatch(setToken("")) //clear token
        cookie.remove("TOKEN") // remove token form cookie
        setLogout(false)
        setTimeout(() => {
            navigate("/")
            dispatch(addNotify(<NotifyBlock title={"Logout Successful"} des={`User \`${userProfile.username}\` logout successful.`} status={NotifyBlockEnum.SUCCESS} />))
        }, 200);
    }

    return (
        <div className="side-bar" style={{ minWidth: sidebarWidth }}>

            {/* logout modal */}
            <Modal
                title="Logout"
                des="Are you sure Logout."
                show={showLogout}
                onClose={() => setLogout(false)}

                button={
                    <>
                        <Button
                            name="Close"
                            onClick={() => setLogout(false)}
                        />
                        <Button
                            name="Yes, Logout"
                            primary={true}
                            onClick={logOut}
                        />
                    </>
                }
            />

            <div className="user-btn">
                <button className="btn btn-ivc" onClick={showConnError}>
                    <img src={"/img/profile.jpg"} alt={"Robert Devid"} />
                    <abbr title={userProfile.username}>
                        {userProfile.fullname}
                    </abbr>
                </button>
            </div>

            <div className="nav-bar">
                <span className="group-title">File Manager</span>
                <IconButton ivc={true} active={path === "/"} onClick={() => navigate("/")} name="Home" icon={<i className="bi bi-house-door-fill"></i>} />
                <IconButton ivc={true} active={path.startsWith("/recent")} name="Recent" icon={<i className="bi bi-arrow-counterclockwise"></i>} />
                <IconButton ivc={true} active={path.startsWith("/share")} name="Shared Files" icon={<i className="bi bi-share-fill"></i>} />
                <IconButton ivc={true} active={path.startsWith("/trash")} onClick={() => navigate("/trash")} name="Trash Bin" icon={<i className="bi bi-trash3-fill"></i>} />

                <span className="group-title">Libery</span>
                <IconButton ivc={true} active={path.startsWith("/pictures")} onClick={() => navigate("/pictures")} name="Pictures" icon={<i className="bi bi-image"></i>} />
                <IconButton ivc={true} active={path.startsWith("/videos")} onClick={() => navigate("/videos")} name="Videos" icon={<i className="bi bi-play-circle-fill"></i>} />
                <IconButton ivc={true} active={path.startsWith("/documents")} onClick={() => navigate("/documents")} name="Documents" icon={<i className="bi bi-file-earmark-fill"></i>} />
                <IconButton ivc={true} active={false} name="Git Repository" icon={<i className="bi bi-git"></i>} />
                {/* <IconButton ivc={true} active={false} name="Favorites" icon={<i className="bi bi-star-fill"></i>} /> */}

                <span className="group-title">System</span>
                <IconButton ivc={true} active={path.startsWith("/webterm")} onClick={() => navigate("/webterm")} name="Terminal" icon={<i className="bi bi-terminal-fill"></i>} />
                <IconButton ivc={true} active={false} name="System Monitor" icon={<i className="bi bi-speedometer"></i>} />
            </div>

            <div className="setting-nav">
                <IconButton ivc={true} active={false} name="Logout" onClick={() => setLogout(true)} icon={<i className="bi bi-box-arrow-left"></i>} />
            </div>

        </div>
    )
}

const SideBarExp = () => {

    let sidebarWidth = useAppSelector(state => state.sidebarwidth.value)
    const dispatch = useAppDispatch()

    const [change, setChange] = useState(false);

    const mouseDown = () => {
        setChange(true)
    }

    const mouseUp = () => {
        setChange(false)
    }

    document.onmousemove = (e) => {
        if (change) {
            if (e.clientX <= 170) {
                dispatch(changeWidth(170))
                setChange(false)
            } else if (e.clientX >= 400) {
                dispatch(changeWidth(400))
                setChange(false)
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
