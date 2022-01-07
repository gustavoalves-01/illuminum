import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 0.8rem 2.8rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.primaryColor};
  box-shadow: 7px 7px ${(props) => props.theme.primaryColor};
  gap: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  span {
    font-family: "Red Hat Text", sans-serif;
    color: ${(props) => props.theme.primaryColor};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:before {
    content: "";
    background: ${(props) => props.theme.primaryColor};
    position: absolute;
    width: 0%;
    top: 0;
    left: 0;
    height: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 0;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px ${(props) => props.theme.primaryColor};

    span {
      color: ${(props) => props.theme.secondaryColor};
    }
    &:before {
      width: 100%;
    }
  }
`;
