import React from 'react'
import image from '../Images/heroimg.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container hero__container'>
            <ul className='hero__list'>
                <li className='hero__item'>
                    <h1 className='hero__title'>Quality cleaning <br/> for your home</h1>
                    <p className='hero__text'>Condimentum mauris sit cursus amet id non neque pharetra <br />nulla ornare sed facilisis senectus dapibus nibh ultrices eget <br />suscipit aliquet et nulla magna lacus penatibus.  </p>
                    <button className='hero__btn'>Get a free quote</button>
                </li>
                <img className='hero__img' src={image} alt="" />
            </ul>
        </div>
    </div>
  )
}

export default Hero