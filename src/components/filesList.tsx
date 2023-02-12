import React from "react"

type FileProp = {
    icon: string
    name: string
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const FileItem = ({ icon, name, active, onClick }: FileProp) => {
    return (
        <div className={`file-item ${active ? "active" : ""}`} onClick={onClick}>
            <div className="icon" style={{ backgroundImage: `url(/assets/${icon}.svg)` }}>

            </div>
            <span>{name}</span>
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
