import * as React from 'react';
import { Page, Character } from '../../components';
import cinder1 from '../../images/cinderella/cinderella.jpeg';
import cinder2 from '../../images/cinderella/cinderella2.jpg';
import cinder3 from '../../images/cinderella/DSC_0527 - Version 2.jpg';
import cinder4 from '../../images/cinderella/IMG_6316 - Version 2.jpg';

const images = [
  {
    src: cinder1,
    alt: 'Cinder Princess',
    key: 'cinder1',
  }, {
    src: cinder2,
    alt: 'Cinder Princess',
    key: 'cinder2',
  }, {
    src: cinder3,
    alt: 'Cinder Princess',
    key: 'cinder3',
  }, {
    src: cinder4,
    alt: 'Cinder Princess',
    key: 'cinder4',
  },
];

export default () => (
  <Page>
    <Character name="Cinder Princess" images={images} />
  </Page>
);