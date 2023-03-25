import store from './state/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (_state) => {

    root.render(

        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);