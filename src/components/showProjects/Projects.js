import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { SectionPorjectsStyled } from './Projects.styled'

export default function Projects() {

  const data = useStaticQuery(graphql`
    query DataProjects {
      results: allMarkdownRemark {
        nodes {
          frontmatter {
            description
            github
            technologies
            title
            url
            img {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <SectionPorjectsStyled>
      <div className="subTitle">
        <h2>projects</h2>
      </div>
      <StaticImage src='../../images/ilustraccionPuntos.png' width={150} height={100} className="imgPuntos UPuntos" alt='puntos' />
      <StaticImage src='../../images/ilustraccionPuntos.png' width={350} height={300} className="imgPuntos DOWNuntos" alt='puntos' />
      <article className='gridProyectos'>
        {data.results.nodes.length > 0 && data.results.nodes.map((datos, idx) => {
          return (
            <div className='cardProject' key={idx}>
              <div className="imgCard">
                <GatsbyImage
                  className='imgCardSrc'
                  image={getImage(datos.frontmatter.img.childImageSharp)}
                  alt={datos.frontmatter.title}
                />
              </div>
              <div className="textCardProjects">
                <h3>{datos.frontmatter.title}</h3>
                <h4>software used: <span>{datos.frontmatter.technologies}</span></h4>
                <p>{datos.frontmatter.description}</p>
              </div>
              <div className="btnProjects">
                <a href={datos.frontmatter.github} target="_blank" ><i className="fa-brands fa-github" rel="noreferrer"></i> GitHub</a>
                <a href={datos.frontmatter.url} target="_blank" ><i className="fa-solid fa-up-right-from-square" rel="noreferrer"></i> View Demo</a>
              </div>
            </div>
          )
        })}
      </article>
    </SectionPorjectsStyled>
  )
}
