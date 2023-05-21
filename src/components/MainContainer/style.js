import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainComponent = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  background-color: ${props => props.theme.colors.mainPageColor};

`;

export const Footer = styled.div`
  height: 250px;
`
