import styled from "styled-components";

export const HeroContainer = styled.main`
  display: flex;
  max-width: 1170px;
  margin: 0 auto;
  padding: 5.9rem 0;
  justify-content: space-between;
  height: 100vh;

  .copyContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 58%;
    gap: 3.8rem;
    margin: auto 0;

    h1 {
      font-size: 4rem;
      font-weight: 400;
      line-height: 4rem;
      text-align: center;

      b {
        font-weight: 700;
      }
    }
  }

  .heroImageWrapper {
    max-width: 33%;
    margin: auto 0;
  }

  div:last-child {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    right: 50%;
  }
`;
