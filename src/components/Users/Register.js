import React, { useState, useHistory, Profiler } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import { data } from "autoprefixer"
import { API_URL } from "../../config"

const Register = (props) => {

    // const [token, setToken] = useState(null)

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        profile_image: ''

    })

    const navigate = useNavigate()
    // const history = useHistory()

    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${API_URL}/users/register/`, formData)
            console.log(response)
            console.log(`Welcome ${response.data.username}`)
            if (response.statusText === "Created") {

                console.log("Successful login for", formData.username)
                const username = formData.username
                props.onRegister(username)
                navigate('/login')
            } else {
                setError(true)
            }

        }
        catch (err) {
            console.log(err)
            console.log("There was a problem signing you in.")
            setError(true)
        }
    }


    return (
        <>
            <section class="h-screen">
                <div>
                    <div class="container px-6 py-12 h-full mt-6">
                        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                                <img
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/667/original/undraw_workout_gcgu.jpg?1651942149"
                                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="w-full"
                                    alt="Phone"
                                />
                            </div>
                            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                                <h1 className="text-2xl font-bold mb-2 font-sans">
                                    We're glad you're here.
                                </h1>
                                {error && <div>Sorry, we weren't able to register you. Please fill in all required fields. </div>}
                                <h3 class="font-sans mb-2">Please fill in the form below.</h3>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink focus:outline-none"
                                        type="text"
                                        placeholder="First name*"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-green focus:outline-none"
                                        placeholder="Last name*"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                        placeholder="Username*"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink focus:outline"
                                        placeholder="Email address*"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink focus:outline-none"
                                        placeholder="Password*"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <input
                                        class="font-sans mb-2 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                        placeholder="Password confirmation*"
                                        name="password_repeat"
                                        type="password"
                                        value={formData.password_repeat}
                                        onChange={handleChange}
                                    />
                                    <input
                                        class="font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                        placeholder="Upload your picture here as a link."
                                        name="profile_image"
                                        type="url"
                                        value={formData.profile_image}
                                        onChange={handleChange}
                                        alt="profile image"
                                    />
                                    <div>
                                        <button type="submit" onClick={handleSubmit} class="mb-4 font-sans bg-purple mt-6 hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-xl">Let's get you signed up!</button>
                                    </div>
                                </form>
                            </div>

                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register

