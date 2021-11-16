import React, { forwardRef } from "react";
import { MainContainer } from "./styles";

const Projects = forwardRef((props, ref) => {
  return <MainContainer ref={ref}></MainContainer>;
});

export default Projects;
