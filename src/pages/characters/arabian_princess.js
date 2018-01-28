import * as React from 'react';
import { Page, Character } from '../../components';
import arabian1 from '../../images/jasmine/jasmine1.jpg';
import arabian2 from '../../images/jasmine/jasmine2.jpg';

const images = [
  {
    src: arabian1,
    alt: 'Arabian Princess',
    key: 'arabian1',
  }, {
    src: arabian2,
    alt: 'Arabian Princess',
    key: 'arabian2',
  },
]; 

export default () => (
  <Page>
    <Character name="Arabian Princess" images={images} />
  </Page>
);