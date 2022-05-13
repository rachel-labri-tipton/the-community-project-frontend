import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import username from "../App"
import App from "../App"


const HomePage = () => {

    return (
        <>
            <section id="hero" class="mt-13">
                {/* flex container */}
                <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row">
                    <div
                        class="max-w-lg md:w-3/4 md:justify-end md:mt-4">
                        <img height={500} width={500} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/097/original/undraw_Working_out_re_nhkg_%282%29.png?1652341054" alt="lady with kettlebells" />
                    </div>
                    <div class="flex flex-col mb-32 space-y-12 md:w-1/3 md:ml-15 md:space-y-12">
                        <h1 class="max-w-md text-2xl fond-bold text-left mb-2 md:text-4xl md:text-left">Hey there!</h1>
                        <div class="md:mt-10">
                            <h2 class="max-w-md  text-3xl text-left text-teal md:text-left md:text-3xl md:mt-15">Some parts of this website are still under construction.</h2>
                        </div>

                    </div>

                    <div class="flex justify-center md:justify-start md:ml-15">

                    </div>
                </div>
            </section>
            <section id="hero" class="mt-4 md:mt-4">
                {/* flex container */}
                <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row md:mt-10">
                    <div class="flex flex-col mb-32 space-y-12 md:w-1/3 md:ml-15 md:space-y-12">
                        <h1 class="max-w-md text-2xl fond-bold text-left mb-2 md:text-4xl md:text-left">We'd like to feature blog articles here.</h1>

                        <div class="md:mt-10">

                        </div>



                    </div>

                    <div class="flex justify-center md:justify-start md:ml-15">
                        <div
                            class="max-w-lg md:justify-end md:mt-10">
                            <img height={600} width={600} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/996/original/undraw_buffer_wq43.png?1652261836" alt="group of people" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="hero" class="mt-4 md:mt-4">
                {/* flex container */}
                <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row md:mt-10">
                    <div class="flex justify-center md:justify-start md:ml-15">
                        <div
                            class="max-w-lg md:justify-end md:mt-10">
                            <img height={600} width={600} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/988/original/undraw_Solution_mindset_re_57bf.png?1652261697" alt="group of people" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-32 space-y-12 md:w-1/3 md:ml-15 md:space-y-12">
                        <h1 class="max-w-md text-2xl fond-bold text-left mb-2 md:text-4xl md:text-left md:text-teal">And have workshops for people to sign up for here.</h1>

                        <div class="md:mt-10">

                        </div>



                    </div>


                </div>
            </section>
            <section id="hero" class="mt-13">
                {/* flex container */}
                <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row md:mt-10">
                    <div class="flex flex-col mb-32 space-y-12 md:w-1/3 md:ml-15 md:space-y-12">
                        <h1 class="max-w-md text-2xl fond-bold text-left mb-2 md:text-4xl md:text-left">Too many ideas, too little time.<br></br> <br></br> For the moment, feel free to <Link to="/blogposts" class="text-teal hover:text-pink">read our blog.</Link></h1>


                    </div>
                    <div
                        class="max-w-lg md:w-2/3 md:justify-end md:mt-10">
                        <img height={600} width={600} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/995/original/undraw_super_woman_dv0y_%285%29.png?1652261782" alt="group of people" />
                    </div>
                    <div class="flex justify-center md:justify-start md:ml-15">

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage