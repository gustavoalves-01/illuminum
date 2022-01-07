import React from "react";
import Image from "next/image";

import { Button } from "../Button";
import { ScrollIcon } from "../ScrollIcon";

import { HeroContainer } from "./styles";

import heroDesktopImg from "../../assets/images/hero-desktop.png";
import { darkTheme, lightTheme } from "../../styles/themes";

export function Hero() {
  return (
    <HeroContainer>
      <div className="copyContainer">
        <h1>
          Seu <b>negócio</b> merece um site de <b>destaque.</b>
        </h1>
        <Button label="Começar agora" theme={darkTheme} />
      </div>
      <div className="heroImageWrapper">
        <Image src={heroDesktopImg} alt="Desktop" />
      </div>
      <ScrollIcon />
    </HeroContainer>
  );
}
