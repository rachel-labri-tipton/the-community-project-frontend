import axios from "axios"
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom"
import { API_URL } from "../config";

const BlogPostCards = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await axios.get(`${API_URL}/blogposts/`, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            })
            if (response.statusText === "OK") {
                const result = await response
                const result2 = response.data
                console.log(result)
                setBlogPosts(result2)
                console.log(blogPosts)
                return blogPosts

            }
        }
        fetchBlogPosts()
    }, [])


    return (
        <>
            <div>
                {blogPosts.map((blogpost) => (
                    <div class="sm:container md:mx-auto center">
                        <div class="flex justify-center mb-4">
                            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                                <img height="300" width="250" class="object-scale-down md:h-auto md:object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={blogpost.image} alt="cool woman" />
                                <div class="p-6 flex flex-col justify-start text-left">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">{blogpost.title}</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        {blogpost.excerpt}
                                    </p>
                                    <p class="text-gray-600 text-xs">by {blogpost.author.first_name}</p>
                                    <Link to={`/blogposts/${blogpost.id}/`}><button class="mb-4 font-sans bg-light-green mt-6 hover:bg-pink  py-2 px-4 rounded-full rounded-r-4xl rounded-l-xl drop-shadow-x md:">Read more</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </>
    )
}


export default BlogPostCards