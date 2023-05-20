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
  flex-wrap: wrap;
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
  order:-1;
`;

export const Title = styled.p`
  color: "#7b8794";
  font-size: 1.5rem;
`;

export const DivWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const Accepts = styled.div`
  width: 50%; 
`;

export const Declines = styled.div`
  width: 50%; 
`;

export const Div1 = styled.div`
  width: 100%;
  height: 270px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top:10px;
`;
export const Div2 = styled.div`
  width: 100%;
  height: 270px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top:10px;
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
  margin-bottom: 10px;
  display: flex;
  align-items: top;
  gap: 1rem;
  overflow: auto;
`;

export const DescrOfRequest = styled.p`
  color: "#7b8794";
  margin:0;

`;

export const PriceDiv = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: top;
  gap: 1rem;
  overflow: auto;
`;

export const Price = styled.p`
  color: "#7b8794";
  margin:0;
`;