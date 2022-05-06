import React, { useState, useHistory } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import { data } from "autoprefixer"


const Register = () => {

    // const [token, setToken] = useState(null)

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''

    })
    // const history = useHistory()
    const [errorMessage, setErrorMessage] = React.useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://127.0.0.1:8000/users/register/", formData)
            console.log(response)
            if (response.statusText === "Created") {
                console.log(`Welcome ${data.response.username}`)
            }
            // const { data } = await axios.post("http://127.0.0.1:8000/api/token/", formData)
            // setToken(data.token)
            // console.log(data.token)
            // history.push('/users/')
        } catch (e) {
            console.log("problem registering user")
            setErrorMessage(e.response.data)
        }
    }

    // const handleLogIn = () => {
    //   history.push('/log-in')
    // }

    // const handleImageUpload = (imageUrl, name) => {
    //     setFormData({ ...formData, [name]: imageUrl })
    // }

    // const [buttonPopup, setButtonPopup] = React.useState(false)

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

                <div>
                    <button type="submit" onClick={handleSubmit} class="bg-blue mt-6 hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-xl">Sign Up</button>
                </div>
            </form>
            {/* <>
                return ( if response.statusText==="Created"
                return user was created return message: Welcome {data.firstname}! )
            </> */}
            {/* <div className="image-upload">
                <ImageUploadField
                    onChange={handleChange}
                    labelText="Upload a profile picture*"
                    name="profileImage"
                    value={formData.profileImage}
                />
            </div> */}
            {/* {error &&
                <>
                    <p className="error-message">Please fill in the above required fields*</p>
                </>
            } */}

            {/* <p className="member">Already a member?  <button onClick={() => setButtonPopup(true)} className="login-button">Log in</button> </p>
            {/* <button type="submit" className="button login-button" onClick={handleLogIn}>Already have an account? Log in</button> */}
            {/* <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Login />
            </LoginPopup> */}
        </section >

    )
}

export default Register