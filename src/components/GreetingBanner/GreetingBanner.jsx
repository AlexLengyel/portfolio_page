import React, { forwardRef } from "react";
import {
  MainContainer,
  TextAndButtonContainer,
  Text,
  Name,
  PhotoContainer,
} from "./styles";

const GreetingBanner = forwardRef((props, ref) => {
  return (
    <MainContainer ref={ref}>
      <TextAndButtonContainer>
        <Text>Hello World! I am</Text>
        <Name>Alex Lengyel</Name>
        <Text>Full-Stack Web Developer</Text>
      </TextAndButtonContainer>
      <PhotoContainer></PhotoContainer>
    </MainContainer>
  );
});

export default GreetingBanner;
