import React from "react";
import FileFooter from "../components/fileFooter";
import FilesHeader from "../components/filesHeader";

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
                    return (
                        <div>
                            <h1>Hello, World!</h1>
                            <h1>Hello, World!</h1>
                            <h1>Hello, World!</h1>
                            <h1>Hello, World!</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hellowold</h1>
                            <h1>Hello, World!</h1>
                        </div>
                    )
                })()}
            </div>
            <FileFooter />
        </div>
    )
}

export default HomePage
