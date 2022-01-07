import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 1rem 3rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  > a {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--gray-500);
    justify-self: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--gray-600);
      cursor: pointer;
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
      li {
        a {
          text-decoration: none;
          color: var(--gray-500);
          font-size: 1rem;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: var(--gray-600);
          }
        }
      }
    }
  }
`;
