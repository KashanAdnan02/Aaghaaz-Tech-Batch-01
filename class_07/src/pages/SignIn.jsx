import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>SignIn
            <Link to={"/signup"}>SignUp</Link>
            <Link to={"/"}>Home</Link>
            <input type="text" placeholder='email' /> <br />
            <input type="text" placeholder='Password' />
            <br />
            <button>Sign IN</button>
        </div>
    )
}

export default SignIn