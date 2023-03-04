import React, { useEffect, useRef, useState } from "react";
import url from "../conf/url";
import 'xterm/css/xterm.css'
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit";
import byteSize from "byte-size";

const ProcMoni = () => {

    let [procInfo, setProcInfo] = useState({
        cpu: 0,
        memory: 0,
        memory_used: "",
        memory_total: "",
        loading: true
    })

    // web term effect lock
    let procMoniLock = useRef(false)
    useEffect(() => {

        if (!procMoniLock.current) {
            procMoniLock.current = true
            return
        }

        let termWS = new WebSocket(url.backWS + 'api/proc', 'echo')

        termWS.addEventListener("message", (evt) => {
            let r = JSON.parse(evt.data)
            let memoryUsed = byteSize(r["memory_used"])
            let memoryTotal = byteSize(r["memory_total"])
            setProcInfo({
                cpu: r["cpu"],
                memory: (r["memory_used"] / r["memory_total"]) * 100,
                memory_used: `${memoryUsed.value} ${memoryUsed.unit}`,
                memory_total: `${memoryTotal.value} ${memoryTotal.unit}`,
                loading: false,
            })
        });

    }, [])

    return (
        <>
            <div className="proc-header">
                <div className="name">
                    System Monitor
                </div>
            </div>
            {
                procInfo.loading
                    ?
                    <div className="loading-dir">
                        <div>
                            <div className="spinner"></div>
                        </div>
                    </div>
                    :
                    <div className="proc-con">
                        <div className="progress-block">
                            <div className="proc-label">
                                CPU • {procInfo.cpu.toFixed(2)}%
                            </div>
                            <div className="progress-line">
                                <div className="fill" style={{ width: procInfo.cpu + "%" }}></div>
                            </div>
                        </div>

                        <div className="progress-block">
                            <div className="proc-label">
                                Memory • {procInfo.memory_used} / {procInfo.memory_total}
                            </div>
                            <div className="progress-line">
                                <div className="fill" style={{ width: procInfo.memory + "%" }}></div>
                            </div>
                        </div>
                    </div>}
        </>
    )
}

export default ProcMoni