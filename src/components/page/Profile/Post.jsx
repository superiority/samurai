import React from 'react';
import Likes from "./Likes";

const Post = (props) => {

    return (
        <div>
            <div>
                <img
                    className='img_post'
                    src="https://sun9-30.userapi.com/s/v1/if2/GT_vFksf4fri0TUDjOccTr10S2YnZL8Eo_EixxGGzPf_Z9ueX49PfYSlNg5N0ZrQBhg4Mtz_nWHc9b4bXRPWq1zL.jpg?size=564x705&quality=96&type=album"
                    alt="post1"
                />
                { props.message }
                <div>
                    <Likes />
                </div>
            </div>
        </div>
    );
};

export default Post;