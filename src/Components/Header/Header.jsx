import React from 'react'
import Logo from '../Images/logo.png'
import Burger from '../Images/burger.png'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='container header__container'>
            <ul className='header__list'>
                <a href="#">
                  <img className='header__logo' src={Logo} alt="" />
                </a>
                <li className='header__item'>
                    <a className='header__link' href="#">Home</a>
                    <a className='header__link' href="#">About</a>
                    <a className='header__link' href="#">Services</a>
                    <a className='header__link' href="#">Articles</a>
                    <a className='header__link' href="#">Contact</a>
                </li>
                <button className='header__btn'>Get a free quote</button>
                <img className='header__burger' src={Burger} alt="" />
            </ul>
        </div>
    </div>
  )
}

export default Header