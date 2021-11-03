import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { themeActionCreators } from "../../redux/action-creators/index";
import ParticleBackground from "../../components/Particle/ParticleBackground";
import { MainContainer } from "./styles";
import GreetingBanner from "../../components/GreetingBanner/GreetingBanner";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const dispatch = useDispatch();
  const { changeTheme } = bindActionCreators(themeActionCreators, dispatch);

  return (
    <MainContainer>
      <ParticleBackground />
      <NavBar />
      <GreetingBanner />
    </MainContainer>
  );
};

export default Home;
