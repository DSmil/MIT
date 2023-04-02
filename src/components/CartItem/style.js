import styled from "styled-components"

export const Item = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: #323232;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Image = styled.div`
  width: 5rem;
  height: 3rem;
  max-width: 60px;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const ItemNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemName = styled.div`
  font-size: 1rem;
  color: #FFFFFF;
`;

export const ItemPrice = styled.div`
  font-size: 0.875rem;
  color: #D1D5DB;
  font-weight: 500;
  display: block;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    /* add hover styles here */
  }
`;

export const NumberPlusMinus = styled.p`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;
  background-color: #323232;
  color: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: center;
`;