import React from "react";
import CheckBox from "../elements/checkbox";
import { Button } from "../elements/button";
import { Input } from "../elements/input";

const Login = () => {

    let userHostName = "SmediaHost"

    return (
        <div className="login">
            <h1 className="host-title">
                {userHostName}
            </h1>
            <div className="login-box">
                <span className="login-title">Login</span>
                <Input className="mb" type="text" placeholder="Username" icon={<i className="bi bi-person-fill"></i>} />
                <Input className="mt" type="password" placeholder="Password" icon={<i className="bi bi-key-fill"></i>} />
                <CheckBox id="login_checkbox" name="Remember Me" />
                <Button name="Login" primary={true} />

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