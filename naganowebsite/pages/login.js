import React, { useContext } from "react";
import Topbar from "../src/components/Topbar";
import { AuthContext } from "../src/context/AuthContext";
 ''
// Sing in form with styled components

     handleSubmit =  async (e)  => {
         e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                await login(values.email, values.password);
            });
        }

const Login = () => {
    const { login } = useContext(AuthContext);
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

