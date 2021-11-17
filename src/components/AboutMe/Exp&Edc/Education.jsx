import React from "react";
import { MainContainer, Date, Name, Location, Description } from "./styles";

const Experience = () => {
  return (
    <MainContainer>
      <Date>May 2021 - Jul 2021</Date>
      <Name>
        Full-Stack Web Developer - SIT Academy (former Propulsion Academy)
      </Name>
      <Location>Switzerland (Zürich)</Location>
      <Description>
        I was learning the basics of the Full-Stack web development.
      </Description>
      <Date>Oct 2018 - Aug 2019</Date>
      <Name>Real Estate Agent - Home For Life</Name>
      <Location>Hungary (Győr)</Location>
      <Description noMarginBottom={true}>
        Learn the basics of Full-Stack web development.
      </Description>
    </MainContainer>
  );
};

export default Experience;
