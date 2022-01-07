import React from "react";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="#">
        Illuminum<b>PRO</b>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
