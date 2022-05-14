import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import useLocalStorage from "../../hooks/useLocalStorage"
import { API_URL } from "../../config"



const WritingDashboard = () => {


    const [blogposts, setBlogPosts] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")
    const [formData, setFormData] = React.useState({
        title: '',
        content: '',
        author: '',
        image: ''

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
            const response = await axios.post(`${API_URL}/blogposts/`, {
                formData,
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            })
            if (response.statusText === "OK") {
                const result = await response
                const result2 = response.data
                console.log(result.data)
                setBlogPosts(result2)
                return blogposts
                navigate("/blogposts")

            } else {
                setError(true)
            }
        } catch (err) {
            console.log(err)
            console.log("There was a problem posting to the blog.")
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
                                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/000/original/undraw_Gardening_re_e658.png?1652261910"
                                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    class="w-full"
                                    alt="Garden"
                                />
                            </div>
                            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                                <h1 className="text-2xl font-bold mb-2 font-sans">
                                    New Article
                                </h1>
                                {error && <div>Sorry, we weren't able to submit your article. </div>}

                                <form onSubmit={handleSubmit}>
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink focus:outline-none"
                                        type="text"
                                        placeholder="Title*"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-green focus:outline-none"
                                        placeholder="Author*"
                                        name="author"
                                        value={formData.author.first_name}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                        placeholder="Content*"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <input
                                        class="mb-2 font-sans form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink focus:outline"
                                        placeholder="Image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        type="file"
                                    />
                                    <button type="submit" onClick={handleSubmit} class="mb-4 font-sans bg-purple mt-6 hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-xl">Publish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )




}

export default WritingDashboard