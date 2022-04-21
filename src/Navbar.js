import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Time Blog</h1>
            <div className="links">
                <Link to='/Time-blog/'>Home</Link>
                <Link to='/Time-blog/create'>New Blog</Link>
                <Link to='/Time-blog/myblogs'>My Blogs</Link>
                <Link to='/Time-blog/settings'>Settings</Link>
            </div>
        </nav>
        
    );
}
export default Navbar;
