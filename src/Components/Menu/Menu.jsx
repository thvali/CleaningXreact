import React from 'react'
import img1 from '../Images/menu1.png';
import img2 from '../Images/menu2.png';
import img3 from '../Images/menu3.png';
import "./Menu.css"
const Menu = () => {
  return (
    <div className='menu'>
        <div className='container menu__container'>
            <ul className='menu__list'>
                <h2 className='menu__title'>Our Services</h2>
                <button className='menu__btn'>Explore services</button>
            </ul>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <img src={img1} alt="" width={220} height={190} />
                    <p className='menu__lead-text'>House cleaning</p>
                    <p className='menu__text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </li>
                <li className='menu__item'>
                    <img src={img2} alt="" width={220} height={224} />
                    <p className='menu__lead-text'>Office cleaning</p>
                    <p className='menu__text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </li>
                <li className='menu__item'>
                    <img src={img3} alt="" width={250} height={200} />
                    <p className='menu__lead-text'>Industrial cleaning</p>
                    <p className='menu__text'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu