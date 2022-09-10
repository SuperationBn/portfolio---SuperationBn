import React from 'react'
import { SectionFooterStyled } from './Footer.styled'

export default function Footer() {
  return (
    <SectionFooterStyled>
      <article>
        <div className="textFooterUp">
          <h3>if you would like to contact me, you can find me at:</h3>
        </div>
        <div className='enlacesFooter'>
          <a href="https://www.facebook.com/xSuperationbnx/" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/superationbn/" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://mobile.twitter.com/SuperationBn" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://do.linkedin.com/in/superationbn?trk=profile-badge" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCaJfBRNf09phqvio0mCOZYg/featured" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="textFooterDown">
          <span>Copyright © 2022 - 2023. All Rights Reserved / SuperationBn</span>
        </div>
      </article>
    </SectionFooterStyled>
  )
}
