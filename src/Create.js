import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        try {
        e.preventDefault();

        let d = new Date();

        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        let dateFormated = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}, at ${d.getHours()}:${d.getMinutes()}`

        const blog = { title, body, author: localStorage.getItem('user-name'), date: dateFormated, dateRaw: new Date(), vouches: {like: 0, dislike: 0}, views: 0};

        setIsPending(true);

        if(blog.body.length > 2000) {
            history.push('/Time-blog/create');
            throw new Error('Your body is too long!');
        }
        
        fetch('https://my-json-server.typicode.com/xTimeStudio/Time-blog/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json", "X-Master-Key": "$2b$10$6tCw6s1DXgg86J.Vpu2HOeJnEE93iHNj5NUAXtr0vL3sKLwoFOidW"},

            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push(`/Time-blog`);
        })
    }
    catch (err){
        

        alert(`Something going on... ` + err);
        
    }
    }



    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                type="text"
                required
                value={title}
                maxLength={32}
                onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Blog body: </label>
                <textarea 
                required
                value={body}
                maxLength={2000}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;