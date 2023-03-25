import React from "react";
import './styles/App-style/App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/page/Profile/Profile";
import Dialogs from "./components/page/Dialogs/Dialogs";
import News from "./components/page/News/News";
import Settings from "./components/page/Settings/Settings";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebarPage}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs state={props.state.dialogsPage}
                                             addMessage={props.addMessage}
                                             updateNewMessageText={props.updateNewMessageText}

                           />}
                    />

                    <Route path='/profile'
                           element={<Profile profilePage={props.state.profilePage}
                                             addPost={props.addPost}
                                             updateNewPostText={props.updateNewPostText}
                           />}
                    />

                    <Route path='/news'
                           element={<News/>}

                    />

                    <Route path='/settings'
                           element={<Settings/>}

                    />
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
