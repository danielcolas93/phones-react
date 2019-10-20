import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { modalStyles, PhoneModalContainer, CloseIcon } from './PhoneModal.styled';
import { modalSelector } from '../../redux/common/common-selectors';
import { phoneDetailsSelector } from '../../redux/phones/phones-selectors';
import { removePhoneDetails as removePhoneDetailsAction } from '../../redux/phones/phones-actions';
import { hideModal as hideModalAction } from '../../redux/common/common-actions';

export const PhoneModal = ({
  phone,
  isModalShown,
  hideModal,
}) => (
  <Modal
    isOpen={isModalShown}
    onRequestClose={hideModal}
    style={modalStyles}
    contentLabel="Modal"
    ariaHideApp={false}
  >
    <PhoneModalContainer>
      <CloseIcon src={'assets/images/icons/close.png'} onClick={hideModal}/>
    </PhoneModalContainer>
  </Modal>
);

const mapStateToProps = state => ({
  isModalShown: modalSelector(state),
  phone: phoneDetailsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => {
    dispatch(removePhoneDetailsAction())
    dispatch(hideModalAction())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneModal);
