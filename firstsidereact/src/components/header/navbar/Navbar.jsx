import React from 'react';
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="" className={styles.menu__link}>Домой</a>
                </li>
                <li className="menu__item">
                    <a href="" className={styles.menu__link}>Особенности</a>
                </li>
                <li className="menu__item">
                    <a href="" className={styles.menu__link}>Преимущества </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;