import React from 'react';
import './footer.style.scss';
import Logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='first'>
                <div className='logo'>
                    <img src={Logo} alt='logo'></img>
                </div>
                <div className='content'>
                    <div className='text'>Newspaper WordPress Theme is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</div>
                    <div className='contact'>Contact us: <a className='link' href=' test@coffee-blog.co'> test@coffee-blog.co</a></div>
                </div>
                <div className='social'>
                    <ul>
                        <li>
                            <a className='fb' href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li>
                            <a className='insta' href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a className='youtube' href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='last'>
                <div className='last-div'>
                    <div className='last-last-div'>© Newspaper WordPress Theme</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;