import React from 'react'
import "./About.css"
import img from '../Images/IMAGE (8).png'
import icon from '../Images/IMAGE (9).png'
const About = () => {
  return (
    <div className='about'>
        <div className='container about__container'>
            <ul className='about__list'>
                <img className='about__img' src={img} alt="" />
                <li className='about__item'>
                    <p className='about__upper-text'>COVID-19 SANITIZATION</p>
                    <p className='about__middle-text'>We follow guidelines to keep you safe from the COVID-19 virus</p>
                    <p className='about__down-text'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    <span className='about__wrapper'>
                        <button className='about__btn'>Get a free quote</button>
                        <span className='about__under-wrapper'>
                            <img src={icon} alt="" width={72} height={72} />    
                            <span><p className='about__text'>CALL US NOW</p>
                            <p className='about__phnumber'>(414) 567 - 2109</p>
                            </span>
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default About