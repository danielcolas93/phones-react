import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardBox from '../../components/CardBox';
import Loading from '../../components/Loading';
import { phonesSelector, isLoadingPhonesSelector } from '../../redux/phones/phones-selectors';
import { getPhonesStart } from '../../redux/phones/phones-actions';

const PhoneListSection = ({ getPhones, isLoading, phones }) => {
  useEffect(() => {
    getPhones();
  }, [getPhones]);
  return isLoading ? <Loading /> : <CardBox phones={phones} />;
};

const mapStateToProps = state => ({
  isLoading: isLoadingPhonesSelector(state),
  phones: phonesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListSection);