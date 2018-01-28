import * as React from 'react';
import { Page, Character } from '../../components'

import mermaid1 from '../../images/ariel/image8.jpeg'
import mermaid2 from '../../images/ariel/image9.jpeg'
import mermaid3 from '../../images/ariel/mermaid1.jpg'
import mermaid4 from '../../images/ariel/mermaid2.jpg'
import mermaid5 from '../../images/ariel/mermaid3.jpg'

const images = [
  {
    src: mermaid1,
    alt: 'Mermaid Princess',
    key: 'mermaid1',
  }, {
    src: mermaid2,
    alt: 'Mermaid Princess',
    key: 'mermaid2',
  }, {
    src: mermaid3,
    alt: 'Mermaid Princess',
    key: 'mermaid3',
  }, {
    src: mermaid4,
    alt: 'Mermaid Princess',
    key: 'mermaid4',
  }, {
    src: mermaid5,
    alt: 'Mermaid Princess',
    key: 'mermaid5',
  },
];

export default () => (
  <Page>
    <Character name="Mermaid Princess" images={images} />
  </Page>
);