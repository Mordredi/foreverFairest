import * as React from 'react';
import Link from 'gatsby-link';
import { FaBars } from 'react-icons/lib/fa'

export class Nav extends React.PureComponent {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }

  closeMenu = () => {
    this.setState(state => ({open: false}))
  }

  render() {
    const { open } = this.state;
    return (
      <nav>
        <FaBars className="menu-icon" onClick={this.handleClick} />
        <section className={`nav ${ open ? 'open' : '' }`}>
          <Link onClick={this.closeMenu} activeClassName="active" to="/mission">OUR MISSION</Link>
          <Link onClick={this.closeMenu} activeClassName="active" to="/characters">CHARACTERS</Link>
          <Link onClick={this.closeMenu} activeClassName="active" to="/contact">CONTACT</Link>
          <Link onClick={this.closeMenu} activeClassName="active" to="/booking">BOOK NOW</Link>
          <Link onClick={this.closeMenu} activeClassName="active" to="/royal-gossip">ROYAL GOSSIP</Link>
        </section>
      </nav>
    )
  }
};