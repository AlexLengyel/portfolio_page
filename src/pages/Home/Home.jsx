import React from "react";
import ParticleBackground from "../../components/Particle/ParticleBackground";
import { MainContainer } from "./styles";
import GreetingBanner from "../../components/GreetingBanner/GreetingBanner";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <MainContainer>
      <ParticleBackground />
      <NavBar />
      <GreetingBanner />
    </MainContainer>
  );
};

export default Home;
