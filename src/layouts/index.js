import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header } from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { Modal } from '../components';

import './index.css'

class TemplateWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { modal: true };
  }

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState(state => ({ modal: false }));
  }
  render() {
    const { children } = this.props;
    const { modal } = this.state;
    return (
      <main>
        <Helmet>
          <title>Forever Fairest</title>
          <meta name="description" content="Toronto based childrens entertainment" />
          <meta name="keywords" content="princess party, entertainent, Toronto" />
          <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Asul:700" rel="stylesheet" />
          <style>
            {`
              body {
                margin: 0;
                font-size: 16px;
                line-height: 1.5rem;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              }
              main {
                padding-top: 3rem;
              }
              img {
                width: 100%;
                height: auto;
              }
            
              nav {
                padding: 0 2rem;
                text-align: right;
                top: 0;
                background: hsla(0, 0%, 100%, .9);
                box-shadow: 0 0 6px #ccc;
                z-index: 100;
                font-family: 'Asul', sans-serif;
                border-bottom: 1px solid #eee;
                height: 3rem;
                line-height: 3rem;
                position: fixed;
                width: 100%;
              }

              .menu-icon {
                fill: hsl(11, 56%, 71%);
                width: 1.5rem;
                height: 1.5rem;
                cursor: pointer;
              }

              .menu-icon:hover {
                fill: hsl(11, 56%, 60%);
              }

              .nav {
                text-align: center;
                display: none;
                background: hsl(0, 0%, 100%);
              }

              .nav a {
                display: block;
              }

              .nav.open {
                display: block;
              }

              @media screen and (min-width: 620px) {
                .menu-icon {
                  display: none;
                }
                
                nav {
                  padding: 0;
                }

                .nav {
                  display: block;
                  background: none;
                }

                .nav a {
                  display: inline-block;
                }
              }

              header {
                position: relative;
              }

              header .container {
                padding-top: 2rem;
                max-width: 960px;
                margin: 0 auto;
                position: relative;
              }

              header .social {
                position: absolute;
                top: 1rem;
                right: 1rem;
              }

              header .social svg {
                fill: hsl(11, 56%, 71%);
                width: 2rem;
                height: 2rem;
                margin-left: .2rem;
              }
            
              header .social svg:hover {
                fill: hsl(11, 56%, 60%);
              }

              nav span,
              nav a {
                display: inline-block;
                font-size: .8rem;
                padding: 0 .5rem;
                cursor: pointer;
                color: rgb(0, 0, 0);
                text-decoration: none;
              }

              nav span:hover,
              nav a:hover,
              a.active {
                color: hsl(11, 56%, 71%);
              }

              .logo {
                width: 22rem;
                max-width: calc(100% - 2rem);
                height: auto;
                display: block;
                margin: 0 auto 2rem;
              }
            `}
          </style>
        </Helmet>
        <Nav />
        <Header />
        <article>
          {children()}
        </article>
        <Footer />
      </main>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
