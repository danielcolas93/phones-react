import React from 'react';
import { Img } from './PhoneImage.styled';

const PhoneImage = ({ image }) => {
  return <Img src={`assets/images/phones/${image}`} />;
};

export default PhoneImage;
