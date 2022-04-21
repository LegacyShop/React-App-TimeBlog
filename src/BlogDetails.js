import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [load, setLoad] = useState(false);
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
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
            const response = await fetch('http://localhost:8000/blogs/' + blog.id, {
              method: 'PUT',
              body: JSON.stringify(blog),
              headers: {
              "Content-type": "application/json; charset=UTF-8"
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
            const response = await fetch('http://localhost:8000/blogs/' + blog.id, {
              method: 'PUT',
              body: JSON.stringify(blog),
              headers: {
              "Content-type": "application/json; charset=UTF-8"
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