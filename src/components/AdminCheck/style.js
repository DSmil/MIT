import styled from "styled-components"

export const BigContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: center;
  padding-top: 15vh;
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

export const Div1 = styled.div`
  width: 80%;
  height: 270px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NameDiv = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #D1D5DB;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NameOfUser = styled.p`
  color: "#7b8794";
`;

export const DescrDiv = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom:30px;
  display: flex;
  align-items: top;
  gap: 1rem;
  overflow: auto;
`;

export const DescrOfRequest = styled.p`
  color: "#7b8794";
  margin:0;

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonAccept = styled.button`
  margin: 0 2rem 0 0;
  width: 100%;
  max-width: 200px;
  border: none;
  outline: none;
  background-color: #059669;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #047857;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

export const ButtonReject = styled.button`
  margin: 0 0.5rem 0 0;
  width: 100%;
  max-width: 200px;
  border: none;
  outline: none;
  background-color: #e53e3e;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c53030;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

