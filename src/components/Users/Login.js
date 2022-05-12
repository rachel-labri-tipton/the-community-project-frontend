import React, { useState } from "react"
import axios from "axios"
import useLocalStorage from "../../hooks/useLocalStorage"
import { useNavigate, Link } from "react-router-dom"

const Login = (props) => {
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "")
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "")
    const [username, setUsername] = useLocalStorage("username", "")
    const [isStaffWriter, setIsStaffWriter] = useState()
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
                setIsStaffWriter(response.data.is_staff_writer)
                console.log("Successful login for", formData.username)
                const username = formData.username
                props.onLogin(username)
                navigate("/homepage")
            }

        }
        catch (err) {
            console.log(err)
            setError(true)
        }
    }


    //when logged in successfully 1) 

    return (
        <>
            <section class="h-screen">
                <div>
                    <div class="container px-6 py-12 h-full mt-6">
                        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                                <img
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/113/original/undraw_Creative_woman.png?1652359567"
                                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="w-full"
                                    alt="Phone"
                                />
                            </div>
                            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                                <h1 className="font-sans text-2xl font-bold mb-2">
                                    We're glad you're back.
                                </h1>
                                <p class="mb-2">Or here for the first time....</p>

                                {error && alert("Sorry, we weren't able to log you in.")}

                                <form onSubmit={onLogin}>
                                    <div class="mb-6">
                                        <input
                                            class="font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            onChange={onChange}
                                        />
                                    </div>
                                    <input
                                        class="font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={onChange}
                                    />
                                    <div>

                                        <button type="submit" class="font-sans bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg mt-6 mb-4">Login</button>
                                    </div>
                                    <Link to="/passwordrefresh"
                                        class="font-sans text-black hover:text-blue focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out mt-4">Forgot password?</Link>


                                    <h1 className="font-sans text-2l font mb-4 mt-2">
                                        Here for the first time? <br></br>
                                    </h1>
                                    <div><Link to="/register"><button class="mb-4 font-sans bg-blue hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-lg">You can register here.</button></Link>
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


export default Login