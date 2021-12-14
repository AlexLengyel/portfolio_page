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
        Three-month long intensive course (500+ hours) focusing on essential
        topics and frameworks to learn the basics of Full-Stack web development.
        <Link
          href="https://www.youtube.com/watch?v=YzbHKKL6TbA"
          target="_blank"
        >
          <i> (Link to the final presentation)</i>
        </Link>
      </Description>
      <Date>Oct 2018 - Aug 2019</Date>
      <Name>Real Estate License - FEOT Ltd.</Name>
      <Location>Hungary (Győr)</Location>
      <Description>
        Fundamentals of economics, cost based assessment, valuation and law.
      </Description>
      <Date>Sep 2014 - June 2018</Date>
      <Name>
        Graduation Certificate - Ferenc Deák Vocational High School of Economics
      </Name>
      <Location>Hungary (Győr)</Location>
      <Description noMarginBottom={true}>
        Fundamentals of accounting, finance, law and statistics.
      </Description>
    </MainContainer>
  );
};

export default Experience;
