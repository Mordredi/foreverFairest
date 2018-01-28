import React from 'react';
import { Page, Input } from '../components';

export default () => (
  <Page>
    <form action="https://formspree.io/contact@foreverfairest.com" method="POST">
      <Input name="date">Date of party</Input>
      <Input name="characters">Character(s)</Input>
      <Input name="time">Time of Princess Arrival</Input>
      <Input name="first_name">First Name</Input>
      <Input name="last_name">Last Name</Input>
      <Input name="child">Birthday Child's Name</Input>
      <Input name="age">Age Child Will Be Turning</Input>
      <Input type="tel" name="daytime_number">Daytime Number</Input>
      <Input tyoe="tel" name="evening_number">Evening Number</Input>
      <Input name="address">Address (Include Street, City, and Postal Code)</Input>
      <p>Number of children attending (If this information is not available at present, numbers are due no later than three days before the event)</p>
      <Input name="girls">Girls</Input>
      <Input name="boys">Boys</Input>
      <label>How Did You Hear About Us
        <textarea name="referral"></textarea>
      </label>
      <label>Comments or Questions
        <textarea name="questions"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </Page>
)