import React from "react"

type FileProp = {
    icon: string
    name: string
    active?: boolean
}

const FileItem = ({ icon, name, active }: FileProp) => {
    return (
        <div className={`file-item ${active ? "active" : ""}`}>
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
