import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    // const navigate = useNavigate()
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/token/", formData)
            console.log(res)
            if (res.data.token) {
                console.log("Success")
                localStorage.setItem("Bearer", res.data.token)
                // navigate("/blogposts/")
            }
        } catch (e) {
            setErrorMessage(e.response.data.message)
        }
    }
    return (
        <div>
            <h1>Login</h1>
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