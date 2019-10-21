import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const CardContainer = styled.div`
  margin: 10px;
  border: 4px solid black;
  box-sizing: border-box;
  border-radius: 15px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding: 70px;
  width: 90%;

  @media ${device.mobileL} {
    width: 60%;
  };

  @media ${device.laptop} {
    width: 30%;
  };

  @media ${device.laptopL} {
    width: 20%;
  };
`;

export const CardImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 250px;

  svg,
  img {
    align-items: center;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  padding: 30px 20px;
`;

export const CardTitle = styled.h1`
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: space-between;
`;

export const CardSubtitle = styled.h2`
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  letter-spacing: 0.2em;
  display: flex;
  justify-content: space-between;
`;

