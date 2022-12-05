import React from "react"

type FileProp = {
    icon: string
    name: string
    active?: boolean
}

const FileItem = ({icon, name, active}: FileProp) => {
    return (
        <div className={`file-item ${active ? "active" : ""}`}>
            <div className="icon" style={{backgroundImage: `url(/assets/${icon}.svg)`}}>

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

const FilesList = () => {
    return (
        <div className="files-list">
            <FileItem name="Audio" icon="folder-music" />
            <FileItem name="Document" icon="folder-documents" />
            <FileItem name="Flowgram" icon="folder" active={true} />
            <FileItem name="index.html" icon="text-html" />
            <FileItem name="index.js" icon="text-js" />
            <FileItem name="javascript" icon="folder" />
            <FileItem name="Pictures" icon="folder-pictures" />
            <FileItem name="style.css" icon="text-css" />
            <FileItem name="turnstile.tar.xz" icon="tar" />
            <FileItem name="Videos" icon="folder-video" />
            <FileItem name="Video Old" icon="folder" />
            <FileItem name="webexec" icon="exec" />
            <FileItem name="Work" icon="folder" />
            <FileItem name="Zyxwutsrqponmlkj" icon="folder" />
            {(() => {
                let fsa:JSX.Element[] = [];
                for (let i = 0; i < 15; i++) {
                    fsa.push(<FileItemSpace />);
                }
                return fsa;
            })()}
        </div>
    )
}

export default FilesList
