import styled from "styled-components";
import imgBg from "../../images/bgHeader.png"

export const HeaderSectionStyled = styled.header`
  width: 100%;
  /* height: 100vh; */
  /* padding: 1rem;  */
  padding-top: 8rem;
  padding-bottom: 8rem;

  background-image: url(${imgBg});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */

  @media (max-width: 768px) {
    background-position: center;
  }

  .gridHeader {
    /* max-width: 1570px; */
    margin: 0 auto;
    width: 100%;
    /* height: 100%; */

    display: grid;
    grid-template-columns: 1fr;
    place-items: center;

    @media (min-width: 1366px) {
      max-width: 1350px;
    }
    
    @media (min-width: 768px) {
      place-items: center;
      align-items: center;
      
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }

    .textContainer {
      padding-left: 4rem;
      
      @media (min-width: 1376px) {
        padding-left: 0rem;
      }

      @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 3rem;
        padding: 0.6rem;
      }

      h1 {
        font-size: 6vw;
        color: #f7f0f0ee;
        letter-spacing: 2px;
        font-weight: 600;
        line-height: 1.1;
        
        @media (min-width: 1370px) {
          font-size: 10rem;
        }
        
        @media (max-width: 768px) {
          font-size: 9rem;
          line-height: 1;
        }

        @media (max-width: 420px) {
          font-size: 8rem;
        }

        .textAnimation {
          text-decoration: underline;
          font-weight: 800;
          background: linear-gradient(to right, #3499FF 20%, #0D50e9 40%, #0D50A9 60%, #3499FF 80%);
          background-size: 200% auto;       
          color: #000;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
          animation: shine 3s linear infinite;
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        }

        .developer {
          font-size: 2rem;
          text-transform: uppercase;
        }
      }
    }

    .img {
      width: 100%;
      height: 100%;

      .ImgEstiven {
        max-width: 100%;
        height: inherit;
      }
    }
  }
`;