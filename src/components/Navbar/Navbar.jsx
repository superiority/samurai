import React from 'react';
import "../../styles/Navbar-style/Navbar.css";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

const FriendsItem = (props) => {
    let path = "/friends/" + props.id;

    return (
        <div>
            <Link className='link__friends' to={path}>{props.name}
                <div className="link__friends-img">
                    <img className='friends-img' src={props.img} alt="img"/>
                </div>
            </Link>
        </div>
    )
}

const Navbar = (props) => {

    let friendsElements =
        props.state.friends.map((friends) => <FriendsItem name={friends.name} id={friends.id} img={friends.img}/>)

    return (
        <nav className="nav">
            <div>
                <Link className="link" to='/profile'>
                    <AccountCircleIcon />Профиль
                </Link>
            </div>
            <div>
                <Link className="link" to='/news'>
                    <NewspaperIcon /> Новости</Link>
            </div>
            <div>
                <Link className="link" to='/dialogs'>
                    <MessageIcon /> Сообщения</Link>
            </div>
            <div>
                <Link className="link" to='/settings'>
                    <SettingsIcon /> Настройки</Link>
            </div>
            <div className='friends-elements'>
                {friendsElements}
            </div>
        </nav>
    );
};

export default Navbar;