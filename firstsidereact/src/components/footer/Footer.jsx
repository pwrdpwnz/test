import React from 'react';
import facebook from '../../images/social=facebook.png'
import twitter from '../../images/social=twitter.png'
import instagram from '../../images/social=instagram.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__text">2000-2022 © System</div>
                <nav className="footer__menu menu">
                    <ul className="menu__list footer-menu">
                        <li className="menu__item footer-item">
                            <a href="" className="menu__link footer-link">
                                <img className="footer__image" src={facebook} alt=""/>
                            </a>
                        </li>
                        <li className="menu__item footer-item">
                            <a href="" className="menu__link footer-link">
                                <img className="footer__image" src={twitter} alt=""/>
                            </a>
                        </li>
                        <li className="menu__item footer-item">
                            <a href="" className="menu__link footer-link">
                                <img className="footer__image" src={instagram} alt=""/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;