import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const BtnLoadMore = styled.button`
  width: 250px;
  height: 50px;
  cursor: pointer;
  border: 3px solid #fff;
  border-radius: 10px;

  font-weight: 500;
  font-size: 24px;
  color: var(--iq-light-primary);
  /* border-radius: 4px; */
  background: var(--iq-title-text);
`;
