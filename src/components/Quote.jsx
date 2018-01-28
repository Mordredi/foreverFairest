import * as React from 'react';
import { FaQuoteLeft } from 'react-icons/lib/fa'


import './Quote.css';

export const Quote = ({name, quote}) => (
  <li className="quote-wrapper">
    <span className="quote-mark">&ldquo;</span>
    <blockquote className="quote" dangerouslySetInnerHTML={{__html: quote}} />
    <span className="quote-name">{name}</span>
  </li> 
);