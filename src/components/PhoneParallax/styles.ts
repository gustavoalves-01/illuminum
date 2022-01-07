import styled from "styled-components";

export const ParallaxContainer = styled.section`
  background: var(--black-900);
  width: 100%;

  .parallaxContentWrapper {
    max-width: var(--w-desk);
    margin: 0 auto;
    padding: 6.5rem 0;
    color: var(--white-1000);
    display: flex;
    justify-content: right;
    position: relative;

    .parallaxImageWrapper {
      position: absolute;
      max-width: 40%;
      left: 0;
      top: -7%;
      transition: all 0.3s ease-in-out;

      &:hover {
        top: -10%;
      }
    }

    .copyContainer {
      max-width: 58%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-right: 6.25rem;

      h1 {
        font-size: 4rem;
        line-height: 4rem;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 4rem;
        font-weight: 400;
        b {
          font-weight: 700;
        }
      }
    }
  }
`;
