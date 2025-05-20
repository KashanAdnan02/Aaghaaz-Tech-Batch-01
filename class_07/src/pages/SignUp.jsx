import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <Link to={"/signin"}>Signin</Link>
      <Link to={"/"}>Home</Link>
      <div>SignUp</div>
    </div>
  )
}

export default SignUp