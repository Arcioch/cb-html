import React from 'react';
import './navBar.style.scss';
import { Link } from 'react-router-dom'
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return (
        <section className="navbar">
            <div className="container">
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-media">
                        <ul>
                            <li>
                                <a className="fb" href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a className="insta" href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                            <li>
                                <a className="yt" href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default NavBar;