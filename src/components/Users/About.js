import React from "react"
import { Link } from "react-router-dom"


const About = () => {
    return (
        <>
            <section class="h-screen">
                <div>
                    <div class="container px-6 py-12 h-full mt-6">
                        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                                <img
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/668/original/undraw_Yoga_re_i5ld.jpg?1651942157"
                                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="w-full"
                                    alt="dancing"
                                />
                            </div>
                            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                                <h1 className="text-2xl  font-sans mb-6">
                                    About Us
                                </h1>
                                <p class="text-justify font-sans"> The Community Project is my final project for General Assembly's Software Engineering Immersive. It uses a Django backend deployed on herokuapp and a React Frontend deployed on Netlify.<br></br> <br></br> My idea was to use this project to build a backend that I might use for friends who are looking to build a community page. This version of the project has user profiles and a blog, but I hope to build it out to also have a chatroom and workshop sign-up feature.</p> <br></br>
                                <h3 class="text-justify font-sans">Not sure you want to register? Maybe we could interest you in our newsletter.</h3>
                                <form>
                                    <div class="mb-3 mt-3">
                                        <input
                                            class="font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            type="text"
                                            placeholder="You can sign up here."
                                            name="email"

                                        />
                                    </div>
                                    <div>

                                        <button type="submit" class="font-sans bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg  mb-4">Sign me up!</button>
                                    </div>





                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About 