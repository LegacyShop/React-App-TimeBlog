import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/' + id);
    const history = useHistory();

    

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [load, setLoad] = useState(false);
    const handleClick = () => {
        fetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/' + blog.id, {
            method: 'DELETE',
            headers: {
                "API-KEY": "f5563022-c412-43d7-b2d1-82c2ee10bec4"
            }
        })
        .then(() => {
            history.push('/Time-blog');
        })
    }

    const handleBack = () => {
        history.goBack()
    }

    const handleLoad = () => {
        if(load == false) {
            setLoad(true);
            setDislike(blog.vouches.dislike);
            setLike(blog.vouches.like);
        }
    }

    const handleLike = async () => {
        try {
            blog.vouches.like++;
            setLike(blog.vouches.like);
            const response = await fetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/' + blog.id, {
              method: 'PUT',
              body: JSON.stringify(blog),
              headers: {
              "Content-type": "application/json; charset=UTF-8", "API-KEY": "f5563022-c412-43d7-b2d1-82c2ee10bec4"
              }
            });
          } catch (error) {
            console.error('Ошибка:', error);
          }
    }

    const handleDislike = async () => {
        try {
            blog.vouches.dislike++;
            setDislike(blog.vouches.dislike);
            const response = await fetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/' + blog.id, {
              method: 'PUT',
              body: JSON.stringify(blog),
              headers: {
              "Content-type": "application/json; charset=UTF-8", "API-KEY": "f5563022-c412-43d7-b2d1-82c2ee10bec4"
              }
            });
          } catch (error) {
            console.error('Ошибка:', error);
          }
    }
    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            {blog && handleLoad()}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    
                    <div>{ blog.body }</div>
                    
                    <label><button onClick={handleLike}>👍</button> - {like}</label>&nbsp;
                    <label><button onClick={handleDislike}>👎</button> - {dislike}</label>
                    
                    <p className="blog-info">Written by (<span className='author-blog'> { blog.author } </span>) at&nbsp;<span className='date'>{blog.date ||  'Not found date'}</span></p>
                    {blog.author == localStorage.getItem('user-name') && <button className="delete" onClick={handleClick}>Delete</button>}
                    <button onClick={handleBack}>Back</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;