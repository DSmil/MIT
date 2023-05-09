import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';


export const StyledHeader = styled.header`
  position: fixed;
  z-index: 50;
  width: 100%;
  padding: 3px 4px;
  background-color: var(--primary);
  
  @media (min-width: 768px) {
    padding: 6px 16px;
  }
`;

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
`;

export const LogoImage = styled.img`
  width: 2rem;
  object-fit: cover;
`;

export const LogoText = styled.p`
  color: var(--headingColor);
  font-size: 1.25rem;
  font-weight: bold;
`;
