import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, onClick}) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;