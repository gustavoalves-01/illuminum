import React from "react";
import { ThemeProvider } from "styled-components";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  children?: React.ReactNode;
}

export function Button({ label, children, theme, ...props }: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer {...props}>
        <span>{label}</span>
        {children}
      </ButtonContainer>
    </ThemeProvider>
  );
}
