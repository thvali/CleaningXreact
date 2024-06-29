import React from 'react'
import "./Section.css"
import img1 from '../Images/sectionimg1.png';
import img2 from '../Images/sectionimg2.png';
import img3 from '../Images/sectionimg3.png';

const Section = () => {
  return (
    <div className='section'>
        <div className='container section__container'>
            <h2 className='section__title'>About Us</h2>
            <p className='section__text'>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br />neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            <ul className='section__list'>
                <li className='section__item'>
                    <img className='section__img' src={img1} alt="" />
                    <p className='section__lead-text'>
                    1. Schedule online
                    </p>
                    <p className='section__next-text'>Sagittis nibh scelerisque vitae egetolment <br />  vulputate sem elementum sed n.</p>
                </li>
                <li className='section__item'>
                    <img className='section__img' src={img2} alt="" />
                    <p className='section__lead-text'>
                    2. Pay online easily
                    </p>
                    <p className='section__next-text'>Vitae ut accumsan blandit ullamcorperolm <br />suscipit dui gravida amet at nunc.</p>
                </li>
                <li className='section__item'>
                    <img className='section__img' src={img3} alt="" />
                    <p className='section__lead-text'>
                    3. Get your house cleaned
                    </p>
                    <p className='section__next-text'>Nunc maecenas sollicitudin metus tellus <br />mattis sed porttitor cursus eleifend.</p>
                </li>
            </ul>
            <button className='section__btn'>Get a free quote</button>
            <button className='section__btn'>Explore services</button>
        </div>
    </div>
  )
}

export default Section