import styled from "styled-components";
import { defaultTheme } from "../../styles/globalStyles";
import { MainGlassContainer } from "../../styles/glassContainer";

export const MainContainer = styled(MainGlassContainer)``;

export const MainTitle = styled.div`
  margin-bottom: ${defaultTheme.space.big};

  font-size: ${defaultTheme.fontSize.mainTitle};
  font-weight: 700;
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const EmailFromContainer = styled.form`
  margin-right: ${defaultTheme.space.normal};

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${({ emailHasSent }) =>
    emailHasSent ? "center" : "flex-start"};
  align-items: ${({ emailHasSent }) =>
    emailHasSent ? "center" : "flex-start"};

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const SuccessfulText = styled.p`
  font-size: ${defaultTheme.fontSize.title};
  font-weight: 700;
  text-align: center;
`;

export const InputText = styled.input`
  width: 100%;

  padding: ${defaultTheme.space.small} ${defaultTheme.space.normal};
  margin-bottom: ${defaultTheme.space.big};

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;

  word-wrap: break-word;
  word-break: break-all;
  overflow-wrap: break-word;

  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border: ${({ theme }) => theme.glass.border};
`;

export const TextArea = styled.textarea`
  height: 15em;
  width: 100%;

  padding: ${defaultTheme.space.small} ${defaultTheme.space.normal};
  margin-bottom: ${defaultTheme.space.big};

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  resize: none;

  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border: ${({ theme }) => theme.glass.border};
`;

export const SubmitButton = styled.input`
  min-width: 30%;

  padding: ${defaultTheme.space.small} ${defaultTheme.space.normal};

  align-self: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;

  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border: ${({ theme }) => theme.glass.border};

  @media (max-width: 768px) {
    min-width: 50%;
  }
`;

export const EmailToContainer = styled.div`
  margin-left: ${defaultTheme.space.normal};

  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: ${defaultTheme.space.big};
  }
`;

export const Title = styled.p`
  margin-bottom: ${defaultTheme.space.extraSmall};

  font-weight: 700;
`;

export const Text = styled.p`
  margin-bottom: ${defaultTheme.space.normal};
`;

export const PlatformContainer = styled.div`
  width: 100%;

  display: flex;
`;

export const LogoGlass = styled.a`
  padding: 0.4em;
  margin: ${defaultTheme.space.extraSmall};

  display: flex;

  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;

  box-shadow: ${defaultTheme.boxShadow.thin};
  backdrop-filter: blur(${({ blur }) => blur || "10px"});
  -webkit-backdrop-filter: blur(${({ blur }) => blur || "10px"});
  border: ${({ theme }) => theme.glass.border};
`;

export const Logo = styled.img`
  height: ${defaultTheme.space.normal};
  width: ${defaultTheme.space.normal};
`;
