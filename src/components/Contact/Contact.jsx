import React, { forwardRef, useState, useRef } from "react";
import emailjs from "emailjs-com";
import GitHubLogo from "../../assets/logos/GitHub_Logo.png";
import LinkedInLogo from "../../assets/logos/LinkedIn_Logo.png";
import {
  MainContainer,
  MainTitle,
  ContentContainer,
  EmailFromContainer,
  SuccessfulText,
  InputText,
  TextArea,
  SubmitButton,
  EmailToContainer,
  Title,
  Text,
  PlatformContainer,
  LogoGlass,
  Logo,
} from "./styles";

const Contact = forwardRef((props, ref) => {
  const [emailHasSent, setEmailHasSent] = useState(false);

  const form = useRef();

  console.log(form.current);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailHasSent(true);
        },
        (error) => {
          console.log(error.text);
          alert(
            "Sorry, something went wrong. Please, get in touch with me through from your email account or try it again later."
          );
        }
      );

    e.target.reset();
  };

  return (
    <MainContainer ref={ref}>
      <MainTitle>Contact Me</MainTitle>
      <ContentContainer>
        <EmailFromContainer
          ref={form}
          onSubmit={sendEmail}
          emailHasSent={emailHasSent}
        >
          {emailHasSent ? (
            <SuccessfulText>
              Email has been sent successfully! Thank you for contacting me.
            </SuccessfulText>
          ) : (
            <>
              <InputText type="text" name="name" placeholder="Name" required />
              <InputText
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <InputText
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <TextArea
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <SubmitButton type="submit" value="Send Message" />
            </>
          )}
        </EmailFromContainer>
        <EmailToContainer>
          <Title>Email to</Title>
          <Text>lengyelalex@gmail.com</Text>
          <Title>Phone</Title>
          <Text>+41 79 371 96 61</Text>
          <Title>Platforms</Title>
          <PlatformContainer>
            <LogoGlass href="https://github.com/AlexLengyel" target="_blank">
              <Logo src={GitHubLogo} />
            </LogoGlass>
            <LogoGlass
              href="https://www.linkedin.com/in/alex-lengyel/"
              target="_blank"
            >
              <Logo src={LinkedInLogo} />
            </LogoGlass>
          </PlatformContainer>
        </EmailToContainer>
      </ContentContainer>
    </MainContainer>
  );
});

export default Contact;
