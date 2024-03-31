import React from 'react';
import { Button } from './BurgerComponent.styled';

export const BurgerComponent = ({ isActive, onClick }) => {
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
