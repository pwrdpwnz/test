import React from 'react';
import Navbar from "./navbar/Navbar";
import styles from './header.module.scss'
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <Link to="/" className="header__logo">
                    <img className="logo__image" src={logo} alt="logo"/>
                </Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;