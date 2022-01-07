import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-1000: #000000;
    --black-900: #101820;
    --gray-600: #7C8B99;
    --gray-500: #b7c0c8;
    --white-1000: #ffffff;

    --w-desk: 1170px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body,
input,
textarea,
select,
button {
  font: 400 1rem "Red Hat Text", sans-serif;
  color: var(--black-900);
}
`;
