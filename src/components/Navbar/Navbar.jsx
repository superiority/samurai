import React from 'react';
import "../../styles/Navbar-style/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a className="link" href="#">Профиль</a>
            </div>
            <div>
                <a className="link" href="#">Сообщения</a>
            </div>
            <div>
                <a className="link" href="#">Новости</a>
            </div>
            <div>
                <a className="link" href="#">Настройки</a>
            </div>
        </nav>
    );
};

export default Navbar;