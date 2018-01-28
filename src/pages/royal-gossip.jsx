import React from 'react';
import { Page, Quote } from '../components';

import './royal-gossip.css';

const quotes = [{
  name: 'Jennifer Skidmore',
  quote: '<p>As a mother of 3 little girls we have had our share of princess parties. Forever Fairest is by far the best company out there. Not only are they extremely professional and amazing to work with but their princesses exude a love for what they do that truly shines thru in their performances and meet and greets. We have also attended many of Forever Fairest performances at community events and they never disappoint. The quality of singing and acting is unbelievable and when the "real" Belle remembered my daughter\'s name after attending a party, it was so special that not only my children were filled with joy.</p><p>The members of this company just seem to have that magic touch that you want when you think about princesses. Thank you Forever Fairest for bringing the magic of a princess to our family.<p>',
}, {
  name: 'Alia El Rifai Seccia',
  quote: 'We had Belle come to.my daughter\'s 3rd birthday and let me tell you it was amazing! My daughter was so star struck! Belle was so Awesome with the children. She gave attention and time to each child and made them all feel like princesses and prince\'s. She was fantastic! Belle and Lady Samantha were incredible! They even saved the cake from falling. Thank you for making my little girls wish a reality! You ladies are so wonderful!'
}, {
  name: 'Jessica Bennett-Heywood',
  quote: 'My daughter was desperate to meet Elsa for her birthday, living in a small town we don\'t have princesses that come to parties. Forever Fairest to the rescue! They were able to do a personalised birthday message to my daughter from Elsa and made her day! Super professional and reasonably priced they went above and beyond! Highly recommend!'
}];
export default () => (
  <Page>
    <ul className="quotes">
      {quotes.map(q => <Quote key={q.name} {...q} />)}
    </ul>
  </Page>
)