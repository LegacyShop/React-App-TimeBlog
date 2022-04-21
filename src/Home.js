import BlogList from './Bloglist';
import useFetch from './useFetch';


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://api.jsonbin.io/b/6261739dc5284e311550b17c/1/blogs/');
    
    return ( 
    <div className="home">
        { error &&  <div> { error } </div>}
        { isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
    );
}
 
export default Home;
