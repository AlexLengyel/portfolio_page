import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ParticleBackground from "../../components/Particle/ParticleBackground";
import { MainContainer } from "./styles";
import GreetingBanner from "../../components/GreetingBanner/GreetingBanner";
import NavBar from "../../components/NavBar/NavBar";
import AboutMe from "../../components/AboutMe/AboutMe";

const scrollViewStyle = {
  behavior: "smooth",
  block: "start",
};

const Home = () => {
  const scrollViewState = useSelector(
    (state) => state.scrollViewReducer.scrollView
  );

  const greetingRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    switch (scrollViewState) {
      case 1:
      case 10:
        return greetingRef.current.scrollIntoView(scrollViewStyle);
      case 2:
      case 20:
        return aboutMeRef.current.scrollIntoView(scrollViewStyle);
      case 3:
      case 30:
        return projectsRef.current.scrollIntoView(scrollViewStyle);
      case 4:
      case 40:
        return contactRef.current.scrollIntoView(scrollViewStyle);
      default:
        return null;
    }
  }, [scrollViewState]);

  return (
    <MainContainer>
      <ParticleBackground />
      <NavBar />
      <GreetingBanner ref={greetingRef} />
      <AboutMe ref={aboutMeRef} />
    </MainContainer>
  );
};

export default Home;
