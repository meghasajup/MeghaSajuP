import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnimg from '../../assests/bag.png';
import bg from '../../assests/Ammu.jpg'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introcontent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm<span className='introName'> Megha Saju P</span> <br /> MERN Stack Developer</span>
        <p className='introPara'>I am a highly motivated web developer seeking an opportunity to leverage my <br /> technical skills and  discipline to contribute to a dynamic team and make a <br /> positive impact.</p>
        <Link><button className='btn'><img src={btnimg} alt='Hire ME' className='cartbag' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile-pic" className='bg' />
    </section>
  )
}

export default Intro;