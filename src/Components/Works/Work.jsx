import React from 'react'
import './work.css';
import coffee from '../../assests/coffee.jpg'
import clocks from '../../assests/clocks.jpg'
import ecom from '../../assests/ecom.jpg'
import xiamoi from '../../assests/Xiaomi.jpg'

const Work = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>Bringing creativity and precision to every frame—your source for professional Web development.</span>
      <div className='worksImgs'>
        <a href="https://meghasajup.github.io/cafena_coffe-shop/"><img src={coffee} alt='' className='worksImg' /></a>
        <a href="https://meghasajup.github.io/clocks/"><img src={clocks} alt='' className='worksImg' /></a>
        <a href="https://ecom-gamma-three.vercel.app/"><img src={ecom} alt='' className='worksImg' /></a>
        <a href="https://meghasajup.github.io/mi/"><img src={xiamoi} alt='' className='worksImg' /></a>
      </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work