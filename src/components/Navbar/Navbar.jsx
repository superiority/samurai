import React from 'react';
import "../../styles/Navbar-style/Navbar.css";
import {Link} from "react-router-dom";
import {Router} from "react-router";


const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <Link className="link" to='/profile'>Профиль</Link>
            </div>
            <div>
                <Link className="link" to='/news'>Новости</Link>
            </div>
            <div>
                <Link className="link" to='/dialogs'>Сообщения</Link>
            </div>
            <div>
                <Link className="link" to='/settings'>Настройки</Link>
            </div>
        </nav>
    );
};

export default Navbar;