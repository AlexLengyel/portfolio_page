import React, { forwardRef, useState } from "react";
import Experience from "./Exp&Edc/Experience";
import Education from "./Exp&Edc/Education";
import {
  MainContainer,
  MainTitle,
  ContentContainer,
  PhotoContainer,
  TextContainer,
  Description,
  Title,
  TechnologyTitle,
  TechnologiesContainer,
  TechnologyGlass,
  TechnologyName,
  ButtonsContainer,
  Button,
} from "./styles";

const AboutMe = forwardRef((props, ref) => {
  const [experienceView, setExperienceView] = useState(true);

  return (
    <MainContainer ref={ref}>
      <MainTitle>About Me</MainTitle>
      <ContentContainer>
        <PhotoContainer></PhotoContainer>
        <TextContainer>
          {/* About me description */}
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Description>
          {/* Technologies */}
          <Title>Technologies</Title>
          <TechnologyTitle>Frontend:</TechnologyTitle>
          <TechnologiesContainer>
            <TechnologyGlass>
              <TechnologyName>HTML</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>CSS</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>JavaScript</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>React (+ Redux, Hooks)</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>REST APIs</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Styled Components</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Material UI</TechnologyName>
            </TechnologyGlass>
          </TechnologiesContainer>
          <TechnologyTitle>Backend:</TechnologyTitle>
          <TechnologiesContainer>
            <TechnologyGlass>
              <TechnologyName>Python</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>PostgreSQL</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Django</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Django REST Framework</TechnologyName>
            </TechnologyGlass>
          </TechnologiesContainer>
          <TechnologyTitle>DevOps:</TechnologyTitle>
          <TechnologiesContainer bigMarginBottom={true}>
            <TechnologyGlass>
              <TechnologyName>Docker</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Nginx</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>Git</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>GitHub</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>GitLab</TechnologyName>
            </TechnologyGlass>
            <TechnologyGlass>
              <TechnologyName>CI/CD</TechnologyName>
            </TechnologyGlass>
          </TechnologiesContainer>
          {/* Experience & Education*/}
          <ButtonsContainer>
            <Button marginRight={true} onClick={() => setExperienceView(true)}>
              Experience
            </Button>
            <Button onClick={() => setExperienceView(false)}>Education</Button>
          </ButtonsContainer>
          {experienceView ? <Experience /> : <Education />}
        </TextContainer>
      </ContentContainer>
    </MainContainer>
  );
});

export default AboutMe;
