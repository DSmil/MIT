import styled from "styled-components";
import { motion } from "framer-motion";

export const BigContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextContainer = styled.div`
  width: 90%;
  max-width: 50%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const MotionP = styled(motion.p)`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: ${props => props.alertStatus === "danger" ? "#EF4444" : "#10B981"};
  color: ${props => props.alertStatus === "danger" ? "#FECACA" : "#34D399"};
`;

export const TitleDiv = styled.div`
  width: 100%;
  padding-top: 2rem;
  border-bottom: 1px solid #D1D5DB;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.125rem;
  background-color: transparent;
  outline: none;
  border: none;
  placeholder: text-gray-400;
  color: var(--text-color);
`;

export const SelectCategoryDiv = styled.div`
  width: 100%;
`;

export const SelectCategory = styled.select`
  outline: none;
  width: 100%;
  font-size: 1rem;
  border-bottom: 2px solid #CBD5E0;
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:focus {
    border-color: #7F9CF5;
  }
`;

export const Option = styled.option`
  background-color: #FFFFFF;
`;

export const Option2 = styled.option`
  text-base;
  border: 0;
  outline: none;
  text-transform: capitalize;
  background-color: white;
  color: var(--headingColor);
`;

export const UploadDiv = styled.div`
  border: 2px dotted #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 225px;
  
  @media (min-width: 768px) {
    height: 340px;
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const AfterLabelUploadDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const UploadText = styled.p`
  color: #7b8794;
  cursor: pointer;
  &:hover {
    color: #4b5563;
  }
`;

export const InputAfterText = styled.input`
  width: 0;
  height: 0;
`;

export const ImageDiv = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonDeleteImage = styled.button`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: #f87171;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  transition-duration: 500ms;
  transition-property: all;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SetCaloriesAndPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SetCaloriesDiv = styled.div`
  width: 100%;
  padding: 0 0 2rem;
  border-bottom: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CaloriesInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.125rem;
  background-color: transparent;
  outline: none;
  border: none;
  ::placeholder {
    color: #a5a5a5;
  }
  color: #515151;
`;

export const SetPriceDiv = styled.div`
  width: 100%;
  padding: 2rem 0; /*padding: 0 0 2rem; */
  border-bottom: 1px solid #ccc; /*d1d5db */
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.125rem; /* 18px */
  background-color: transparent;
  outline: none;
  border: none;
  placeholder: text-gray-400;
  color: #515151;
`;

export const SaveDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SaveButton = styled.button`
  margin-left: 0;
  /*ml-md: auto;*/
  width: 100%;
  max-width: 200px;
  border: none;
  outline: none;
  background-color: #059669;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #047857;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;