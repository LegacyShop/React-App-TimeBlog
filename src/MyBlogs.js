import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const MyBlogs = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    const filterBlogs = (blogs_) => {
        blogs_.map((blog, index) => {
            if(blog.author != localStorage.getItem('user-name')) {
                blogs_.splice(index, 1);
            }
        })
        return blogs_;
    }
    
    let blogs_a;
    if(isPending == false) {
        blogs_a = filterBlogs(blogs)
    }

    return (
        <div className="myblogs">
        
        { error &&  <div> { error } </div>}
        { isPending && <div>Loading...</div>}
        {blogs_a && <h2>My blogs</h2>}
        {blogs_a && blogs.length < 1 && (<div className="blog-preview"><h2>Empty</h2></div>)}
        {blogs_a && blogs.map((blog) => (
            <div className="blog-preview">
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p className="blog-info">Written by (<span className='author-blog'> { blog.author } </span>) at&nbsp;<span className='date'>{blog.date ||  'Not found date'}</span></p>
                </Link>
            </div>
            
        ))}
        </div>
    );
}
 
export default MyBlogs;