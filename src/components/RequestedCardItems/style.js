import styled from "styled-components"

export const Div1 = styled.div`
  width: 80%;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 10px 0px;
`;

export const ImageDiv = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

//is not working
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextDiv = styled.div`
  width: 70%;
  height: 100%;
  
  border-radius: 0.5rem;
  padding: 0.5rem;
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
  margin-bottom:15px;
  display: flex;
  align-items: top;
  gap: 1rem;
`;

export const Price = styled.p`
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