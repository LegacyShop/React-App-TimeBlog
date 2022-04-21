import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Time Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
                <Link to='/myblogs'>My Blogs</Link>
                <Link to='/settings'>Settings</Link>
            </div>
        </nav>
        
    );
}
export default Navbar;
