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
                            <li>
                                <Link to='/'>Home</Link>
                                <ul className="drop-down-menu">
                                    <li>
                                        <img src="https://blog.apppi.pl/upload/articles/min/8oZF00emaBdxFQ.jpg" />
                                        <p>Tytuł newsa 1</p>
                                    </li>
                                    <li>
                                        <img src="https://blog.apppi.pl/upload/articles/min/8oZF00emaBdxFQ.jpg" />
                                        <p>Tytuł newsa 2</p>
                                    </li>
                                    <li>
                                        <img src="https://blog.apppi.pl/upload/articles/min/8oZF00emaBdxFQ.jpg" />
                                        <p>Tytuł newsa 3</p>
                                    </li>
                                    <li>
                                        <img src="https://blog.apppi.pl/upload/articles/min/8oZF00emaBdxFQ.jpg" />
                                        <p>Tytuł newsa 4</p>
                                    </li>
                                </ul>
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