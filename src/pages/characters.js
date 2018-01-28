import React from 'react';
import { Page, Frame } from '../components';

import './characters.css';

const princesses = [
  {
    label: 'Ice Sisters',
    link: 'ice_sisters',
    image: 'ice_sisters'
  }, {
    label: 'Island Princess',
    link: 'island_princess',
    image: 'island_princess'
  }, {
    label: 'Cinder Princess',
    link: 'cinder_princess',
    image: 'cinderella'
  }, {
    label: 'Mermaid Princess',
    link: 'mermaid_princess',
    image: 'mermaid_princess'
  }, {
    label: 'Sleeping Princess',
    link: 'sleeping_princess',
    image: 'sleeping_princess'
  }, {
    label: 'Apple Princess',
    link: 'apple_princess',
    image: 'apple_princess'
  }, {
    label: 'Tower Princess',
    link: 'tower_princess',
    image: 'tower_princess'
  }, {
    label: 'Princess Beauty',
    link: 'princess_beauty',
    image: 'princess_beauty'
  }, {
    label: 'Brave Princess',
    link: 'brave_princess',
    image: 'brave_princess'
  }, {
    label: 'Spanish Princess',
    link: 'spanish_princess',
    image: 'spanish_princess'
  }, {
    label: 'The Frog Princess',
    link: 'frog_princess',
    image: 'frog_princess'
  }, {
    label: 'Arabian Princess',
    link: 'arabian_princess',
    image: 'arabian_princess'
  },
];

export default () => (
  <Page>
    <section className="character-wrapper">
      { princesses.map(p => <Frame key={p.image} {...p} />)}
    </section>
  </Page>
)