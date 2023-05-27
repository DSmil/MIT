import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const PopUpContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  width: fit-content;
  max-height: 90%;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px; // adjust this value for horizontal padding
  top: 20px; // adjust this value for vertical position
  width: 100%;
  max-width: 100px;
  border: none;
  outline: none;
  background-color: #e53e3e;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c53030;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.05);
  }
`;

