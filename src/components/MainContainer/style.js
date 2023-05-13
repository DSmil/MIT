import styled from "styled-components"
import { motion } from 'framer-motion';

export const BigDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 1.5rem;
`;

export const OutDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InDiv = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 3px;
    align-items: center;
  }
`;
//className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg
//before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
export const DelitiousFood = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: #2e2e2e;
  position: relative;

  &::before {
    content: '';
    width: 8rem;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
    border-radius: 1rem;
    background-image: linear-gradient(to top right, #ff8c00, #ff4500);
    transition: all 0.2s ease-in-out;
  }
`;

export const MotionDiv = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #ff9f00;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff6600;
  }
`;

