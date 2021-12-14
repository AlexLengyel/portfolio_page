import React from "react";
import {
  MainContainer,
  Date,
  Name,
  Location,
  Description,
  Link,
} from "./styles";

const Experience = () => {
  return (
    <MainContainer>
      <Date>May 2021 - Jul 2021</Date>
      <Name>
        Full-Stack Web Developer - SIT Academy (former Propulsion Academy)
      </Name>
      <Location>Switzerland (Zürich)</Location>
      <Description>
        Developing smaller and bigger web applications to earn some experience
        and to learn the basics of Full-Stack web development.
        <Link
          href="https://www.youtube.com/watch?v=YzbHKKL6TbA"
          target="_blank"
        >
          <i> (Link to the final presentation)</i>
        </Link>
      </Description>
      <Date>Oct 2020 - May 2021</Date>
      <Name>Package Sorter - Swiss Post</Name>
      <Location>Switzerland (Härkingen)</Location>
      <Description>Package sorting.</Description>
      <Date>Oct 2018 - Aug 2019</Date>
      <Name>Real Estate Agent - Home For Life</Name>
      <Location>Hungary (Győr)</Location>
      <Description noMarginBottom={true}>
        Cold calling, property valuating, marketing, receiving calls, selling
        properties and consulting with lawyers.
      </Description>
    </MainContainer>
  );
};

export default Experience;
