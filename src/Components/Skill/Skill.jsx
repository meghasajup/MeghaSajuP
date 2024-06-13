import React from 'react'
import './skill.css';
import UIDesign from '../../assests/ux-design.png';
import WebDesign from '../../assests/web-design.png';
import Development from '../../assests/development.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do </span>
            <span className='skillDesc'>Proficient in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I possess comprehensive expertise in developing robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I am adept at building seamless user experiences while ensuring efficient server-side functionality.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UI Design' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>Creating user-friendly digital experiences with a focus on aesthetics and functionality.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} alt='Web Design' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Front-end Developer</h2>
                        <p>Crafting visually appealing websites for optimal user engagement.<br/>
                        My front-end skills include HTML, CSS, Bootstrap, JavaScript, React, C and C++.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={Development} alt='Development' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Back-end Developer</h2>
                        <p>Developing scalable back-end systems for seamless application functionality.<br/>
                        My backend skills include Node.js, Express.js, MongoDB, database management, Git.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills