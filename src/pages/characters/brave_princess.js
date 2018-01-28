import * as React from 'react';
import { Page, Character } from '../../components';

import brave1 from '../../images/merida/image4.jpeg';
import brave2 from '../../images/merida/merida1.jpg';
import brave3 from '../../images/merida/merida2.jpg';
import brave4 from '../../images/merida/merida3.jpg';

const images = [
  {
    src: brave1,
    alt: 'Brave Princess',
    key: 'brave1',
  }, {
    src: brave2,
    alt: 'Brave Princess',
    key: 'brave2',
  }, {
    src: brave3,
    alt: 'Brave Princess',
    key: 'brave3',
  }, {
    src: brave4,
    alt: 'Brave Princess',
    key: 'brave4',
  },
];

export default () => (
  <Page>
    <Character name="Brave Princess" images={images} />
  </Page>
);