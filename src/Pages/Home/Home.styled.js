import { Link } from 'react-router-dom';
import styled from 'styled-components';

//main container
export const FormContainer = styled.form`
  /* background-color: #abaad8; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  background-color: var(--iq-secondary);
  width: 150px;
  height: 40px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:active,
  &:hover,
  &:focus {
    background: var(--iq-primary);
  }
`;

export const WraperForm = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--iq-underlining);
  }
`;

export const LinkToStart = styled(Link)`
  color: black;
  font-weight: 500;
  text-decoration: none;
  padding: 14px;
  border: 2px solid;
  background-color: var(--iq-primary);
  width: 150px;
  height: 50px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover,
  &:focus {
    background: var(--iq-primary);
  }
`;

export const ChoosenElement = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 200px;

  position: relative;
  font-weight: bold;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--iq-underlining);
  }
`;
