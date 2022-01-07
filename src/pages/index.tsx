import type { NextPage } from "next";
import Head from "next/head";

// Imports de Components
import { Hero } from "../components/Hero";
import { PhoneParallax } from "../components/PhoneParallax";
import { ServicesSection } from "../components/ServicesSection";

// Imports de Estilos
import { Container } from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Illuminum | Home</title>
      </Head>
      <Container>
        <Hero />
        <PhoneParallax />
        <ServicesSection />
      </Container>
    </>
  );
};

export default Home;
