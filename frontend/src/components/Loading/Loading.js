import React from 'react';
import Loader from 'react-loader-spinner';
import { LoadingOverlay } from './Loading.styled';

const Loading = () => (
  <LoadingOverlay>
    <Loader type="ThreeDots" color="black" height={200} width={200} />
  </LoadingOverlay>
);

export default Loading;