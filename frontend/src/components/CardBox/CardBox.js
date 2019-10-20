import React from 'react'
import { CardBoxContainers } from './CarBox.styled';
import Card from '../Card';

const CardBox = ({ phones = [] }) => (
    <CardBoxContainers>
        {phones.map((phone, index) => <Card key={phone.id || index} phoneDetails={phone} />)}
    </CardBoxContainers>
);

export default CardBox;
