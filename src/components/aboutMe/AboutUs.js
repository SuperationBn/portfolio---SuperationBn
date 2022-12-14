import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { SectionAnoutUsStyled } from './AboutUs.styled'
// import imgPuntos from "../../images/ilustraccionPuntos.png"

export default function AboutUs() {
  return (
    <SectionAnoutUsStyled>
      <div className="subTitle">
        <h2>About Me</h2>
      </div>
      <StaticImage src='../../images/ilustraccionPuntos.png' width={150} height={100} className="imgPuntos UPuntos" alt='puntos' />
      <StaticImage src='../../images/ilustraccionPuntos.png' width={350} height={300} className="imgPuntos DOWNuntos" alt='puntos' />
      <article className="gridAbouUs">
        <div className="textDescipcion">
          <p>๐Greetings, let me tell you a little bit about me, I am a guy who likes ๐จโ๐ป <strong>technology</strong> a lot.</p>
          <p>I consider myself a responsible person and aware of how important this is, I enjoy trying new technologies to keep myself learning and improving my knowledge in this beautiful area of programming.</p>
          <p>My favorite hobby is ๐น๏ธ video games, my favorite video games are "The Last Of Us", "Minecraft" and "Horizon".</p>
          <h3>๐จ๏ธ more about me:</h3>
          <ul className="boxAcercaDeMi">
            <li>Country: <span>๐บ๏ธ Dominican Republic.</span></li>
            <li>Age: <span>๐ 20 years old.</span></li>
            <li>Favorite Animal: <span>๐บ Wolf.</span></li>
            <li>Favorite Food: <span>๐ "Pizza".</span></li>
          </ul>
        </div>
        <div className="imgEstiven">
          <StaticImage className='imgEstivenSbn' layout='fullWidth' src='../../images/SuperationEstivenImg.png' />
        </div>
      </article>
    </SectionAnoutUsStyled>
  )
}
