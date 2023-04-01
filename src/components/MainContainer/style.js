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