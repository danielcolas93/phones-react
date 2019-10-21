import styled from 'styled-components';

export const StyledButton = styled.button`
  background: white;
  color: black;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border-color: black;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    background: transparent;
  };
`;