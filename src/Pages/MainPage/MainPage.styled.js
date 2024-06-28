import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionPic = styled.section`
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContainerDesc = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const MainText = styled.h1`
  display: block;
  text-align: center;
  margin-bottom: 45px;
`;

export const ContainerText = styled(Link)`
  box-shadow: 5px 5px 8px #85b;
  display: flex;
  background-color: rgba(179, 136, 187, 0.2);
  flex-direction: column;
  width: 320px;

  padding: 10px;
  gap: 20px;
  border-radius: 5px;
  transition: 0.3s;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: var(--iq-primary);
  }

  @media (pointer: coarse) {
    &:hover {
      color: blue;
    }
  }
`;

export const MainDescr = styled.h3`
  font-weight: bold;
  text-align: center;
`;
