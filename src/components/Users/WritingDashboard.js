import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import useLocalStorage from "../../hooks/useLocalStorage"




const WritingDashboard = () => {

    const { id } = useParams()
    const [blogArticle, setBlogArticle] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")
    const [formData, setFormData] = React.useState({
        title: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        profile_image: ''

    })


    useEffect(() => {
        const fetchBlogArticle = async () => {
            const response = await axios.post(`http://127.0.0.1:8000/blogposts/`, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            })
            if (response.statusText === "OK") {
                const result = await response
                const result2 = response.data
                console.log(result.data)
                setBlogArticle(result2)
                return blogArticle

            }
        }
        fetchBlogArticle()
    }, [])


    return (
        <>
            <div>
                <h1>{blogArticle.title}</h1>
                <h2>{blogArticle.excerpt}</h2>
                <img src={blogArticle.image} alt="dancing people" />
                <content>{blogArticle.content}</content>

            </div>
            <div id="editor">
                <p>Hello World!</p>
                <p>Some initial <strong>bold</strong> text</p>
            </div>
        </>
    )




}

export default WritingDashboard