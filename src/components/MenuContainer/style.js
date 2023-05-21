import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRegListAlt } from 'react-icons/fa';

export const StyledCategoryTextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledCategoryText = styled.p`
	font-size: 12px;
	padding: 0 10px 0 10px;
	color: ${(props) =>
		props.active
			? props.theme.colors.white
			: props.hovered ? props.theme.colors.white : props.theme.textColor};

`;

export const CategoryCircle = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	background-color: ${(props) =>
		props.active ? props.theme.colors.textColor : props.hovered ? props.theme.colors.textColor : props.theme.colors.categoryInnerCircle};
	opacity: 0.7;
`;

export const CategoryContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30px;
	min-width: 100px;
	height: 100px;
	cursor: pointer;
	border-radius: 5%;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	&:hover {
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.categoryCircle};
	}
	background-color: ${(props) =>
		props.active
			? props.theme.colors.categoryCircle
			: props.theme.colors.white};
`;

export const StyledIcon = styled(FaRegListAlt)`
  color: ${props => props.active ? props.theme.colors.white : props.hovered ? props.theme.colors.white : props.theme.colors.textColor};
  font-size: 1rem; // Set to desired size
  
`;

export const ScrolliDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;
	padding-top: 10px;
	margin-top: 40px;
  margin-bottom: 40px;

	/* Internet Explorer and Edge */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari and Opera */
	}

	@media (min-width: 1024px) {
		justify-content: center;
	}
`;

export const MakesP = styled.p`
	font-size: 2.5rem;
	font-weight: 600;
	text-transform: capitalize;
	color: #2d3748;
	position: relative;
	margin-right: auto;
	margin-left: 10%;
	transition: all 0.2s ease-in-out;

	/* Pseudo-element 'before' */
	&::before {
		content: '';
		width: 7rem;
		height: 0.125rem;
		border-radius: 0.25rem;
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		background-image: linear-gradient(to right, #f59e0b, #ef4444);
		transition: all 0.2s ease-in-out;
	}
`;

export const OuterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SectionWrapper = styled.section`
	width: 100%;
	margin-top: 100px;
`;
