import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: stretch;
`;

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  min-height: 290px;
  width: 400px;
  padding-bottom: 15px;
  background-color: white;
`;

export const ListQuestion = styled.ul`
  margin-bottom: 40px;
  flex: 1 1 auto;
  padding: 0 15px;
`;

export const Select = styled.select`
  background-color: #bb9ae682;
  border: 0px;
  border-radius: 5px;
`;

export const Element = styled.li`
  list-style: line;
  margin-left: 10px;
  line-height: 1.4;
`;

export const Question = styled.p`
  padding: 0 15px;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const TopicContainer = styled.div`
  position: relative;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 10px;
  /* background-color: var(--iq-primary); */

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--iq-underlining);
  }
`;
