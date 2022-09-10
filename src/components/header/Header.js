import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HeaderSectionStyled } from './Header.styed'

export default function Header() {

  return (
    <HeaderSectionStyled>
      <article className='gridHeader'>
        <div className="textContainer">
          <h1>Hi, my name is <span className='textAnimation'>Estiven</span> I am a <span className='textAnimation'>Font End</span> <span className="developer">developer.</span></h1>
        </div>
        <figure className='img'>
          {/* <StaticImage loading='lazy' src='../../images/SuperationEstivenImg.png' layout='constrained' alt='SuperationBn, Estiven, Font End' /> */}
          <StaticImage layout='fullWidth' loading='lazy' src='../../images/personajeModelo3d.png' alt='SuperationBn, Estiven, Font End' />
        </figure>
      </article>
    </HeaderSectionStyled>
  )
}


