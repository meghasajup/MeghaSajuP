import React, { useRef } from 'react'
import './contact.css';
import schnder from '../../assests/schneider.png';
import times from '../../assests/amphenol.png';
import nxs from '../../assests/nexus.png';
import instagram from '../../assests/instagram.png'
import whatsapp from '../../assests/whatsapp.png'
import linkedin from '../../assests/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email send')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    return (
      <section id='contactPage'>
        <div id='clients'>
          <h1 className='contactPageTitle'>Experience</h1>
          <div className='clientImgs'>
            <img src={schnder} alt='schneider' className='clientImg1' />
            <img src={times} alt='amphenol' className='clientImg2' />
            <img src={nxs} alt='nexus' className='clientImg3' />
          </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm' reh={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' />
            <input type='email' className='email' placeholder='Your Email' />
            <textarea className='msg' name='message' rows="5" placeholder='Message here....'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={instagram} alt='instagram' className='link' />
              <img src={whatsapp} alt='whatsapp' className='link' />
              <img src={linkedin} alt='linkedin' className='link' />
            </div>
          </form>
        </div>
      </section>
    )
  }

  export default Contact