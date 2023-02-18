import React, { useEffect, useState } from "react";
import {  IconButton, ToogleButton } from "../elements/button";
import { IconInputFile } from "../elements/input";

type FilesHeaderProp = {
    path: string
    setFilesCB: (path: string) => void
    fileUploadEvent: React.ChangeEventHandler<HTMLInputElement>
}

const FilesHeader = ({ path, setFilesCB, fileUploadEvent }: FilesHeaderProp) => {

    let [pwdPath, setPwdPath] = useState([""])

    useEffect(() => {
        setPwdPath(path.split("/"))
    }, [path])

    return (
        <div className="file-header">
            <div className="file-path">
                <button className="path-button btn btn-ivc" onClick={() => setFilesCB("/")}>Home</button>
                {pwdPath.map((e, f) => {
                    if (e === "") return <></>;

                    let pwd = ""
                    for (let i = 0; i <= f; i++) {
                        if (pwdPath[i] !== "") {
                            pwd += "/" + pwdPath[i]
                        }
                    }

                    return (
                        <>
                            <i className="path-arrow bi bi-chevron-right"></i>
                            <button className="path-button btn btn-ivc" onClick={() => setFilesCB(pwd)}>{e}</button>
                        </>
                    )
                })}
                <i className="path-fav bi bi-star"></i>
            </div>

            <div className="file-btn">
                <IconButton name="Create Folder" icon={<i className="bi bi-plus-lg"></i>} />
                <IconInputFile name="Upload" icon={<i className="bi bi-upload"></i>} onChange={fileUploadEvent} />
                <ToogleButton iconLeft={<i className="bi bi-grid-3x3-gap-fill"></i>} iconRight={<i className="bi bi-list-ul"></i>} active={false} />
            </div>
        </div>
    )
}

export default FilesHeader