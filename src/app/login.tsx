import React from "react";
import CheckBox from "../elements/checkbox";
import { Button } from "../elements/button";
import { Input } from "../elements/input";
import { useState } from "react";
import OverLay from "../elements/overlay";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import API from "../conf/api";
import { addNotify } from "../state/notifySlices";
import { NotifyBlock, NotifyBlockEnum } from "../elements/notify";

const Login = () => {

    const dispatch = useAppDispatch()

    const NewNotification = (title: string, des: string, status: NotifyBlockEnum) => {
        dispatch(addNotify(<NotifyBlock title={title} des={des} status={status} />))
    }

    let userHostName = "SmediaHost"

    let [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    let [loader, setLoader] = useState(false)

    const setValue = (e: any) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    const login = (e: any) => {
        setLoader(true) // set loader

        API.post(
            "/auth/",
            loginInfo,
        ).then(r => {
                
            if (r.data.status) {
                

            } else {
            
                NewNotification("Login Error", r.data.message, NotifyBlockEnum.ERROR)
            
            }

            setLoader(false) // unset loader 
            
        }).catch(e => {

            // any error
            NewNotification("Server Error", "internal server error", NotifyBlockEnum.ERROR)
            setLoader(false) // unset loader

        })
    }

    return (
        <div className="login">
            <h1 className="host-title">
                {userHostName}
            </h1>
            <div className="login-box">
                <OverLay show={loader} />
                <span className="login-title">Login</span>
                <Input className="mb" type="text" placeholder="Username" onChange={setValue} name="username" icon={<i className="bi bi-person-fill"></i>} />
                <Input className="mt" type="password" placeholder="Password" onChange={setValue} name="password" icon={<i className="bi bi-key-fill"></i>} />
                <CheckBox id="login_checkbox" name="Remember Me" />
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