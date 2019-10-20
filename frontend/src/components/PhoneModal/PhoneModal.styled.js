import styled from 'styled-components';

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    display: "grid",
    width: "90%",
    minHeight: "75%",
    borderWidth: 0,
    padding: 50,
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 100
  }
}

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
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 60px;
  right: 60px;
  height: 40px;
  width: 40px;
`;
