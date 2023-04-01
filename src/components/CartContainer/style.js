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

export const CartText = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 1.125rem; /* equivalent to text-lg */
  font-weight: 500; /* equivalent to font-semibold */
`;

export const CartClear = styled(motion.p)`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* equivalent to gap-2 */
  padding: 0.25rem 0.5rem; /* equivalent to p-1 px-2 */
  margin: 0.5rem 0; /* equivalent to my-2 */
  background-color: ${props => props.theme.gray100};
  border-radius: 0.375rem; /* equivalent to rounded-md */
  cursor: pointer;
  color: ${props => props.theme.textColor};
  font-size: 1rem; /* equivalent to text-base */
  font-weight: 500; /* equivalent to font-semibold */
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* equivalent to hover:shadow-md */
  }
`;

export const BackgroundSection2 = styled.div`
  width: 100%; /* equivalent to w-full */
  height: 100%; /* equivalent to h-full */
  background-color: ${props => props.theme.cartBg};   /*the background color is not black */
  border-top-left-radius: 2rem; /* equivalent to rounded-t-[2rem] */
  display: flex;
  flex-direction: column;
`;


export const BackgroundSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222222;
  border-top-left-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartItemSection = styled.div`
  width: 100%; /* equivalent to w-full */
  height: 340px; /* equivalent to h-340 */
  padding: 1rem; /* equivalent to px-6 py-10 */
  margin-top: 20px; /* i added that to fix the margin from top */
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* equivalent to gap-3 */
  overflow-y: scroll;
  scrollbar-width: none; /* equivalent to scrollbar-none */
  -ms-overflow-style: none; /* equivalent to scrollbar-none */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: 420px; /* equivalent to md:h-42 */
  }
`;

export const CartTotalSection = styled.div`
  width: 100%; /* equivalent to w-full        delete this after*/
  flex: 1; /* equivalent to flex-1 */
  background-color: ${props => props.theme.cartTotal};
  border-top-left-radius: 2rem; /* equivalent to rounded-t-[2rem] */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.75rem 2rem; /* equivalent to px-8 py-2 */
`;

export const CartTotalDiv = styled.div`
  width: 100%; /* equivalent to w-full */
  flex: 1;
  background-color: #323232;
  border-top-left-radius: 2rem; /* equivalent to rounded-t-[2rem] */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 2rem; /* equivalent to px-8 py-2 */
`;

export const WhenEmptyDiv = styled.div`
  width: 100%; /* equivalent to w-full */
  height: 100%; /* equivalent to h-full */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem; /* equivalent to gap-6 */
`;

export const WhenEmptyText = styled.div`
  font-size: 1.25rem; /* equivalent to text-xl */
  color: ${props => props.theme.textColor}; /* equivalent to text-textColor */
  font-weight: 400; /* equivalent to font-semibold */
`;

export const MotionButton2 = styled(motion.button)`
  width: 100%; /* equivalent to w-full */
  padding: 0.5rem 1rem; /* equivalent to p-2 */
  border-radius: 9999px; /* equivalent to rounded-full */
  background-image: linear-gradient(to bottom right, #f97316, #fbbf24); /* equivalent to bg-gradient-to-tr from-orange-400 to-orange-600 */
  color: #fff; /* equivalent to text-gray-50 */
  font-size: 1.125rem; /* equivalent to text-lg */
  font-weight: 600;
  margin-top: 1rem; /* equivalent to my-2 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* equivalent to hover:shadow-lg */
  border: none;
  outline: none;
  cursor: pointer;
`;

export const MotionButton1 = styled(motion.button)`
  width: 100%; /* equivalent to w-full */
  padding: 0.5rem 1rem; /* equivalent to p-2 */
  border-radius: 9999px; /* equivalent to rounded-full */
  background-image: linear-gradient(to bottom right, #fb923c, #f87171); /* equivalent to bg-gradient-to-tr from-orange-400 to-orange-600 */
  color: #fff; /* equivalent to text-gray-50 */
  font-size: 1.125rem; /* equivalent to text-lg */
  font-weight: 600; /* equivalent to font-semibold */
  margin-top: 0.5rem; /* equivalent to my-2 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.1), 0 32px 64px rgba(0, 0, 0, 0.1); /* equivalent to hover:shadow-lg */
`;

export const SubTotalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
`;

export const SubTotalText = styled.div`
  color: white;
  font-size: 1.125rem;
`;

export const SubTotalPrice = styled.div`
  color: white;
  font-size: 1.125rem;
`;

export const Delivery = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem;
`;

export const DeliveryText = styled.div`
  color: white;
  font-size: 1.125rem;
`;

export const DeliveryPrice = styled.div`
  color: white;
  font-size: 1.125rem;
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  margin: 0.5rem 0;
`;

export const TotalText = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const TotalPrice = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const TotalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;