import { ConrainerBases, ContainerDescr } from './Bases.styled';

const Bases = () => {
  return (
    <ConrainerBases>
      <p>На сайте есть базы:</p>
      <ContainerDescr>
        <span>- Klener (5135 tests)</span>
        <span>- Živný (1-731 tests)</span>
        <span>- Legislativa_Báze_2023 (657 tests)</span>
        <span>- Báze_Medicine_2023 (1629 tests)</span>
      </ContainerDescr>
    </ConrainerBases>
  );
};

export default Bases;
