import React, { useEffect, useRef, useState } from "react";
import FileFooter from "../components/filesFooter";
import FilesHeader from "../components/filesHeader";
import { FileItem, FileItemSpace } from "../components/filesList";
import API from "../conf/api";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setConnError } from "../state/connErrorSlices";

const HomePage = () => {

    const dispatch = useAppDispatch()

    let token = useAppSelector(s => s.token.token)
    let [fileList, setFileList] = useState([{ name: "!~!~", isdir: false }])
    let [fileIsLoad, setFileIsLoad] = useState(true)

    let [currPath, setCurrPath] = useState("")

    const loadFiles = (path: string) => {

        setFileIsLoad(true)
        API.post(
            "/files/", {
            token: token,
            path: currPath + "/" + path
        }).then(r => {

            if (r.data.status) {
                setFileList(r.data.filelist)
                setFileIsLoad(false)
            } else {
                dispatch(setConnError())
            }

            setCurrPath(currPath + "/" + path)

        }).catch(e => {
            dispatch(setConnError())
        })

    }

    // file load effect lock
    let fileLoadLock = useRef(false)
    let tmp1 = false
    useEffect(() => {
        if (!fileLoadLock.current) {
            fileLoadLock.current = true
            return
        }
        loadFiles("")
    }, [])

    return (
        <div className="files-con">
            <FilesHeader path={currPath} />
            <div className="files-con-main">
                {(() => {
                    if (fileIsLoad) {
                        return (
                            <div className="loading-dir">
                                <div>
                                    <div className="spinner"></div>
                                </div>
                            </div>
                        )
                    }
                    if (fileList.length === 0 || (fileList.length === 1 && fileList[0]["name"] === "!~!~")) {
                        return (
                            <div className="empty-dir">
                                <div>
                                    <i className="bi bi-folder-fill"></i>
                                    <br />
                                    <span>Folder Is Empty</span>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className="files-list">
                            {fileList.map(e => {
                                if (!e["name"].startsWith(".")) {
                                    return <FileItem name={e["name"]} icon={e["isdir"] ? "folder" : "file"}
                                        onClick={() => {
                                            if (e["isdir"]) {
                                                loadFiles(e["name"])
                                            }
                                        }
                                        } />
                                } return null
                            })}
                            {(() => {
                                let fsa: JSX.Element[] = [];
                                for (let i = 0; i < 15; i++) {
                                    fsa.push(<FileItemSpace />);
                                }
                                return fsa;
                            })()}
                        </div>
                    )
                })()}
            </div>
            <FileFooter />
        </div>
    )
}

export default HomePage
