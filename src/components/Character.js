import * as React from 'react';
import Link from 'gatsby-link'; 
import './Character.css';

export const Character = ({ name, images = [] }) => (
  <section className="character">
    <h1>{name}</h1>
    <section>
      { images.map(i => <section className="character-thumbnail" key={i.key}><img {...i} /></section>) }
    </section>
    <Link to="/characters">Return to all characters</Link>
  </section>
);