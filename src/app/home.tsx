import React, { useEffect, useRef, useState } from "react";
import FileFooter from "../components/filesFooter";
import FilesHeader from "../components/filesHeader";
import { FileItem, FileItemSpace } from "../components/filesList";
import API from "../conf/api";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setConnError } from "../state/connErrorSlices";
import byteSize from "byte-size"

const HomePage = () => {

    const dispatch = useAppDispatch()

    let token = useAppSelector(s => s.token.token)
    let [fileList, setFileList] = useState([{ name: "!~!~", isdir: false, size: 0 }])
    let [fileIsLoad, setFileIsLoad] = useState(true)

    let [currPath, setCurrPath] = useState("")
    let [fileCount, setFileCount] = useState({ file: 0, dir: 0 })
    let [footerText, setFooterText] = useState("")
    let [dirIsEmpty, setDirIsEmpty] = useState(false)

    const loadFiles = (path: string) => {
        let pathX = currPath === "/" ? currPath + path : currPath + "/" + path
        loadFilesPath(pathX)
    }

    const reloadFiles = () => loadFilesPath(currPath)

    const loadFilesPath = (path: string) => {
        setDirIsEmpty(false)
        setFileIsLoad(true)
        API.post(
            "/files/", {
            token: token,
            path: path
        }).then(r => {

            if (r.data.status) {
                setFileList(r.data.filelist)
                let fCount = 0
                let dCount = 0
                r.data.filelist.map((e: any) => {
                    if (!e["name"].startsWith(".")) {
                        if (e["isdir"]) {
                            dCount++
                        } else {
                            fCount++
                        }
                    }
                })
                if (r.data.filelist.length === 0 || (r.data.filelist.length === 1 && r.data.filelist[0]["name"] === "!~!~") || (dCount === 0 && fCount === 0)) {
                    setDirIsEmpty(true)
                }
                setFileCount({ dir: dCount, file: fCount })
                setFileIsLoad(false)
                setDirText(fCount, dCount)
            } else {
                dispatch(setConnError())
            }

            setCurrPath(path)

        }).catch(e => {
            dispatch(setConnError())
        })
    }

    // set dir footer text
    const setDirText = (fCount: number, dCount: number) => {
        let fileCountDes = ""
        if (fCount === 0 && dCount === 0) {
            fileCountDes = "Empty Directory"
        } else if (fCount !== 0 && dCount !== 0) {
            fileCountDes = `${fCount} ${fCount > 1 ? `Files` : `File`} and ${dCount} ${dCount > 1 ? `Directories` : `Directory`}`
        } else if (dCount === 0 && fCount !== 0) {
            fileCountDes = `${fCount} ${fCount > 1 ? `Files` : `File`}`
        } else if (dCount !== 0 && fCount === 0) {
            fileCountDes = `${dCount} ${dCount > 1 ? `Directories` : `Directory`}`
        }
        setFooterText("123" + " • " + fileCountDes)
    }

    const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files && e.target.files[0]
        if (!file) {
            return
        }
        const fileUploadFormData = new FormData();
        fileUploadFormData.append("token", token)
        fileUploadFormData.append("base_path", currPath)
        fileUploadFormData.append("file", file)
        API.post(
            "/files/upload",
            fileUploadFormData,
            { headers: { "Content-Type": "multipart/form-data" }, }
        ).then(r => {
            if (r.data.status) {
                reloadFiles()
            } else {
                dispatch(setConnError())
            }
        }).catch(e => {
            dispatch(setConnError())
        })
    }

    // file load effect lock
    let fileLoadLock = useRef(false)
    useEffect(() => {
        if (!fileLoadLock.current) {
            fileLoadLock.current = true
            return
        }
        loadFiles("")
    }, [])

    return (
        <div className="files-con">
            <FilesHeader path={currPath} setFilesCB={loadFilesPath} fileUploadEvent={uploadFile} />
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
                    if (dirIsEmpty) {
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
                                    let size = byteSize(e["size"])
                                    return <FileItem name={e["name"]} icon={e["isdir"] ? "folder" : "file"}
                                        onClick={() => {
                                            if (e["isdir"]) {
                                                loadFiles(e["name"])
                                            }
                                        }}
                                        onMouseEnter={() => setFooterText(`${e["name"]} • ${e["isdir"] ? `Directory` : `File • ${size.value} ${size.unit}`}`)}
                                        onMouseLeave={() => setDirText(fileCount.file, fileCount.dir)}
                                    />
                                }
                                return null
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
            <FileFooter des={footerText} />
        </div>
    )
}

export default HomePage
