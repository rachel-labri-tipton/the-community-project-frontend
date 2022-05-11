import axios from "axios"
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const BlogPostCards = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await axios.get("http://127.0.0.1:8000/blogposts/", {
                headers: {
                    Authorization: "Bearer " + accessToken,
                }
            })
            if (response.statusText === "OK") {
                const result = await response
                const result2 = response.data
                console.log(result.data)
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
                    <div>
                        <p key={blogpost.title}>{blogpost.title}</p>
                    </div>
                ))}
            </div>
        </>
    )



}

export default BlogPostCards