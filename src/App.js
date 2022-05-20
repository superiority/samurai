import React from "react";
import './styles/App-style/App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/page/Dialogs/Dialogs";
import News from "./components/page/News/News";
import Settings from "./components/page/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs'>
                            <Dialogs/>
                        </Route>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                        <Route path='/news'>
                            <News/>
                        </Route>
                        <Route path='/settings'>
                            <Settings/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
