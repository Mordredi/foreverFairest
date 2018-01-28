import * as React from 'react';
import { Page } from '../components';

import './mission.css';

export default () => (
  <Page>
    <section>
      <p className="mission-tagline">Our mission is to Enchant, Inspire, and Empower.</p>
      <section className="mission-card">
        <span className="highlight">Enchant</span>
          <p className="mission">
            We can't wait to show you what we do best! We have spent years training, and studying all your favourite fairytale Princesses. We've mastered their mannerisms, their tone of voice, their songs, and their history. When we attend your party, we are in character from the moment we knock on your door until the moment we leave. As we sing our songs and regale the children with the exciting details of our story, we promise you and all your guests will feel utterly enchanted!
        </p>
      </section>
      <section className="mission-card">
        <span className="highlight">Inspire</span>
        <p className="mission">
            We strive to not only enchant and entertain, but to inspire all the wonderful children we meet - and to show them the endless possibilities of who they can become. We believe that by encouraging imagination, talent, and creativity, that we can show all the children we meet that anything is possible through big dreams, hard work, and trusting yourself.
        </p>
      </section>
      <section className="mission-card">
        <span className="highlight">Empower</span>
        <p className="mission">
          As Princesses, we have a role to play that lasts longer than just a 60 minute party. We're all passionately dedicated to leaving a lasting impression that will stay with the children, even after the Princess returns to her palace. We strive to empower all the children we meet by instilling fundamentals of kindness, bravery, sharing, and most importantly, the inner beauty that makes them the true royal that they are.
        </p>
      </section>
    </section>
  </Page>
)