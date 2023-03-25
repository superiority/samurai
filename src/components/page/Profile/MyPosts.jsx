import React from 'react';
import '../../../styles/Profile-style/Posts.css';
import Post from "./Post";
import {dialogActionsClasses} from "@mui/material";

const MyPosts = (props) => {


    let postsElement =
        props.posts.map((p) => <Post message={p.message} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    const btnEl = document.querySelector('.button__post')

    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
            props.addPost();
        }
    })

    return (
        <div>
            <h1>
                Мои посты
            </h1>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText} />
            </div>
            <div>
                <button className='button__post' onClick={addPost}>Создать пост</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;