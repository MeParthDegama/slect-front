import React, { useEffect, useRef } from "react";
import CheckBox from "../elements/checkbox";
import { Button } from "../elements/button";
import { Input } from "../elements/input";
import { useState } from "react";
import OverLay from "../elements/overlay";
import { useAppDispatch } from "../state/hooks";
import API from "../conf/api";
import { addNotify } from "../state/notifySlices";
import { NotifyBlock, NotifyBlockEnum } from "../elements/notify";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import hostName from "../conf/hostName";

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const NewNotification = (title: string, des: string, status: NotifyBlockEnum) => {
        dispatch(addNotify(<NotifyBlock title={title} des={des} status={status} />))
    }

    let [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    let [remember, setRemember] = useState(false)
    let [loader, setLoader] = useState(false)

    const setValue = (e: any) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    const checkRemember = (e: any) => {
        setRemember(e.target.checked)
    }

    const login = (e: any) => {

        if (loginInfo.username === "" || loginInfo.password === "") {

            if (loginInfo.username === "" && loginInfo.password === "") {
                dispatch(addNotify(<NotifyBlock title={"Username And Password"} des={"Enter username & password"} status={NotifyBlockEnum.ERROR} />))
            } else if (loginInfo.username === "") {
                dispatch(addNotify(<NotifyBlock title={"Username"} des={"Enter username"} status={NotifyBlockEnum.ERROR} />))
            } else if (loginInfo.password === "") {
                dispatch(addNotify(<NotifyBlock title={"Password"} des={"Enter password"} status={NotifyBlockEnum.ERROR} />))
            } else {
                dispatch(addNotify(<NotifyBlock title={"Application Error"} des={"Please report!"} status={NotifyBlockEnum.ERROR} />))
            }

            return
        }

        setLoader(true) // set loader

        API.post(
            "/auth/",
            loginInfo,
        ).then(r => {

            if (r.data.status) {

                NewNotification("Login Successful", `User \`${loginInfo.username}\` login successful.`, NotifyBlockEnum.SUCCESS)
                const cookies = new Cookies();
                cookies.set('TOKEN', r.data.token, remember ? { path: '/', maxAge: new Date().getTime() + (5 * 24 * 60 * 60 * 1000) } : { path: '/' });
                navigate("/")

            } else {
                NewNotification("Login Error", r.data.message, NotifyBlockEnum.ERROR)
            }

            setLoader(false) // unset loader 

        }).catch(e => {

            // any error
            NewNotification("Server Error", "internal server error `" + e + "`", NotifyBlockEnum.ERROR)
            setLoader(false) // unset loader

        })
    }

    // check user is already login or not login
    let authLock = useRef(false)

    useEffect(() => {

        // useEffect is execute two time than fix to use useRef
        if (!authLock.current) {
            authLock.current = true
            return
        }

        let cookie = new Cookies()
        let token = cookie.get("TOKEN")

        if (token) {
            navigate("/")
        }

    })

    return (
        <div className="login">
            <h1 className="host-title">
                {hostName}
            </h1>
            <div className="login-box">
                <OverLay show={loader} />
                <span className="login-title">Login</span>
                <Input className="mb" type="text" placeholder="Username" onChange={setValue} name="username" icon={<i className="bi bi-person-fill"></i>} />
                <Input className="mt" type="password" placeholder="Password" onChange={setValue} name="password" icon={<i className="bi bi-key-fill"></i>} />
                <CheckBox id="login_checkbox" name="Remember Me" onChange={checkRemember} />
                <Button name="Login" primary={true} onClick={login} />

                <div className="forgot-link">
                    <a href="https://google.com/">
                        Forgot Password
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Login