import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, ToogleButton } from "../elements/button";
import { IconInputFile } from "../elements/input";

type FilesHeaderProp = {
    copyState: boolean
    thisTrash: boolean
    path: string
    setFilesCB: (path: string) => void
    changeLayout: (lineview: boolean) => void
    pasteFilesCB: () => void
    fileUploadEvent: React.ChangeEventHandler<HTMLInputElement>
    newDirEvent: React.MouseEventHandler<HTMLButtonElement>
}

const FilesHeader = ({ path, setFilesCB, fileUploadEvent, newDirEvent, changeLayout, thisTrash, copyState, pasteFilesCB }: FilesHeaderProp) => {

    let navigate = useNavigate()

    let [pwdPath, setPwdPath] = useState([""])
    let [lineView, setLineView] = useState(false)

    useEffect(() => {
        setPwdPath(path.split("/"))
    }, [path])

    return (
        <div className="file-header">
            <div className="file-path">
                <button className="path-button btn btn-ivc" onClick={() => {
                    setFilesCB(!thisTrash ? "/" : "/.delete")
                    navigate(!thisTrash ? "/" : "/trash")
                }}>{!thisTrash ? "Home" : "Trash"}</button>
                {pwdPath.map((e, f) => {
                    if ((e === "") || (e == ".delete" && thisTrash)) return <></>;

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
                {/* <i className="path-fav bi bi-star"></i> */}
            </div>

            <div className="file-btn">
                {(copyState && !thisTrash) && <IconButton name="Paste" icon={<i className="bi bi-clipboard-plus"></i>} onClick={() => pasteFilesCB()} />}
                {
                    !thisTrash &&
                    <>
                        <IconButton name="Create Folder" icon={<i className="bi bi-plus-lg"></i>} onClick={newDirEvent} />
                        <IconInputFile name="Upload" icon={<i className="bi bi-upload"></i>} onChange={fileUploadEvent} />
                    </>

                }
                <ToogleButton
                    iconLeft={<i className="bi bi-grid-3x3-gap-fill"></i>}
                    iconRight={<i className="bi bi-list-ul"></i>}
                    active={lineView}
                    onClick={() => {
                        changeLayout(!lineView)
                        setLineView(!lineView)
                    }}
                />
            </div>
        </div>
    )
}

export default FilesHeader