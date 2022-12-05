import React from "react";
import FileFooter from "../components/filesFooter";
import FilesHeader from "../components/filesHeader";
import FilesList from "../components/filesList";

const HomePage = () => {

    let empty: Boolean = false;

    return (
        <div className="files-con">
            <FilesHeader />
            <div className="files-con-main">
                {(() => {
                    if (empty) {
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
                    return <FilesList />
                })()}
            </div>
            <FileFooter />
        </div>
    )
}

export default HomePage
