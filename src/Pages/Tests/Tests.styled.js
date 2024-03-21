import styled from 'styled-components';
import { Link } from 'react-router-dom';

//main container
export const FormTest = styled.div`
  /* background-color: #abaad8; */
`;

export const FormText = styled.h2`
  margin-bottom: 40px;
`;

export const ContainerCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

// Общая кнопка
export const Button = styled.button`
  color: black;
  font-weight: 500;
  background-color: var(--iq-primary);
  width: 150px;
  height: 50px;
  border-radius: 10px;
  /* margin-bottom: 20px; */
  transition: background-color 0.3s ease;
  &:active {
    background: var(--iq-secondary);
  }
`;

export const LinkContainer = styled.div`
  width: 200px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

// Общая ссылка
export const LinkToPage = styled(Link)`
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background: var(--iq-primary);
  }
`;

export const AnswerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnswerControl = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
