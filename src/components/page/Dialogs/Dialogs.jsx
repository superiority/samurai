import React from 'react';
import '../../../styles/Dialogs-style/Dialogs.css';

const Dialogs = () => {
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                <div className='dialog'>
                    Саня
                </div>
                <div className='dialog'>
                    Валера
                </div>
                <div className='dialog'>
                    No name
                </div>
                <div className='dialog'>
                    No name
                </div>
                <div className='dialog'>
                    No name
                </div>
            </div>
            <div className='messages'>
                <div className='message'>
                    Hi
                </div>
                <div className='message'>
                    Hi, how are you?
                </div>
                <div className='message'>
                    Дарова ежжи
                </div>
            </div>
        </div>
    );
};

export default Dialogs;