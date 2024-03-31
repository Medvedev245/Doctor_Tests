import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    background-color: #456770;
    transition: all 0.4s ease;
  }
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
