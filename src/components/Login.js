import React, { useState } from "react"
import axios from "axios"
import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "")
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "")
    const [username, setUsername] = useLocalStorage("username", "")
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false)
    const navigate = useNavigate()


    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/token/", formData)
            const result = await response
            console.log(result)

            if (response.statusText === "OK") {
                console.log("ok")
                setAccessToken(response.data.access)
                setRefreshToken(response.data.refresh)
                setUsername(formData.username)
                console.log("Successful login for", formData.username)
                const username = formData.username
                props.onLogin(username)
                navigate("/landingpage")
            }

        }
        catch (err) {
            console.log(err)
            setError(true)
        }
    }


    //when logged in successfully 1) 

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Please Login
            </h1>
            {error && <div>Heavens to Betsy, we weren't able to log you in.</div>}
            <form onSubmit={onLogin}>
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
                <div>

                    <button type="submit" class="bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg mt-6">Login</button>
                </div>

            </form>
        </div>
    )
}


export default Login