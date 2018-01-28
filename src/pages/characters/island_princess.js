import * as React from 'react';
import { Page, Character } from '../../components';
import island1 from '../../images/moana/DSC_0070_2.jpg';
import island2 from '../../images/moana/DSC_0090 - Version 2.jpg';
import island3 from '../../images/moana/DSC_0092.jpg';
import island4 from '../../images/moana/DSC_0226_2.jpg';
import island5 from '../../images/moana/moana.jpeg';

const images = [
  {
    src: island1,
    alt: 'Island Princess',
    key: 'island1',
  }, {
    src: island2,
    alt: 'Island Princess',
    key: 'island2',
  }, {
    src: island3,
    alt: 'Island Princess',
    key: 'island3',
  }, {
    src: island4,
    alt: 'Island Princess',
    key: 'island4',
  }, {
    src: island5,
    alt: 'Island Princess',
    key: 'island5',
  },
];

export default () => (
  <Page>
    <Character name="Island Princess" images={images} />
  </Page>
);