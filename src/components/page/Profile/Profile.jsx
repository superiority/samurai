import React from 'react';
import "../../../styles/Profile-style/Profile.css";
import MyPosts from "./MyPosts";
import ProfileAva from "./ProfileAva";

const Profile = (props) => {

    return (
        <div>
            <ProfileAva />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;