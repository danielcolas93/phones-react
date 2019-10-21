import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
  modalStyles,
  PhoneModalContainer,
  CloseIcon,
  ModalTitle,
  ModalDescription,
  ModalDetailsList,
  ModalItemList,
} from './PhoneModal.styled';
import PhoneImage from '../PhoneImage';
import { modalSelector } from '../../redux/common/common-selectors';
import { selectedPhoneSelector } from '../../redux/phones/phones-selectors';
import { removeSelectedPhone as removeSelectedPhoneAction } from '../../redux/phones/phones-actions';
import { hideModal as hideModalAction } from '../../redux/common/common-actions';

export const PhoneModal = ({ selectedPhone, isModalShown, hideModal }) => {
  const {
    color,
    description,
    imageFileName,
    manufacturer,
    name,
    price,
    processor,
    ram,
    screen,
  } = selectedPhone;
  return (
    <Modal
      isOpen={isModalShown}
      onRequestClose={hideModal}
      style={modalStyles}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <PhoneModalContainer>
        <CloseIcon src={'assets/images/icons/close.png'} onClick={hideModal}/>
        <PhoneImage image={imageFileName}></PhoneImage>
        <ModalTitle>{ name }</ModalTitle>
        <ModalDescription>{ description }</ModalDescription>
        <ModalTitle>Description</ModalTitle>
        <ModalDetailsList>
          <ModalItemList>Color: { color }</ModalItemList>
          <ModalItemList>Manufacturer: { manufacturer }</ModalItemList>
          <ModalItemList>Processor: { processor }</ModalItemList>
          <ModalItemList>RAM: { ram }</ModalItemList><ModalItemList>Screen: { screen }</ModalItemList>
          <ModalItemList>Price: { price }€</ModalItemList>
        </ModalDetailsList>  
      </PhoneModalContainer>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isModalShown: modalSelector(state),
  selectedPhone: selectedPhoneSelector(state),
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => {
    dispatch(removeSelectedPhoneAction())
    dispatch(hideModalAction())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneModal);
