import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage"
import { API_URL } from "../config"

const BlogArticle = () => {

    const { id } = useParams()
    const [blogArticle, setBlogArticle] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")

    useEffect(() => {
        const fetchBlogArticle = async () => {
            const response = await axios.get(`${API_URL}/blogposts/${id}/`, {
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
                <section>
                    <div class="container flex flex-col-reverse font-sans items-center px-6 mx-auto mt-10 space-y-6 md:space-y-10 md:flex-row md:mt-10 md:w-3/4">
                        <img height={350} width={350} src={blogArticle.image} alt="react lady" />
                        <div class="items-center text-center">

                            <div class="items-center text-center">
                                <h1 class="font-medium leading-tight text-4xl text-center mt-0 mb-2 text-teal md:text-6xl md:text-right">{blogArticle.title}</h1>
                                {/* <h2 class="font-sans text-3xl">by {blogArticle.author.first_name} </h2> */}

                            </div>
                        </div>
                    </div>
                </section>
                <section class="md:mx-auto md:w-2/3">
                    <div class="container text-justify ml-32 mr-32 pr-6 pl-6 font-sans text-block md:text-justify">
                        <p class="text-1xl">{blogArticle.content}</p>
                    </div>
                </section>
                <section class="md:mx-auto md:w-2/3">
                    <div class="container text-justify  mx-6 my-4 pr-6 font-sans text-block md:text-left">
                        {/* <p>About the author: {blogArticle.author.bio}</p> */}
                        <h2 class="font-sans text-md"> by Staff Writer</h2>
                    </div>
                </section>
            </div>
            {/* <section>
                <content class="md:justify-left">{blogArticle.content}</content>
            </section>
            
            <content class="md:justify-left">{blogArticle.content}</content>
        </> */}
        </>

    )
}

export default BlogArticle



/* <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-10 md:flex-row md:mt-10">
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
    <div class="flex justify-center md:justify-start md:ml-15"> */










