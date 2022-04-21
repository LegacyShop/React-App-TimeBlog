import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs && blogs.length < 1 && (<div className="blog-preview"><h2>Empty</h2></div>)}
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id} >
                <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p className="blog-info">Written by (<span className='author-blog'> { blog.author } </span>) at&nbsp;<span className='date'>{blog.date ||  'Not found date'}</span></p>
                </Link>
                
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;