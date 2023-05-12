import styled from "styled-components"
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"


export const MainItemListContainer = styled.div`
  width: 100%; /* equivalent to w-full */
  height: auto; /* equivalent to h-auto */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* equivalent to items-center justify-center */
`;

export const MainItemsSection = styled.section`
  width: 100%; /* equivalent to w-full */
  margin-top: 1.5rem; /* equivalent to my-6 */
`;

export const LeftArrowContainer = styled(motion.div)`
  width: 2rem; /* equivalent to w-8 */
  height: 2rem; /* equivalent to h-8 */
  border-radius: 0.5rem; /* equivalent to rounded-lg */
  background-color: #FFA500; /* equivalent to bg-orange-300 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; /* equivalent to hover:bg-orange-500 */
  
  &:hover {
    background-color: #FF8C00; /* equivalent to hover:bg-orange-500 */
  }
`;

export const LeftArrowIcon = styled(MdChevronLeft)`
  color: white; /* equivalent to text-white */
  font-size: 1.125rem; /* equivalent to text-lg */
`;

export const WhiteText = styled.span`
  font-size: 1.125rem; /* text-lg */
  color: white;
`;

export const CenterItem = styled.div`
  width: 100%; /* w-full */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderFood = styled.p`
font-size: 2rem; /* text-2xl */
font-weight: 600; /* font-semibold */
text-transform: capitalize;
color: #1a202c; /* text-headingColor */
position: relative;

&::before {
  content: '';
  position: absolute;
  bottom: -0.5rem; /* -bottom-2 */
  left: 0;
  width: 8rem; /* w-32 */
  height: 0.25rem; /* h-1 */
  border-radius: 0.125rem; /* rounded-lg */
  background-image: linear-gradient(to right, #f97316, #faad14); /* bg-gradient-to-tr from-orange-400 to-orange-600 */
  transition: all 0.2s ease-in-out; /* transition-all ease-in-out duration-100 */
  transform-origin: bottom left;
  transform: scaleX(0);
}

&:hover::before {
  transform-origin: bottom right;
  transform: scaleX(1);
}
`;

export const ItemCenter = styled.div`
display: none;

@media screen and (min-width: 768px) {
  display: flex;
  gap: 1rem; /* gap-3 */
  justify-content: center; /* items-center */
}
`;

export const ClickChange = styled(motion.div)`
width: 2rem; /* w-8 */
height: 2rem; /* h-8 */
border-radius: 0.5rem; /* rounded-lg */
background-color: #fbd38d; /* bg-orange-300 */
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover {
  background-color: #f6ad55; /* bg-orange-500 */
}
`;
