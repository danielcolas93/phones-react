import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardBox from '../../../components/CardBox';
import { phonesSelector } from '../../../redux/phones/phones-selectors';
import { getPhonesStart } from '../../../redux/phones/phones-actions';

const PhoneListSection = ({ getPhones, phones }) => {
  useEffect(() => {
    getPhones();
  }, [getPhones]);
  return <CardBox phones={phones}/>
};

const mapStateToProps = state => ({
  phones: phonesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneListSection);