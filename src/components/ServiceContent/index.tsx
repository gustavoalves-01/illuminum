import React, { ReactNode } from "react";
import Image from "next/image";
import { ServicesContentContainer } from "./styles";

interface ServiceContentProps {
  title: string;
  imageUrl: StaticImageData;
  children: ReactNode;
}

export function ServicesContent({
  title,
  imageUrl,
  children,
}: ServiceContentProps) {
  return (
    <ServicesContentContainer>
      <Image src={imageUrl} alt={title} />
      <h2>{title}</h2>
      {children}
    </ServicesContentContainer>
  );
}
