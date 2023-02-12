import React, { useState } from "react";
import { Button, IconButton, ToogleButton } from "../elements/button";

type FilesHeaderProp = {
    path: string
}

const FilesHeader = ({ path }: FilesHeaderProp) => {
    
    return (
        <div className="file-header">
            <div className="file-path">
                <button className="path-button btn btn-ivc">Home</button>
                {path.split("/").map(e => {
                    if (e == "") return;
                    
                    return (
                        <>
                            <i className="path-arrow bi bi-chevron-right"></i>
                            <button className="path-button btn btn-ivc">{e}</button>
                        </>
                    )
                })}
                <i className="path-fav bi bi-star"></i>
            </div>

            <div className="file-btn">
                <IconButton name="Create Folder" icon={<i className="bi bi-plus-lg"></i>} />
                <IconButton name="Upload" icon={<i className="bi bi-upload"></i>} />
                <ToogleButton iconLeft={<i className="bi bi-grid-3x3-gap-fill"></i>} iconRight={<i className="bi bi-list-ul"></i>} active={false} />
            </div>
        </div>
    )
}

export default FilesHeader