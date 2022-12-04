import React from "react";
import { IconButton } from "../elements/button";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="user-btn">
                <button className="btn btn-ivc">
                    <img src={"/img/profile.jpg"} />
                    <span>
                        Robert Devid DevidDevid Devid
                    </span>
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

export default SideBar
