import React from 'react'
import Link from 'gatsby-link'

import { Page } from '../components';
import './index.css';

const IndexPage = () => (
  <Page>
    <section>
      <h1>Please Pardon the Pixie Dust</h1>
      <p className="center"><span className="ff-highlight">Forever Fairest</span> provides the most wonderful, pixie-dust filled events in all the GTA! Our Princesses are Broadway style professionals of the highest quality, who have performed on Disney Cruise Lines, Princess Cruise Lines, and in Mirvish Productions. Our Princesses will enchant all guests, young and old, by bringing your favourite fairytale characters to life in the most magical way - leaving your guests forever spellbound!</p>
    </section>
    <p>Please contact <a href="mailto:contact@foreverfairest.com">contact@foreverfairest.com</a> with any inquiries</p>
  </Page>
)

export default IndexPage
