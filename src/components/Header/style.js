import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


export const StyledHeader = styled.header`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100px;
  padding: 3px 4px;
  background-color: #f5f3f3;
  @media (min-width: 768px) {
    padding: 6px 16px;
  }
`;
// background-color: var(--primary);
export const DesktopContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  width: 2rem;
  object-fit: cover;
`;

export const LogoText = styled.p`
  color: black;
  font-size: 1.25rem;
  font-weight: bold;
`;
//color: var(--headingColor)

export const BigDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const List = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style-type: none;
`;

export const ListItems = styled.li`
  font-size: 1.2rem;
  color: #2e2e2e;
  margin-right: 8px;
  &:hover {
    color: #2e2e2e;
  }
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

export const MotionDivCart = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 8px;
  svg {
    font-size: 2rem; /* Adjust the size as needed */
  }
`;

export const DivInsideCart = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--cartNumBg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ParInsideDiv = styled.p`
  font-size: 0.75rem;
  color: white;
  font-weight: 600;
`;

export const MotionDivNewItemLogout = styled(motion.div)`
  width: 150px;
  background-color: #F9FAFB;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 46px;
  right: 6px;

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    right: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 8px;
    border-color: transparent transparent #F9FAFB transparent;
  }
`;

export const NewItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--textColor);
  &:visited {
    color: var(--textColor); /* Use the same color as the default state */
  }
  &:active,
  &:focus {
    outline: none; /* Optional: Remove focus outline */
  }
`;

export const NewItem = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background-color: var(--slate-100);
  color: var(--textColor);
  font-size: 1rem;
`;

export const AvatarImg = styled(motion.img)`
  width: 2.5rem;
  min-width: 40px;
  height: 2.5rem;
  min-height: 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 50%;
`;

export const AvatarDiv = styled.div`
  position: relative;
`;