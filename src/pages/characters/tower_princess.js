import * as React from 'react';
import { Page, Character } from '../../components';

import tower1 from '../../images/rapunzel/punzie1.jpg';
import tower2 from '../../images/rapunzel/punzie2.jpg';

const images = [
  {
    src: tower1,
    alt: 'Tower Princess',
    key: 'tower1',
  }, {
    src: tower2,
    alt: 'Tower Princess',
    key: 'tower2',
  },
]

export default () => (
  <Page>
    <Character name="Tower Princess" images={images} />
  </Page>
);