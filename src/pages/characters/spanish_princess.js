import * as React from 'react';
import { Page, Character } from '../../components';
import spanish1 from '../../images/elena/elena.jpeg';
import spanish2 from '../../images/elena/image2 (2).jpeg';

const images = [
  {
    src: spanish1,
    alt: 'Spanish Princess',
    key: 'spanish1',
  }, {
    src: spanish2,
    alt: 'Spanish Princess',
    key: 'spanish2',
  },
]


export default () => (
  <Page>
    <Character name="Spanish Princess" images={images} />
  </Page>
);