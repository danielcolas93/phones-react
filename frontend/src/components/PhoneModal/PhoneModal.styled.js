import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 100,
  },
};

export const PhoneModalContainer = styled.div`
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  border-style: solid;
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    height: 80vh;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 60px;
  right: 60px;
  height: 40px;
  width: 40px;
`;

export const ModalTitle = styled.h1`
  font-family: Fjalla One;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.1em;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ModalDescription = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: 0.14em;
`;

export const ModalDetailsList = styled.ul`
  width: 50%;
  border: 2px solid black;
`;

export const ModalItemList = styled.li`
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
`;
