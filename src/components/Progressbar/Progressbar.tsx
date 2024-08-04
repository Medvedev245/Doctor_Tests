import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PersentContainer } from './Progressbar.styled';

interface ProgressbarProps {
  correctCount: number;
  questions: number;
}

export const Progressbar: React.FC<ProgressbarProps> = props => {
  const { correctCount, questions } = props;
  const calculatePersent = () => {
    return Math.round((correctCount / questions) * 100);
  };
  return (
    <>
      {/* <p>{calculatePersent()}</p> */}
      <PersentContainer>
        <CircularProgressbar
          value={calculatePersent()}
          text={`${calculatePersent()}%`}
        />
      </PersentContainer>
    </>
  );
};
