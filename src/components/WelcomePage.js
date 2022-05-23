import React from "react"
import { Link } from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage"

function WelcomePage() {
    console.log("welcomepage")
    return (
        <>
            <div>
                <section id="hero" class="mt-13">
                    {/* flex container */}
                    <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row md:mt-10 md:mb-32">
                        <div class="flex flex-col mb-32 space-y-12 md:w-1/3 md:ml-15 md:space-y-12">
                            <h1 class="max-w-md text-2xl fond-bold text-left mb-2 md:text-4xl md:text-left">Welcome to the Community Project:</h1>
                            <div class="md:mt-10">
                                <h2 class="max-w-md  text-3xl text-left text-teal md:text-left md:text-5xl md:mt-15">A template for building your online community.</h2>
                            </div>

                        </div>
                        <div
                            class="max-w-lg md:w-2/3 md:justify-end md:mt-10">
                            <img height={500} width={500} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/985/original/undraw_People_re_8spw.png?1652261649" alt="group of people" />
                        </div>
                        <div class="flex justify-center md:justify-start md:ml-15">

                        </div>
                    </div>
                </section>
            </div>
            {/* new section */}

            <section id="features" class="mt-32 md:mt-32">
                {/* <!-- Container to heading and testm blocks --> */}
                <div class="max-w-6xl px-5 mx-auto mt-32 text-center md:mt-32">

                    <h2 class="text-4xl font-sans text-center md:py-10 md:mb-5">
                        What we offer...
                    </h2>

                    <div class="flex flex-col mt-24 md:flex-row md:space-x-6 md:mt-13">

                        <div
                            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:bg-mustard-yellow"
                        >
                            <img width={500} height={500} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/092/original/undraw_Working_out_re_nhkg.png?1652340227" class="w-16 -mt-14" alt="woman with kettle bells" />
                            <h5 class="text-2xl font-sans">Well-crafted Articles</h5>
                            <p class="text-sm text-darkGrayishBlue">
                            </p>
                        </div>


                        <div
                            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 md:bg-cream"
                        >
                            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/991/original/undraw_Trip_re_f724.png?1652261742" class="w-16 -mt-14" alt="people travelling" />
                            <h5 class="text-2xl font-sans">Workshops</h5>
                        </div>

                        {/* <!-- Testimonial 3 --> */}
                        <div
                            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-light-green md:flex md:w-1/3 md:bg-light-green"
                        >
                            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/667/original/undraw_workout_gcgu.jpg?1651942149" class="w-16 -mt-14" alt="woman dancing" />
                            <h5 class="text-2xl font-sans">Conversation</h5>
                        </div>

                    </div>
                    <div class="md:pt-15">

                    </div>
                </div>
            </section>
            {/* call to action */}
            <section id="cta" class="bg-light-green">
                {/* <!-- Flex Container --> */}
                <div
                    class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 py-6"
                >
                    {/* <!-- Heading --> */}
                    <h2
                        class="text-5xl leading-tight text-center font-sans text-white md:text-4xl md:max-w-xl md:text-left"
                    >
                        Sound like your thing?
                    </h2>
                    {/* <!-- Button --> */}
                    <div>
                        <Link to="/register"
                            class="p-3 px-6 pt-2 text-brightRed font-sans bg-white md:hover:bg-mustard-yellow rounded-full shadow-2xl baseline hover:bg-gray-900">You can register here.
                        </Link>
                    </div>
                </div>
            </section>

            <footer class="bg-lt-bl-purple">

                {/* <!-- Input Container --> */}
                <div class="flex flex-col justify-between md:text-center py-2 md:py-2">
                    <div class="text-white text-center md:block ">
                        <p>Copyright &copy; 2022, All Rights Reserved by Rachel Tipton.</p>
                    </div>
                </div>
            </footer>
            <div>

            </div>

        </>

    )
}

export default WelcomePage




    // < div class="mb-6" >
    //     <Link to="/login"><button class="bg-lt-bl-purple hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg">Login</button></Link>
    //             </div >
    // <div><Link to="/register"><button class="bg-pink hover:bg-blue font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg">Register</button></Link>
    // </div>