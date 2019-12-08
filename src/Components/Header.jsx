import React from 'react';
import logo from '../img/logo.png';
import svg from '../img/sprite.svg';

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
            </header>
            <div className="content">
                <nav className="sidebar">
                    Navigation
                </nav>
                <main className="hotel-view">
                    Hotel view
                </main>
            </div>
        </div>
    );

};

export default Header;