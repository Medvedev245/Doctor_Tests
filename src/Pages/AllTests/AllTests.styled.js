import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: stretch;
`;

export const Item = styled.ul`
  border-radius: 8px;
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
  /* background-color: var(--iq-primary); */
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

export const SpanElemet = styled.span`
  color: black;
`;

export const ButtonAdd = styled.button`
  display: flex;
  width: 120px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const ButtonDescr = styled.button`
  border-radius: 5px;
  background: none;
  display: flex;
  border: none;
  width: 120px;
  height: 50px;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease; // Плавное изменение фона

  /* Стили для изменения цвета иконки при наведении */
  svg path {
    transition: fill 0.3s ease; // Плавное изменение цвета иконки
  }

  &:hover svg path,
  &:focus svg path {
    stroke: rgba(88, 5, 143, 1); // Изменение цвета иконки при наведении
    stroke-width: 1;
  }
`;

export const ButtonContainer = styled.div`
  /* height: 60px; */
  margin: 0 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
