import React, { useState, useEffect } from "react"
import axios from 'axios'


const BlogPost = () => {
    return (
        <h1>Our Blogposts will be here.</h1>
    )
}

//     const [blogposts, setBlogPosts] = useState();

//     useEffect(() => {
//         const fetchBlogPosts = async () => {
//             const response = await axios.get("http://localhost:8000/blogposts/");
//             const result = await response.json(response)
//             setBlogPosts(result)
//             console.log(result)

//         };

//         fetchBlogPosts();
//     }, []);


//     return (
//         <>
//             <h1>Have a look through our BlogPosts.</h1>
//             <div>
//                 {blogposts.map((blogpost) => (
//                     <div>
//                         <p key={blogpost.title}>{blogpost.title}</p>
//                     </div>)

//                 )
//                 }
//             </div>
//         </>
//     )

// }


export default BlogPost