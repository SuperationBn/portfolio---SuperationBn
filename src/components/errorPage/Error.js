import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HeaderSectionStyled } from '../header/Header.styed'

export default function ErrorPageShow() {
  return (
    <HeaderSectionStyled>
      <article className='gridHeader'>
        <div className="textContainer">
          <h1>sorry, this <span className='textAnimation'>address</span> couldn't be found.</h1>
          <Link className='btnGoBack' to='/'><i class="fa-solid fa-left-long"></i> go to home</Link>
        </div>
        <figure className='img'>
          {/* <StaticImage loading='lazy' src='../../images/SuperationEstivenImg.png' layout='constrained' alt='SuperationBn, Estiven, Font End' /> */}
          <StaticImage layout='fullWidth' loading='lazy' src='../../images/personajeModelo3d.png' alt='SuperationBn, Estiven, Font End' />
        </figure>
      </article>
    </HeaderSectionStyled>
  )
}
