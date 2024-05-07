import React from 'react'
import FormPic from "../../Dummy/Photos/Category/Flower/flower2.jpg"
import "./Login.css"

const Login = () => {
    return (
        <div className='Form-Main-Container'>
            <form >
                <div class="imgcontainer">
                    <img src={FormPic} alt="Avatar" class="avatar" />
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div class="container" background-color="#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="">password?</a></span>
                </div>
            </form>
            ADVERTISEMENT
        </div>
    )
}

export default Login