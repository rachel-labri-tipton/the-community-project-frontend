import axios from "axios"
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router-dom"


const BlogPostCards = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const [accessToken] = useLocalStorage("accessToken", "")

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await axios.get("https://the-community-project.herokuapp.com/blogposts/", {
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
                                <img height="300" width="250" class="object-scale-down md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/996/original/undraw_buffer_wq43.png?1652261836" alt="" />
                                <div class="p-6 flex flex-col justify-start text-left">
                                    <h5 class="text-gray-900 text-xl font-medium mb-2">{blogpost.title}</h5>
                                    <p class="text-gray-700 text-base mb-4">
                                        {blogpost.excerpt}
                                    </p>
                                    <p class="text-gray-600 text-xs">by {blogpost.author.first_name}</p>
                                    <Link to={`/blogposts/${blogpost.id}/`}><button class="mb-4 font-sans bg-purple mt-6 hover:bg-pink font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-x">Read It</button></Link>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 md:bg-cream"
                        >
                            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/033/991/original/undraw_Trip_re_f724.png?1652261742" class="w-16 -mt-14" alt="creativity" />
                            <h5 class="text-lg font-bold">{blogpost.title}</h5>
                            <p class="text-sm text-darkGrayishBlue">
                                {blogpost.excerpt}
                            </p>
                            <Link to={`/blogposts/${blogpost.id}/`}><button class="mb-4 font-sans bg-light-green mt-6 hover:bg-lt-bl-purple font-bold py-2 px-4 rounded-full rounded-r-4xl rounded-l-4xl drop-shadow-x">Read It</button></Link>
                        </div>
                    </div>


                ))}
            </div>
        </>
    )



}

export default BlogPostCards