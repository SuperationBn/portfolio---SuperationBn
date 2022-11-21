import styled from "styled-components";

export const SectionPorjectsStyled = styled.section`
  position: relative;
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 7rem;

  .imgPuntos {
    position: absolute;
  }

  .UPuntos {
    top: 80px;
    left: 100px;
    opacity: 0.5;

    @media (max-width: 876px) {
      top: 120px;
      left: 10px;
    }

    @media (max-width: 431px) {
      top: 150px;
      left: 10px;
    }
  }

  .DOWNuntos {
    right: 40px;
    bottom: -20px;
    z-index: -100;
    opacity: 0.1;
  }

  .subTitle {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0rem 0.8rem 9rem 0.8rem;
    text-align: center;

    h2 {
      font-size: 8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgb(255, 255, 255, 0.8);
      z-index: 100;

      @media (max-width:390px) {
        font-size:6rem;
      }
    }
  }

  .gridProyectos {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    gap: 4rem;

    @media (max-width: 366px) {
      grid-template-columns: 1fr;
    }

    .cardProject {
      padding: 0.3rem;
      width: 100%;
      border: 0.2px solid rgb(255, 255, 255, 0.2);
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 6px;
      box-shadow: 0px 3px 8px rgb(0, 0, 0, 0.4);

      .imgCard {
        width: 100%;

        .imgCardSrc {
          width: 100%;
          border-radius: 6px;

        }
      }

      .textCardProjects {
        padding: 2rem 0.5rem;
        text-align: center;

        h3 {
          margin-bottom: 1.5rem;
          font-size: 3.5rem;
          font-weight: 600;
          color: rgb(255, 255, 255, 0.8);

          @media (max-width: 768px) {
            font-size: 4rem;
          }
        }
        
        h4 {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: rgb(255, 255, 255, 0.5);

          @media (max-width: 768px) {
            font-size: 2rem;
          }
          
          span {
            display: block;
            font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: 1.4px;
            color: #1aaae8;

            @media (max-width: 768px) {
            font-size: 1.7rem;
          }
          }
        }

        p {
          margin: 2.6rem 0rem;
          font-size: 1.6rem;
          color: rgb(255, 255, 255, 0.65);

          @media (max-width: 768px) {
            font-size: 2.2rem;
          }
        }
      }

      .btnProjects {
        margin-bottom: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3rem;

        a {
          position: relative;
          font-size: 2rem;
          padding: 0.3rem 1rem;
          color: rgb(255, 255, 255, 0.55);

          i {
            color: rgb(255, 255, 255, 0.35);
          }

          &::after {
            content: '.';
            position: absolute;
            top: -26px;
            right: 0px;
            font-size: 4rem;
            color: #32821eb6;
          }
          
          &:hover {
            /* color: #278fd9; */
            color: #1aaae8;

            i {
              color: rgb(255, 255, 255, 0.75);
            }
          }
          
          &:hover::after {
            color: #48bd2b;
            transition: 0.4s;
          }
        }
      }
    }
  }
`;