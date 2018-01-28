import * as React from 'react';
import { Page, Character } from '../../components';

import ice1 from '../../images/frozen/DRO_1004.jpg';
import ice2 from '../../images/frozen/anna1.jpg';
import ice3 from '../../images/frozen/DRO_1056.jpg';
import ice4 from '../../images/frozen/image1 (3).jpeg';

const images = [
  {
    src: ice1,
    alt: 'Ice Sisters',
    key: 'ice1',
  }, {
    src: ice2,
    alt: 'Ice Sisters',
    key: 'ice2',
  }, {
    src: ice3,
    alt: 'Ice Sisters',
    key: 'ice3',
  }, {
    src: ice4,
    alt: 'Ice Sisters',
    key: 'ice4',
  },
]

export default () => (
  <Page>
    <Character name="Ice Sisters" images={images} />
  </Page>
);