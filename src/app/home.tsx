import React, { useEffect, useRef, useState } from "react";
import FileFooter from "../components/filesFooter";
import FilesHeader from "../components/filesHeader";
import { FileItem, FileItemSpace } from "../components/filesList";
import API from "../conf/api";
import { useAppSelector } from "../state/hooks";

const HomePage = () => {

    let token = useAppSelector(s => s.token.token)
    let [fileList, setFileList] = useState([{ name: "!~!~", isdir: false }])
    let [fileIsLoad, setFileIsLoad] = useState(true)

    const loadFiles = () => {
        setFileIsLoad(true)
        API.post(
            "/files/", {
            token: token
        }).then(r => {

            if (r.data.status) {
                setFileList(r.data.filelist)
                setFileIsLoad(false)
            } else {

            }

        }).catch(e => {

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
        loadFiles()
    }, [])

    return (
        <div className="files-con">
            <FilesHeader />
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
                    if (fileList.length === 1 && fileList[0]["name"] === "!~!~") {
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
                                    return <FileItem name={e["name"]} icon={e["isdir"] ? "folder" : "file"} />
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
