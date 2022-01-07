import React from "react";
import { ServicesContent } from "../ServiceContent";
import { ServicesSectionContainer } from "./styles";

import teste from "../../assets/images/parallax-phone.png";

export function ServicesSection() {
  return (
    <ServicesSectionContainer>
      <h1>O que fazemos?</h1>
      <ServicesContent imageUrl={teste} title="Landing Pages">
        <p>
          Todo produto precisa de uma vitrine para ser vendido. As Páginas de
          Lançamento existem para tornar a exposição de um produto ou negócio,
          algo escalável, sem fronteiras e otimizado na busca por potencializar
          ao máximo as vendas do mesmo.
        </p>
      </ServicesContent>
    </ServicesSectionContainer>
  );
}
