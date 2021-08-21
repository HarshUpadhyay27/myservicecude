import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <p>Welcome to MyServiceCube <Link to="/signin">Sign In</Link></p>
        </div>
    )
}

export default Home
