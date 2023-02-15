import React from "react";

type FilesFooterProp = {
    des: string
}

const FilesFooter = ({ des }: FilesFooterProp) => {
    return (
        <div className="file-footer">
            <div>
                {des}
            </div>
        </div>
    )
}

export default FilesFooter