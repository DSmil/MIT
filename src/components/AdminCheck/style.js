import styled from "styled-components"

export const BigContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  padding-top: 15vh;
  background-color: ${props => props.theme.colors.mainPageColor};
`;

export const MainContainer = styled.div`
  width: 90%;
  max-width: 50%;
  /*border: 1px solid #ccc;*/
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TitleDiv = styled.div`
  width: 100%;
  padding-top: 1rem;
  border-bottom: 1px solid #D1D5DB;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.p`
  color: "#7b8794";
  font-size: 1.5rem;
`;



