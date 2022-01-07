import React, { useEffect } from "react";
import { Button } from "../Button";
import { ParallaxContainer } from "./styles";
import { lightTheme } from "../../styles/themes";
import Image from "next/image";

import PhoneParallaxImg from "../../assets/images/parallax-phone.png";

export function PhoneParallax() {
  return (
    <ParallaxContainer>
      <div className="parallaxContentWrapper">
        <div className="parallaxImageWrapper">
          <Image src={PhoneParallaxImg} alt="Phone" />
        </div>
        <div className="copyContainer">
          <h1>Desenvolvimento Responsivo</h1>
          <p>
            Ajustado para <b>preservar</b> todos os <b>detalhes</b> em qualquer
            <b> plataforma</b>.
          </p>
          <Button label="Conhecer Produtos" theme={lightTheme} />
        </div>
      </div>
    </ParallaxContainer>
  );
}
