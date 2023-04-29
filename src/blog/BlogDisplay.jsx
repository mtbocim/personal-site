import { useState, useEffect } from "react"
import siteApi from "../api"

function BlogDisplay(){
    const [ blogs, setBlogs] = useState()
    const [ loaded, setLoaded ] = useState(false)
    console.log("what is blogs", blogs)
    useEffect(function getBlogsOnMount(){
        async function getBlogs(){
            const results = await siteApi.getAllBlogs();
            setBlogs(()=>results.data.blogs)
            setLoaded(()=>true)
        }
        getBlogs();
    }, []);
    function parseDateStamp(timestamp){
        const date = new Date(Date.parse(timestamp));
        const day = date.toLocaleString('default', { day: 'numeric' });
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    return (
        <div className="BlogDisplay">
            {!loaded ? <p>Loading</p> : blogs.map((blog)=>
                <div className="BlogDisplay-blog" key={blog.id}>
                    <p>{parseDateStamp(blog.date_written)} - {blog.title}</p>
                    <p>{blog.content}</p>
                    <p></p>
                </div>
            )}
        </div>
    )
}

export default BlogDisplay