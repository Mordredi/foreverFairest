import * as React from 'react';
import { Page, Character } from '../../components';

import beauty1 from '../../images/belle/DRO_2196.jpg';
import beauty2 from '../../images/belle/DSC_6279.jpg';
import beauty3 from '../../images/belle/DSC_6287.jpg';
import beauty4 from '../../images/belle/DSC_6381 - Version 2.jpg';
import beauty5 from '../../images/belle/DSC_6388.jpg';
import beauty6 from '../../images/belle/DSC_6398 - Version 2.jpg';
import beauty7 from '../../images/belle/DSC_6513.jpg';
import beauty8 from '../../images/belle/DSC_6555.jpg';
import beauty9 from '../../images/belle/DSC_6814.jpg';
import beauty10 from '../../images/belle/image1.jpeg';
import beauty11 from '../../images/belle/image3.jpeg';



const images = [
  {
    src: beauty1,
    alt: 'Princess Beauty',
    key: 'beauty1',
  }, {
    src: beauty2,
    alt: 'Princess Beauty',
    key: 'beauty2',
  }, {
    src: beauty3,
    alt: 'Princess Beauty',
    key: 'beauty3',
  }, {
    src: beauty4,
    alt: 'Princess Beauty',
    key: 'beauty4',
  }, {
    src: beauty5,
    alt: 'Princess Beauty',
    key: 'beauty5',
  }, {
    src: beauty6,
    alt: 'Princess Beauty',
    key: 'beauty6',
  }, {
    src: beauty7,
    alt: 'Princess Beauty',
    key: 'beauty7',
  }, {
    src: beauty8,
    alt: 'Princess Beauty',
    key: 'beauty8',
  }, {
    src: beauty9,
    alt: 'Princess Beauty',
    key: 'beauty9',
  }, {
    src: beauty10,
    alt: 'Princess Beauty',
    key: 'beauty10',
  }, {
    src: beauty11,
    alt: 'Princess Beauty',
    key: 'beauty11',
  },
];

export default () => (
  <Page>
    <Character name="Princess Beauty" images={images} />
  </Page>
);