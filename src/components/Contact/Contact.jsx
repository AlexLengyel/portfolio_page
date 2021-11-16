import React, { forwardRef } from "react";
import { MainContainer } from "./styles";

const Contact = forwardRef((props, ref) => {
  return <MainContainer ref={ref}></MainContainer>;
});

export default Contact;
