import React, { FC } from 'react';
import { Container } from './BlurBackground.styled';

interface BlurBackgroundProps {
  onClick: () => void;
}

export const BlurBackground: FC<BlurBackgroundProps> = ({ onClick }) => {
  return <Container onClick={onClick}></Container>;
};
