import React from "react";
import { Button, IconButton, ToogleButton } from "../elements/button";

const FilesHeader = () => {
    return (
        <div className="file-header">
            <div className="file-path">
                <button className="path-button btn btn-ivc">Home</button>
                <i className="path-arrow bi bi-chevron-right"></i>
                <button className="path-button btn btn-ivc">Projects</button>
                <i className="path-fav bi bi-star"></i>
            </div>

            <div className="file-btn">
                <IconButton name="Upload" icon={<i className="bi bi-plus-lg"></i>} />
                <IconButton name="Upload" icon={<i className="bi bi-upload"></i>} />
                <ToogleButton iconLeft={<i className="bi bi-grid-3x3-gap-fill"></i>} iconRight={<i className="bi bi-list-ul"></i>} active={false} />
            </div>
        </div>
    )
}

export default FilesHeader