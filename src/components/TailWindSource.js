import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"



const TailWind = () => {

    return (
        <div>
            <nav class="relative container mx-auto p-6 font-sans">
                <div class="flex items-center justify-between">
                    <div class="pt-2">
                        <img height="100" width="100" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/571/original/NewIdeas.jpg?1651832632" alt="svg of positive community" />
                    </div>
                    <div class="hidden md:flex space-x-6">
                        <Link to="/blogposts" class="hover:text-pink">Blog Posts</Link>
                        <Link to="/userprofile" class="hover:text-pink"> View Profile </Link>
                        <Link to="/writeforus" class="hover:text-pink">Write for Us</Link>
                        <Link to="/register" class="hover:text-pink">Register</Link>
                        <Link to="/about" class="hover:text-pink">About Us</Link>
                    </div>
                    <Link to="/login"><button class="bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl">Login</button></Link>

                </div>
                <section class="container flex flex-col-reverse md: flex-row items-center px-6 mx-auto mt-10 space-y-0 md: space-y-0">
                    <div class="flex">
                        <h1>Build your own community here.</h1>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default TailWind