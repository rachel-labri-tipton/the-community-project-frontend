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
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/099/original/undraw_React_re_g3ui_%282%29.png?1652341102"
                                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="w-full"
                                    alt="dancing"
                                />
                            </div>
                            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                                <h1 className="text-2xl  font-sans mb-6">
                                    About
                                </h1>
                                <p class="text-justify font-sans"> Hi! I'm <span class="text-pink font-bold">Rachel Tipton</span>, the maker of <span class="text-teal md:text-bold text-3xl">The Community Project</span>. This is my fourth and final project for General Assembly's Software Engineering Immersive. It uses a Python Django backend deployed to Heroku and a React Frontend deployed on Netlify.<br></br> <br></br> I love the idea of community and people connecting positively over activities or ideas they love. My idea was to use this project to build a backend that I might use for friends who are looking to build a community page for their own passions. This version of the project has a blog and login and register function. But I hope to build it out to have a chat and workshop sign-up feature. You can check out the project on <a href="https://github.com/rachel-labri-tipton" class="text-pink md:text-pink md:font-bold">GitHub</a>. Or feel free to check out my profile on <a href="https://www.linkedin.com/in/rachel-labri-tipton/" class="text-pink md:text-pink md:font-bold">LinkedIn</a>.</p><br></br>
                                <h3 class="text-justify font-sans">I also wanted people to sign up for a newsletter. This seemed like the right place.</h3>
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
            </section >
        </>

    )
}

export default About 