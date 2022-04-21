import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import MyBlogs from './MyBlogs';
import Settings from './Settings';
const App = () => {
  if(!localStorage.getItem('user-name')) {
    localStorage.setItem('user-name', 'Unnamed')
  }
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">    
        <Switch>
          <Route exact path="/Time-blog/">
            <Home />
          </Route>
          <Route  path="/Time-blog/create">
            <Create />
          </Route>
          <Route  path="/Time-blog/blogs/:id">
            <BlogDetails />
          </Route>
          <Route  path="/Time-blog/myblogs">
            <MyBlogs />
          </Route>
          <Route  path="/Time-blog/settings">
            <Settings />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
