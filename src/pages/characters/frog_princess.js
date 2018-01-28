import * as React from 'react';
import { Page, Character } from '../../components';

import frog1 from '../../images/tiana/tiana1.jpg';
import frog2 from '../../images/tiana/tiana2.jpg';

const images = [
  {
    src: frog1,
    alt: 'Frog Princess',
    key: 'frog1',
  }, {
    src: frog2,
    alt: 'Frog Princess',
    key: 'frog2',
  },
];

export default () => (
  <Page>
    <Character name="Frog Princess" images={images} />
  </Page>
);