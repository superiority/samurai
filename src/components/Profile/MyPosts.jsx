import React from 'react';
import '../../styles/Profile-style/Posts.css';
import Post from "./Post";
import Likes from "./Likes";

const MyPosts = (props) => {
    return (
        <div>
            <h1>
                Мои посты
            </h1>
            <div>
                <textarea className='text_posts'>

                </textarea>
                <button>Создать пост</button>
            </div>
            <Post />
        </div>
    );
};

export default MyPosts;