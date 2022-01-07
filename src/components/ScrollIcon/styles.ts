import styled from "styled-components";

export const ScrollContainer = styled.div`
  .MouseContainer {
    border: 2px solid var(--black-900);
    height: 3.125rem;
    width: 1.875rem;
    opacity: 0.4;
    position: relative;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    .scrollWheel {
      width: 1.25rem;
      height: 1.25rem;
      background: var(--black-900);
      margin: 0.15rem auto;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      opacity: 0.6;
      animation: scroll 1.5s infinite;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }

    @keyframes scroll {
      0% {
        top: 0%;
        opacity: 0;
      }
      90% {
        opacity: 1;
      }
      100% {
        top: calc(100% - 1.6rem);
      }
    }
  }
`;
