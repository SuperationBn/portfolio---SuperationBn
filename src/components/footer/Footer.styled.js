import styled from "styled-components";

export const SectionFooterStyled = styled.footer`
  padding-top: 6rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: black;

  article {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    .textFooterUp {
      width: 100%;
      text-align: center;
      margin-bottom: 5rem;

      h3 {
        font-size: 3rem;
        text-transform: uppercase;
        color: rgb(255, 255, 255, 0.6);
      }
    }

    .enlacesFooter {
      display: flex;
      justify-content: center;
      gap: 4rem;
      margin-bottom: 7rem;

      @media (max-width: 285px) {
        align-items: center;
        flex-direction: column-reverse;
      }


      a {
        position: relative;
        top: 0px;
        font-size: 4rem;
        color: rgb(255, 255, 255, 0.3);
        
        &:hover {
          top: -6px;
          /* color: #6ed3ff; */
          color: rgb(255, 255, 255, 0.8);
        }
      }
    }

    .textFooterDown {
      width: 100%;
      text-align: center;

      span {
        font-size: 1.3rem;
        color: rgb(255, 255, 255, 0.25);
      }
    }
  }
`;