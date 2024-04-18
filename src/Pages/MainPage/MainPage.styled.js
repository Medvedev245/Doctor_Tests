import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionPic = styled.section`
  margin-bottom: 50px;
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
  &:hover {
    background-color: var(--iq-primary);
  }
`;

export const MainDescr = styled.h3`
  font-weight: bold;
  text-align: center;
`;
