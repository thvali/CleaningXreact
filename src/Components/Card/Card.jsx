import React from 'react'
import "./Card.css"
import left from '../Images/IMAGE (10).png'
import right from '../Images/IMAGE (11).png'
import rectangle from '../Images/Rectangle.png'

const Card = () => {
  return (
    <div className='card'>
        <div className='container card__container'>
            <div className='card__list'>
                <p className='card__title'>Articles & resources</p>
                <span>
                <button className='card__btn'>Get a free quote</button>
                <button className='card__btn'>Browse articles</button>
                </span>
            </div>
            <div className='card__list'>
                <ul className='card__item'>
                    <img src={left} alt="" />
                    <li className='card__wrapper'>
                        <p className='card__lead-text'>8 best vacuum cleaners to clean any mess for your home in 2022</p>
                        <p className='card__next-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <span className='card_under-wrapper'>
                            <p className='card__date'>Jan 28, 2022</p>
                            <img src={rectangle} alt="" />
                        </span>
                    </li>
                </ul>
                <ul className='card__item'>
                    <img src={right} alt="" />
                    <li className='card__wrapper'>
                        <p className='card__lead-text'>How to properly disinfect your phone and other electronics</p>
                        <p className='card__next-text'>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <span className='card_under-wrapper'>
                            <p className='card__date'>Feb 1, 2022</p>
                            <img src={rectangle} alt="" />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card