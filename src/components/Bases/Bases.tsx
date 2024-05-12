import React from 'react';
import { ConrainerBases, ContainerDescr } from './Bases.styled';

const Bases: React.FC = () => {
  // let num: number[] = [1, 2, 3, 4];
  // num.push('4');
  // num = '1';
  return (
    <ConrainerBases>
      <p>На сайте есть базы:</p>
      <ContainerDescr>
        <span>- Klener (5135 tests)</span>
        <span>- Živný (4688 tests)</span>
        <span>- Legislativa_Báze_2023 (657 tests)</span>
        <span>- Báze_Medicine_2023 (1629 tests)</span>
      </ContainerDescr>
    </ConrainerBases>
  );
};

export default Bases;
