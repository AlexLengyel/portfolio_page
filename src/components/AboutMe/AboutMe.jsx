import React, { forwardRef } from "react";
import { MainContainer } from "./styles";

const AboutMe = forwardRef((props, ref) => {
  return <MainContainer ref={ref}></MainContainer>;
});

export default AboutMe;
