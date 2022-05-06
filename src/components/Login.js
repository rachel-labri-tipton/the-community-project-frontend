import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/token/", formData)
            console.log(response)
            if (response.data) {

                localStorage.setItem("Access Token", response.data.access)
                localStorage.setItem("Refresh Token", response.data.refresh)
                console.log("Success")
                navigate("/TailWindPractice/")
            }
        } catch (e) {
            setErrorMessage(e.response.data.detail)
            console.log("user doesn't exist")
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            {errorMessage && <div className="failure">{errorMessage}</div>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={onChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login