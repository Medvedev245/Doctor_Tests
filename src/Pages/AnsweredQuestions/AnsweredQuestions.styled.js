import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextPage = styled.h2`
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

export const TextSpan = styled.h3`
  text-align: center;
`;

export const TopicList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Question = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Item = styled.li`
  font-size: 15px;
  width: 400px;
  padding: 15px;
`;

export const Answers = styled.div`
  /* padding: 15px; */
`;

export const Answer = styled.div`
  margin-bottom: 10px;
`;

export const LinkToPage = styled(Link)`
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  &:hover,
  &:focus {
    color: red;
  }
`;
