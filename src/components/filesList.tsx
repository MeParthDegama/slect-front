import React from "react"

type FileProp = {
    icon: string
    name: string
    modTime: string
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const FileItem = ({ icon, name, active, onClick, onMouseEnter, onMouseLeave, onContextMenu, modTime }: FileProp) => {
    return (
        <div onContextMenu={onContextMenu} className={`file-item ${active ? "active" : ""}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="icon" style={{ backgroundImage: `url(/assets/${icon}.svg)` }}>

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
