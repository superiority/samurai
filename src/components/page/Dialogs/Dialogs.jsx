import React from 'react';
import '../../../styles/Dialogs-style/Dialogs.css';
import {Link} from "react-router-dom";
import Post from "../Profile/Post";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className='link__dialogs'>
            <Link className="link__dialogs-name" to={path}>{props.name}
                <div className='link__dialogs-img'>
                    <img className='profile-img' src={props.img} alt="img"/>
                </div>
            </Link>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id} img={dialogs.img}/>)

    let messagesElements =
        props.state.messagesData.map(messages => <Message message={messages.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };


    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                {messagesElements}
                <div className='text'>
                    <div>
                        <textarea onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={props.newMessagesText}/>
                    </div>
                    <div>
                        <button className='button__message' onClick={addMessage}>Добавить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;