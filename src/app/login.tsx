import React from "react";
import CheckBox from "../elements/checkbox";
import { Button } from "../elements/button";
import { Input } from "../elements/input";
import { useState } from "react";
import OverLay from "../elements/overlay";
import API from "../conf/api";

const Login = () => {

    let userHostName = "SmediaHost"

    let [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    let [loader, setLoader] = useState(false)

    const setValue = (e: any) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    const login = (e: any) => {
        setLoader(true)

        API.post(
            "/auth/",
            loginInfo,
        ).then(r => {
            console.log(r);
            setLoader(false)
        }).catch(e => {
            alert(e)
            setLoader(false)
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