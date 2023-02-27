import React, { useEffect, useRef, useState } from "react";
import url from "../conf/url";
import 'xterm/css/xterm.css'
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit";

const WebTerm = () => {


    // web term effect lock
    let webTermLock = useRef(false)
    useEffect(() => {

        if (!webTermLock.current) {
            webTermLock.current = true
            return
        }

        let term = new Terminal()
        let termEle = document.getElementById('terminal')
        termEle && term.open(termEle)
        let fitAddon = new FitAddon();
        term.loadAddon(fitAddon);


        let termWS = new WebSocket(url.backWS + 'api/webterm', 'echo')

        term.onData((data) => {
            termWS.send(data)
        })
        term.options.fontSize = 18

        termWS.addEventListener("message", (evt) => {
            term.write(evt.data)
        });

        fitAddon.fit()
        window.onresize = () => fitAddon.fit()

    }, [])

    return (
        <>
            <div id="terminal" className="web-term"></div>
        </>
    )
}

export default WebTerm