import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.scss';

const Navbar = () => {
    return (<ul className="navigation">
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/news-list">Lista Newsow</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
    </ul>);
}

export default Navbar;