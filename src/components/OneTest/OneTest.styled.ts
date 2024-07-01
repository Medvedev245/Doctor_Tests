import styled from 'styled-components';

export const TextFind = styled.p`
  font-weight: 500;
  /* margin-bottom: 50px; */
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TextInput = styled.input`
  padding: 5px 0 5px 10px;
  /* width: 30px; */
  height: 30px;
  border-radius: 4px;
  border: none;
`;

export const FindContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  justify-content: flex-start;
  gap: 20px;
  &:after {
    content: '';
    position: absolute;
    bottom: -19px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--iq-underlining);
  }
`;
