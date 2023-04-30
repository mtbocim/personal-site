import parse from 'html-react-parser';

function Blog({ blog }) {
    
    function parseDateStamp(timestamp){
        const date = new Date(Date.parse(timestamp));
        const day = date.toLocaleString('default', { day: 'numeric' });
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    return (
        <div className="Blog" key={blog.id}>
            <p>{parseDateStamp(blog.date_written)} - {blog.title}</p>
            {parse(blog.content)}
            <p></p>
        </div>
    )
}

export default Blog;