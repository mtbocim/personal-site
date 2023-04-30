import { useState, useEffect } from "react";
import siteApi from "../api";
import BlogPost from "./BlogPost";
import Blog from "./Blog";
import jwt_decode from "jwt-decode";

import './BlogDisplay.css'

function BlogDisplay({ token }) {
    const [blogs, setBlogs] = useState()
    const [loaded, setLoaded] = useState(false)
    const [isAdmin, setIsAdmin] = useState(
        token !== null
            ? jwt_decode(token).isAdmin
            : false
    );

    console.log("what is blogs", blogs)
    console.log("what is admin", isAdmin)

    useEffect(function getBlogsOnMount() {
        async function getBlogs() {
            const results = await siteApi.getAllBlogs();
            setBlogs(() => results.data.blogs)
            setLoaded(() => true)
        }
        getBlogs();
    }, []);


    return (
        <div className="BlogDisplay">
            {isAdmin && <BlogPost token={token} />}
            {
                !loaded
                    ? <p>Loading</p>
                    : blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
            }
        </div>
    )
}

export default BlogDisplay