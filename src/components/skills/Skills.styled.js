const { default: styled } = require("styled-components");

export const SectionSkillsStyled = styled.section`
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 7rem;

  .flexBoxSkills { 
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    display: flex;

    @media (max-width: 971px) {
      flex-direction: column;
    }

    .textBoxSkills {
      flex: 1 1 30%;

      width: 100%;
      
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 971px) {
        justify-content: center;
        flex-direction: row;
        margin-bottom: 5rem;
      }

      h4 {
        font-size: 9rem;
        /* color: rgb(0, 0, 0, 0.9);
        text-shadow: 0px 0px 2px rgb(250, 250, 250, 0.6); */

        color: rgb(250, 250, 250, 0.9);
        /* background: transparent; */
        text-shadow: 0 0 5px rgb(250, 250, 250, 0.5), 0 0 10px rgb(250, 250, 250, 0.5), 0 0 15px rgb(250, 250, 250, 0.5), 0 0 20px #3499ff, 0 0 30px #3499ff, 0 0 40px #3499ff, 0 0 55px #3499ff, 0 0 75px #3499ff;

        @media (max-width: 971px) {
          letter-spacing: 4px;
        }
      }
      
    }

    .boxTalentosShow {
      flex: 1 1 70%;
      

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      align-content: center;
      place-items: start;
      gap: 4rem;

      @media (max-width: 849px) {
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }

      @media (max-width: 469px) {
        place-items: center;
      }
      
      .skills {
        width: 100%;
        height: fit-content;
        padding: 1rem 3rem;
        border: 0.3rem solid rgb(250, 250, 250, 0.04);
        box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.3);
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 2rem;

        &:hover {
          background-color: #0e2c78;
        }

        h4 {
          font-size: 2.5rem;
          font-weight: 400;
          color: rgb(250, 250, 250, 0.8);
        }
      }
    }
  }
`;