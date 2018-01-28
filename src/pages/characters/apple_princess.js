import * as React from 'react';
import { Page, Character } from '../../components';

import apple1 from '../../images/snow/image1 (1).jpeg'
import apple2 from '../../images/snow/image2.jpeg'
import apple3 from '../../images/snow/snow.jpeg'
import apple4 from '../../images/snow/snow2.jpeg'
import apple5 from '../../images/snow/snow3.jpeg'


const images = [
  {
    src: apple1,
    key: 'apple1',
    alt: 'Apple Princess'
  }, {
    src: apple2,
    key: 'apple2',
    alt: 'Apple Princess'
  }, {
    src: apple3,
    key: 'apple3',
    alt: 'Apple Princess'
  }, {
    src: apple4,
    key: 'apple4',
    alt: 'Apple Princess'
  }, {
    src: apple5,
    key: 'apple5',
    alt: 'Apple Princess'
  },
];

export default () => (
  <Page>
    <Character name="Apple Princess" images={images} />
  </Page>
);