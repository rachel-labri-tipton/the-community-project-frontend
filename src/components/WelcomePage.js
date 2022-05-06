import React from "react"
import { Link } from "react-router-dom"

function WelcomePage() {
    console.log("homepage")
    return (
        <div>
            <h1 className="text-3xl font-bold font-serif underline mb-6 mt-6">This is our homepage under construction</h1>
            <div class="mb-6">
                <Link to="/login"><button class="bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg">Login</button></Link>
            </div>
            <div><Link to="/register"><button class="bg-pink hover:bg-blue font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg">Register</button></Link>
            </div>
        </div>


    )
}

export default WelcomePage