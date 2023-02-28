import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { SideBar, SideBarExp } from "../components/sidebar";
import API from "../conf/api";
import hostName from "../conf/hostName";
import { Button } from "../elements/button";
import LoadLine from "../elements/loadline";
import Modal from "../elements/modal";
import { NotifyBlock, NotifyBlockEnum } from "../elements/notify";
import { unSetConnError } from "../state/connErrorSlices";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { addNotify } from "../state/notifySlices";
import { setProfile } from "../state/ProfileSlices";
import { setToken } from "../state/TokenSlices";
import HomePage from "./home";
import NotFound from "./notFound";
import ProcMoni from "./Proc";
import WebTerm from "./term";

const MainApp = () => {

    let authLock = useRef(false)
    let [authComp, setAuthComp] = useState(false)
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const NewNotification = (title: string, des: string, status: NotifyBlockEnum) => {
        dispatch(addNotify(<NotifyBlock title={title} des={des} status={status} />))
    }

    useEffect(() => {

        // useEffect is execute two time than fix to use useRef
        if (!authLock.current) {
            authLock.current = true
            return
        }

        const cookie = new Cookies()
        let token = cookie.get("TOKEN")

        // if token is null
        if (!token) {
            navigate("/login")
            return
        }

        // auth token
        API.post(
            "/profile/",
            { token: token },
        ).then(r => {
            // if status is false
            if (!r.data.status) {
                cookie.remove("TOKEN") // remove token form cookie
                navigate("/login") // redirect login
                dispatch(setToken("")) // clear token
                return
            }

            // if status is true
            if (r.data.status) {
                dispatch(setToken(token)) // set token
                dispatch(setProfile({
                    fullname: r.data.fullname,
                    username: r.data.username,
                })) // set user profile
                setAuthComp(true) // than set aut complate 
            }

        }).catch(e => {
            // any error
            NewNotification("Server Error", "internal server error `" + e + "`", NotifyBlockEnum.ERROR)
            navigate("/login") // redirect login
        })

    })

    return authComp ? <AppMainPart /> : <AppAuthScreen />

}

const AppAuthScreen = () => {
    return (
        <div className="loading-screen">
            <div className="host-title">
                {hostName}
            </div>
            <div className="loading">
                Loading...
            </div>
            <div className="loading-line">
                <LoadLine />
            </div>
        </div>
    )
}

const AppMainPart = () => {

    const dispatch = useAppDispatch()

    let connError = useAppSelector(value => value.connError.error)

    const closeConnError = () => {
        dispatch(unSetConnError())
        setTimeout(() => {
            window.location.reload()
        }, 200);
    }

    return (
        <div className="app">

            <Modal
                title="Connection Error"
                des="Please roload this window or report!"
                show={connError}
                onClose={closeConnError}

                button={
                    <Button
                        name="Reload Window"
                        primary={true}
                        onClick={closeConnError}
                    />
                }
            />
            <SideBar />
            <SideBarExp />
            <div className="main-con">
                <Routes>
                    <Route path='/' element={<HomePage initPath={"/"} thisTrash={false} />} />
                    <Route path='/trash' element={<HomePage initPath={"/.delete"} thisTrash={true} />} />
                    <Route path='/files' element={<HomePage thisTrash={false} />} />
                    <Route path='/pictures' element={<HomePage initPath={"/Pictures"} thisTrash={false} />} />
                    <Route path='/videos' element={<HomePage initPath={"/Videos"} thisTrash={false} />} />
                    <Route path='/documents' element={<HomePage initPath={"/Documents"} thisTrash={false} />} />

                    <Route path='/webterm' element={<WebTerm />} />
                    <Route path='/proc' element={<ProcMoni/>} />

                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainApp
