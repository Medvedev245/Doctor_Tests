import { ConrainerBases, ContainerDescr } from './Bases.styled';

const Bases = () => {
  return (
    <ConrainerBases>
      <p>На данный момент на сайте есть базы:</p>
      <ContainerDescr>
        <span>Klener (5135 tests)</span>
        <span>Legislativa_Báze_2023 (1-70 tests)</span>
      </ContainerDescr>
    </ConrainerBases>
  );
};

export default Bases;
