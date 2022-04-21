import BlogList from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/');
    
    return ( 
    <div className="home">
        { error &&  <div> { error } </div>}
        { isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
    );
}
 
export default Home;
