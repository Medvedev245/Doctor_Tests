import { Link } from 'react-router-dom';
import styled from 'styled-components';

//main container
export const FormContainer = styled.form`
  /* background-color: #abaad8; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: var(--iq-secondary);
  width: 150px;
  height: 40px;
  border-radius: 5px;
  &:active {
    background: var(--iq-primary);
  }
`;

export const LinkToStart = styled(Link)`
  border-radius: 4px;
  width: 10%;
  text-decoration: none;
  &:hover {
    background: var(--iq-primary);
  }
`;
