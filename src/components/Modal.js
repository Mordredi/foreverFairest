import * as React from 'react';
import { FaClose } from 'react-icons/lib/fa';
import './Modal.css';

export const Modal = ({ handleClick }) => (
  <section className="overlay" onClick={handleClick}>
    <section className="modal">
      <FaClose onClick={handleClick} />
      <h1>Like us on Facebook!</h1> 
      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fforeverfairest&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="450" height="80" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
    </section>
  </section>
);