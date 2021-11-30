import React from "react";
import Topbar from "../src/components/Topbar";

// Sing in form with styled components

     handleSubmit = (e) => {
         e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }

const Login = () => {
    return (
        <>
        <Topbar></Topbar>
        <div>
        <h1>Login</h1>
        <form>
            <label>
            Email:
            <input type="text" />
            </label>
            <label>
            Password:
            <input type="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
        </>
    );
    }

    export default Login;

