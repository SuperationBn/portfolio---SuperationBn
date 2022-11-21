import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { SectionSkillsStyled } from './Skills.styled'

export default function Skills() {
  return (
    <SectionSkillsStyled>
      <article className="flexBoxSkills">
        <div className="textBoxSkills">
          <h4>S</h4>
          <h4>K</h4>
          <h4>I</h4>
          <h4>L</h4>
          <h4>L</h4>
          <h4>S</h4>
        </div>
        <div className="boxTalentosShow">
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/html-5-240.png' alt="html" />
            <h4>HTML</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/css3-240.png' alt="css" />
            <h4>CSS</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/javascript-240.png' alt="javascript" />
            <h4>JAVASCRIPT</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/react-240.png' alt="react" />
            <h4>REACT</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/next.js-240.png' alt="next.js" />
            <h4>NEXT.JS</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/gatsbyjs-240.png' alt="gatsby" />
            <h4>GATSBY</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/graphql-240.png' alt="graphql" />
            <h4>GRAPHQL</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/git-240.png' alt="git" />
            <h4>GIT</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/figma-240.png' alt="figma" />
            <h4>FIGMA</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/tailwind-css-240.png' alt="tailwind" />
            <h4>TAILWIND</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/sass-avatar-240.png' alt='sass' />
            <h4>SASS</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} height={50} src='../../images/iconsTexnologias/styled-components.png' alt="styled-components" />
            <h4>STYLED-COMPONENTS</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/bootstrap-240.png' alt="boostrap" />
            <h4>BOOTSTRAP</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/webflow-240.png' alt="webflo" />
            <h4>WEBFLOW</h4>
          </div>
          <div className="skills">
            <StaticImage layout="fixed" width={50} src='../../images/iconsTexnologias/adobe-xd-240(.png' alt="abone xd" />
            <h4>ADOBE XD</h4>
          </div>
        </div>
      </article>
    </SectionSkillsStyled>
  )
}
