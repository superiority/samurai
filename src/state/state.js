import maksPhoto from '../img/maks.jpg';
import antonPhoto from '../img/anton.jpg';
import nataliaPhoto from '../img/natalia.jpg';
import noNamePhoto from '../img/noName.jpg';
import pavelPhoto from '../img/pavel.jpg';

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: '1', message: "Hi!"}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {id: '1', name: 'No Name', img: noNamePhoto},
                {id: '2', name: 'Антон', img: antonPhoto},
                {id: '3', name: 'Hr Natalia', img: nataliaPhoto},
                {id: '4', name: 'Maks', img: maksPhoto},
                {id: '5', name: 'Павел Дуров', img: pavelPhoto}
            ],
            messagesData: [
                {message: 'Hello, bro'}
            ],
            newMessagesText: ''
        },

        sidebarPage: {
            friends: [
                {id: '1', name: 'Павел', img: pavelPhoto},
                {id: '2', name: 'Антон', img: antonPhoto},
                {id: '3', name: 'Maks', img: maksPhoto}
            ]
        }

    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('caca');},

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {

        let newMessage = {
            message: this._state.dialogsPage.newMessagesText
        };

        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessagesText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessageText (newMessage) {
        this._state.dialogsPage.newMessagesText = newMessage;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;
