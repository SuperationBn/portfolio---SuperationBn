const { default: styled } = require("styled-components");

export const SectionAnoutUsStyled = styled.section`
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 10rem;

  .imgPuntos {
    position: absolute;
  }

  .UPuntos {
    top: 60px;
    right: 100px;
    opacity: 0.5;

    @media (max-width: 823px) {
      top: 80px;
      right: 10px;
    }

    @media (max-width: 431px) {
      top: 150px;
      right: 10px;
    }
  }

  .DOWNuntos {
    left: 40px;
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
    }
  }

  .gridAbouUs {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 823px) {
      grid-template-columns: 1fr;
      gap: 8rem;
    }

    .textDescipcion {
      grid-column: span 1;

      
      p {
        font-size: 2.7rem;
        letter-spacing: 1px;
        color: rgb(255, 255, 255, 0.7);
        
        &:not(:last-child) {
          margin-bottom: 3rem;
        }
      }

      h3 {
          font-size: 2.8rem;
          color: rgb(255, 255, 255, 0.9);
          font-weight: 600;
          text-transform: uppercase;
        }

      .boxAcercaDeMi {
        margin-top: 2.5rem;
        width: 100%;
        
        li {
          font-size: 2.2rem;
          color: rgb(255, 255, 255, 0.7);
          font-weight: 600;
          letter-spacing: 2px;
          list-style: circle;
          list-style-image: -moz-linear-gradient(#00b3ff, #3499ff);
          list-style-position: inside;

          &:not(:last-child) {
            margin-bottom: 1.5rem;
          }
          
          span {
            font-size: 2rem;
            letter-spacing: 2px;
            color: rgb(255, 255, 255, 0.7);
            font-weight: 400;
          }
        }
      }
    }

    .imgEstiven {
      grid-column: span 1;
    }
  }
`;