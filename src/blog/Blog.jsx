import parse from 'html-react-parser';
import "./Blog.css"
function Blog({ blog }) {

    function parseDateStamp(timestamp) {
        const date = new Date(Date.parse(timestamp));
        const day = date.toLocaleString('default', { day: 'numeric' });
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    return (
        <div className="Blog">
            <div className='Blog-title'>
                <p>{parseDateStamp(blog.date_written)} - {blog.title}</p>
            </div>
            <div className='Blog-content'>
                {parse(blog.content)}
            </div>
        </div>
    )
}

export default Blog;