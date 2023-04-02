import styled from "styled-components"
import { motion } from "framer-motion"

export const Outersection = styled.section`
width: 100%; /* w-full */
margin-top: 1.5rem; /* my-6 */
margin-bottom: 1.5rem; /* my-6 */
`;
export const Outerdiv = styled.div`
width: 100%; /* w-full */
display: flex;
flex-direction: column;
align-items: center; /* items-center */
justify-content: center; /* justify-center */
`;

export const HotDish = styled.p`
font-size: 2rem; /* text-2xl */
font-weight: 600; /* font-semibold */
text-transform: capitalize;
color: var(--heading-color); /* text-headingColor */
position: relative;
margin-right: auto; /* mr-auto */

&::before {
  content: '';
  position: absolute;
  bottom: -0.5rem; /* -bottom-2 */
  left: 0;
  width: 4rem; /* w-16 */
  height: 0.25rem; /* h-1 */
  border-radius: 0.125rem; /* rounded-lg */
  background-image: linear-gradient(to right, var(--orange-400), var(--orange-600)); /* bg-gradient-to-tr from-orange-400 to-orange-600 */
  transition: all 0.3s ease-in-out; /* transition-all ease-in-out duration-100 */
}
`;

export const PositioningItems = styled.div`
width: 100%; /* w-full */
display: flex;
align-items: center; /* items-center */
justify-content: flex-start; /* justify-start */
gap: 2rem; /* gap-8 */
padding: 1.5rem 0; /* py-6 */

@media (min-width: 768px) {
  justify-content: center; /* lg:justify-center */
}

overflow-x: scroll; /* overflow-x-scroll */
scrollbar-width: none; /* scrollbar-none */
-ms-overflow-style: none;
&::-webkit-scrollbar {
  display: none;
}
`;

export const WhenClicked = styled(motion.div)`
/* Custom styles for clickable card */
width: 6rem; /* w-24 */
min-width: 94px; /* min-w-[94px] */
height: 7rem; /* h-28 */
cursor: pointer;
border-radius: 0.75rem; /* rounded-lg */
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* drop-shadow-xl */
display: flex;
flex-direction: column;
gap: 0.75rem; /* gap-3 */
align-items: center;
justify-content: center;
transition: background-color 0.2s ease;

/* Apply hover style */
&:hover {
  background-color: var(--cartNumBg); /* hover:bg-cartNumBg */
}
`;

export const HoverText = styled.div`

/* Custom styles for hoverable text */
width: 2.5rem; /* w-10 */
height: 2.5rem; /* h-10 */
border-radius: 50%; /* rounded-full */
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); /* shadow-lg */
display: flex;
align-items: center;
justify-content: center;
transition: background-color 0.2s ease;

/* Apply hover style */
&:hover {
  background-color: var(--white);
}
`;

export const Categorys = styled.p`

/* Apply hover style */
&:hover {
  color: var(--white);
}

/* Other styles */
font-size: 0.875rem; /* text-sm */
transition: color 0.2s ease;
`;

export const DivofRowContainer = styled.div`
width: 100%; /* w-full */
`;

