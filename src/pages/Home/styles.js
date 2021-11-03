import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  background-color: #5de6de;
  background: linear-gradient(110deg, #5de6de 0%, #b58ecc 74%);
  //background: ${({ theme }) => theme.background.body[0]};
  //background: ${({ theme }) => theme.background.body[1]};
  //background: ${({ theme }) => theme.background.body[2]};
`;
