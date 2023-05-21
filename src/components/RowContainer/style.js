import styled from "styled-components";
import { motion } from "framer-motion";

export const RowCont = styled.div`
  width: 100%;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow-x: scroll;
  scroll-behavior: none;

  ${props =>
    props.flag
      ? `
      overflow-x: scroll;
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      &::-webkit-scrollbar {
        display: none;
      }
    `
      : `
      overflow-x: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
`;

export const ItemCont = styled.div`
  height: 185px;
  min-width: 275px;
  border-radius: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1); 
  margin: 20px 10px; 
  padding-bottom: 10px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media (min-width: 768px) {
    width: 300px;
    min-width: 300px;
  }
`;

export const GetItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Motion = styled(motion.div)`
  width: 200px;
  height: 110px;
  margin-top: -8px;
  margin-left:10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CartSymbol = styled(motion.div)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.categoryInnerCircle};
  cursor: pointer;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  margin-top: -8px;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const TextCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: -8px;
`;

export const Title = styled.p`
  color: #333; /* or any other desired color */
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* Use media queries to adjust font size for different screen sizes */
`;

export const Calories = styled.p`
  margin-top: 1px;
  font-size: 15px;
  color: #888; /* or any other desired color */
`;

export const PriceCont = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333; /* or any other desired color */
`;

export const PriceSpan = styled.span`
  font-size: 15px;
  color: #f00; /* or any other desired color */
`;

export const ContNotAvailable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageNotAvailable = styled.img`
  height: 340px;
`;

export const TextNotAvailable = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #333; /* or any other desired color */
  margin-top: 16px; /* or any other desired margin */
  margin-bottom: 8px; /* or any other desired margin */
`;