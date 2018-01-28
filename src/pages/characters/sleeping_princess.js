import * as React from 'react';
import { Page, Character } from '../../components';
import sleeping1 from '../../images/aurora/image1.jpeg';
import sleeping2 from '../../images/aurora/image5.jpeg';
import sleeping3 from '../../images/aurora/image6.jpeg';
import sleeping4 from '../../images/aurora/image7.jpeg';
import sleeping5 from '../../images/aurora/sleeping1.jpg';

const images = [
  {
    src: sleeping1,
    alt: 'Sleeping Princess',
    key: 'sleeping1',
  }, {
    src: sleeping2,
    alt: 'Sleeping Princess',
    key: 'sleeping2',
  }, {
    src: sleeping3,
    alt: 'Sleeping Princess',
    key: 'sleeping3',
  }, {
    src: sleeping4,
    alt: 'Sleeping Princess',
    key: 'sleeping4',
  }, {
    src: sleeping5,
    alt: 'Sleeping Princess',
    key: 'sleeping5',
  },
];

export default () => (
  <Page>
    <Character name="Sleeping Princess" images={images} />
  </Page>
);