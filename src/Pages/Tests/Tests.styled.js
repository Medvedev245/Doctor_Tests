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
  gap: 15px;
  margin-bottom: 20px;
`;

// Общая кнопка
export const Button = styled.button`
  /* margin-bottom: 15px; */
  color: black;
  font-weight: 500;
  background-color: var(--iq-primary);
  width: 150px;
  height: 50px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:active {
    background: var(--iq-secondary);
  }
`;

export const LinkContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 435px; */
  margin-bottom: 30px;
  margin: auto;

  //Tablet
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
  }

  //Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    display: flex;
    flex-direction: column;
    width: 270px;
    margin-bottom: 200px;
  }
`;

export const AnswerControl = styled.div`
  /* flex-direction: column; */
  display: flex;
  gap: 20px;
  align-items: center;

  //mobil
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const Answer = styled.div`
  min-height: 400px;
  margin-bottom: 20px;
`;

export const ButtonDescr = styled.button`
  color: black;
  font-weight: 500;
  background-color: var(--iq-primary);
  width: 200px;
  height: 30px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  display: block;
  margin: auto;
`;
