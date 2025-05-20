import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={"/signin"}>Signin</Link>
      <Link to={"/signup"}>SignUp</Link>
      Home</div>
  )
}

export default Home