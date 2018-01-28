import * as React from 'react';

import Link from 'gatsby-link'

import { FaInstagram, FaFacebookOfficial } from 'react-icons/lib/fa'

import logo from '../images/fflogo.png';
import princesses from '../images/group/princesses.jpg';

export const Header = () => (
  <header>
    <section className="container">
      <Link to="/"><img className="logo" src={logo} /></Link>
      <section className="social">
        <a href="https://www.facebook.com/foreverfairest/" target="_blank"><FaFacebookOfficial alt="facebook" /></a>
        <a href="https://www.instagram.com/foreverfairest/" target="_blank"><FaInstagram alt="instagram" /></a>
      </section>
    </section>
    <img src={princesses} />
  </header>
);