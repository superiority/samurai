import React from 'react';
import "../../styles/Footer-style/Footer.css";
import TelegramIcon from '@mui/icons-material/Telegram';



const Footer = () => {
    return (
        <footer className="footer">
            <h3>
                Связаться со мной
            </h3>
            <a target='_blank' href="https://web.telegram.org/k/#@Oold_it">
                <TelegramIcon className='TelegramIcon' />
            </a>

        </footer>
    );
};

export default Footer;