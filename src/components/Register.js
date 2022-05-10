import React, { useState, useHistory, Profiler } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { data } from "autoprefixer"


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
    const [errorMessage, setErrorMessage] = React.useState(false)
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://127.0.0.1:8000/users/register/", formData)
            console.log(response)
            console.log(`Welcome ${response.data.username}`)
            if (response.statusText === "Created") {

                console.log("Successful login for", formData.username)
                const username = formData.username
                props.onRegister(username)
                navigate('/login')
            }

        }
        catch (err) {
            console.log("problem registering user")
            setErrorMessage(err.response.data)
        }
    }

    return (
        <section>
            <h1 class="text-3xl font-bold font-serif mb-6 mt-6">We're excited you want to join our community.</h1>
            {errorMessage && <div >{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    type="text"
                    placeholder="First name*"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Last name*"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    type="text"
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Username*"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    type="text"
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Email address*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Password*"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Password confirmation*"
                    name="password_repeat"
                    type="password"
                    value={formData.password_repeat}
                    onChange={handleChange}
                />
                <input
                    class="rounded-r-4xl rounded-l-4xl"
                    placeholder="Upload your picture here."
                    name="profile_image"
                    type="file"
                    value={formData.profile_image}
                    onChange={handleChange}
                    alt="profile image"
                />
                <div>
                    <button type="submit" onClick={handleSubmit} class="bg-blue mt-6 hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-xl">Sign Up</button>
                </div>
            </form>

        </section >

    )
}

export default Register

