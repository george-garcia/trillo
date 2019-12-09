import React from 'react';
import logo from '../img/logo.png';
import svg from '../img/sprite.svg';
import avatar from '../img/user.jpg';

const Header = () => {

    return (
        <div className="container">
            <header className="header">
                <img src={logo} alt="trillo logo" className="logo"/>

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref={`${svg}#icon-bookmark`}></use>
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref={`${svg}#icon-chat`}></use>
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>

                    <div className="user-nav__user">
                        <img src={avatar} alt="" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            </header>


            <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item side-nav__item--active">
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref={`${svg}#icon-home`}></use>
                                </svg>
                                <span>Hotel</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref={`${svg}#icon-aircraft-take-off`}></use>
                                </svg>
                                <span>Flight</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref={`${svg}#icon-key`}></use>
                                </svg>
                                <span>Car rental</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <svg className="side-nav__icon">
                                    <use xlinkHref={`${svg}#icon-map`}></use>
                                </svg>
                                <span>Tours</span>
                            </a>
                        </li>
                    </ul>

                    <div className="legal">
                        &copy; 2019 by trillo. All rights reserved.
                    </div>

                </nav>
                <main className="hotel-view">
                    Hotel view
                </main>
            </div>
        </div>
    );

};

export default Header;