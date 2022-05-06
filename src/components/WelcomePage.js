import React from "react"
import { Link } from "react-router-dom"

function WelcomePage() {
    console.log("homepage")
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This is our homepage under construction</h1>
            <Link to="/login"><button>Login Here</button></Link>
        </div>

    )
}

export default WelcomePage