import React from 'react'
import '../../../styles/Profile-style/Profile-ava.css'

const ProfileAva = (props) => {
    return (
        <div>
            <div className="content">
                <img className="image-profile"
                     src="https://sun9-87.userapi.com/s/v1/if2/5R3TeYShkEwQ1fkBMt3F13I2E702Qc8GosJqEhThGoQE9Y0kmiYS4FLHkqECmN04jquqsC-V9Tsn3Ru8IrZhV4Y6.jpg?size=1280x212&quality=95&type=album"
                     alt="img"/>
            </div>
            <div>
                <img className="image-profile2"
                     src="https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg"
                     alt="img"/>
            </div>
        </div>
    );
};

export default ProfileAva;