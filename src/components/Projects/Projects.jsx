import React, { forwardRef } from "react";
import { MainContainer, MainTitle, ComingSoonText } from "./styles";

const Projects = forwardRef((props, ref) => {
  return (
    <MainContainer ref={ref}>
      <MainTitle>Projects</MainTitle>
      <ComingSoonText>Coming Soon!</ComingSoonText>
    </MainContainer>
  );
});

export default Projects;
