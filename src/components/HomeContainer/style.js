import styled from "styled-components"

export const ButtonOrderNow = styled.button`
  background-image: linear-gradient(to bottom right, #FF7316, #FFA20E);
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all ease-in-out 100ms;
  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0,0,0,0.1);
  }
  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    width: 80%;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: var(--text-color);
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const TitleSpan = styled.span`
  font-size: 3rem;
  color: #f97316; 
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const LeftContainer = styled.div`
  padding-top: 0.5rem; 
  flex: 1; 
  gap: 1.5rem; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
`;

export const WholeContainer = styled.section`
  padding-top:100px;
  display: grid; 
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.5rem; 
  width: 100%; 
  margin-left: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); 
  }
`;

export const RightContainer = styled.div`
  padding-top: 0.5rem;
  flex: 1;
  align-items: center; 
  position: relative; 
  display: flex;
  flex-direction: column;
`;

export const BackgroundImage = styled.img`
  margin-left: auto; 
  height: 400px; 
  width: 100%; 
  position: absolute;
  top: 0;
  right: 15%;
  @media (min-width: 1024px) {
    width: auto; 
    height: 650px; 
  }
`;

export const ImagesContainer = styled.div`
  width: 600px; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  padding: 4px;
  gap: 4px;
  flex-wrap: wrap; 
  flex-grow:1;
  margin-left: auto;
  margin-right: 10%;
  @media (min-width: 1024px) {
    padding-left: 32px; 
    padding-right: 32px;
    justify-content: flex-end; 
  }
`;

export const NoClue = styled.div`
  padding: 4px; 
  margin:40px 25px;
  background-color: "rgba(256,256,256,0.4)"; 
  backdrop-filter: blur(9px);
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 190px;
  }
`;

export const TheImages = styled.img`
  width:110px;
  height: auto;
  margin-top: -10px;
  @media (min-width: 1024px) {
    width: 200;
    height: auto;
  }
`;

export const ImagesName = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: #4B5563;
  margin-top: 0.5rem;
  
  @media (min-width: 1024px) {
    font-size: 1.15rem;
    margin-top: 1rem;
  }
`;

export const ImagesDescription = styled.p`
  font-size: 12px;
  line-height: 1.2;
  font-weight: 600;
  color: #7d7d7d; 
  margin-top: 0.3rem;
  
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 1.375;
    margin-top: 0.7rem;
  }
`;

export const ImagesPrice= styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`;

export const ImagesPriceSpan = styled.span`
  color: red;
  font-width:500;
  font-size: 14px;
`;