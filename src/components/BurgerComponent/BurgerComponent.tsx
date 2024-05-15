import React, { FC } from 'react';
import { Button } from './BurgerComponent.styled';

interface BurgerComponentProps {
  isActive: Boolean;
  onClick: () => void;
}

export const BurgerComponent: FC<BurgerComponentProps> = ({
  isActive,
  onClick,
}) => {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
    >
      <svg width="32" height="32">
        <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
      </svg>
    </Button>
  );
};
