import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { MdOutlineKeyboardBackspace } from "react-icons/md"


export const CartContainerBox = styled(motion.div)` 
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 375px; /* equivalent to md:w-375 */
  height: 100vh; /* equivalent to h-screen */
  background-color: white; /* equivalent to bg-white */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* equivalent to drop-shadow-md */
  display: flex;
  flex-direction: column;
  z-index: 101; /* equivalent to z-[101] */
`;

export const BackspaceIcon = styled(MdOutlineKeyboardBackspace)`
  color: var(--textColor); /* equivalent to text-textColor */
  font-size: 2rem; /* equivalent to text-3xl */
`;

export const CardHeader = styled.div`
  width: 100%; /* equivalent to w-full */
  display: flex;
  align-items: center;
  justify-content: space-between; /* equivalent to justify-between */
  padding: 1rem; /* equivalent to p-4 */
  cursor: pointer; /* equivalent to cursor-pointer */
`;
