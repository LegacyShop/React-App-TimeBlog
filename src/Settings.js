import { useState } from "react";

const Settings = () => {
    const [title, setTitle] = useState(localStorage.getItem('user-name'));
    const [author, setAuthor] = useState(localStorage.getItem('user-name'));
    const changeInfo = (data) => {
        localStorage.setItem('user-name', data);
    }

    return (
        

        <div className="create">
        <h2>Settings</h2>
        <label>Username:</label>
        <input 
                type="text"
                required
                value={title}
                maxLength={16}
                onChange={(e) => (setTitle(e.target.value), changeInfo(e.target.value))}
                    />
        </div>
    );
}
 
export default Settings;