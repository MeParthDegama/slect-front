import React from "react"

type FileProp = {
    iconType: number // if dir than 1 else if file than 0
    fileName: string
    name: string
    modTime: string
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const folderIcons = {
    "documents": "folder-documents",
    "music": "folder-music",
    "pictures": "folder-pictures",
    "video": "folder-video"
}

const getFolderIcon = (name: string): string => {
    switch (name.toLowerCase()) {
        case "documents":
            return "folder-documents"
        case "videos":
            return "folder-video"
        case "pictures":
            return "folder-pictures"
        case "music":
            return "folder-music"
        default:
            return "folder"
    }
}

const getFileIcon = (name: string): string => {
    if (name.endsWith(".pdf")) {
        return 'pdf'
    }

    if (name.endsWith(".mp4")) {
        return 'video'
    }

    let thisImage = false;
    ['.jpg', '.jpeg', '.png', '.webp'].map((e) => {
        if (name.endsWith(e)) {
            thisImage = true
        }
    })

    if (thisImage) {
        return 'image'
    }

    return 'file'
}

const FileItem = ({ iconType, fileName, name, active, onClick, onMouseEnter, onMouseLeave, onContextMenu, modTime }: FileProp) => {

    let iconName = "file"

    if (iconType == 1) {
        iconName = getFolderIcon(fileName)
    } else {
        iconName = getFileIcon(fileName.toLowerCase())
    }

    return (
        <div onContextMenu={onContextMenu} className={`file-item ${active ? "active" : ""}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="icon" style={{ backgroundImage: `url(/assets/${iconName}.svg)` }}>

            </div>
            <span>{name}</span>
            <span className="mod-time">{modTime}</span>
        </div>
    )
}

const FileItemSpace = () => {
    return (
        <div className="file-item">
        </div>
    )
}

export { FileItemSpace, FileItem }
