import React from 'react';

import {
  Container,
  Navbar as NavBar,
} from 'react-bulma-components';
import { Link } from 'react-router-dom';

const NavLink = props => (
  <Link className={'navbar-item is-dark'} to={props.to}>
    {props.text}
  </Link>
);

const Navbar = props => (
  // eslint-disable-next-line
  <NavBar
    className="is-dark"
    role={'navigation'}
    aria-label={'main navigation'}
  >
    <Container>
      <NavBar.Brand>
        <NavBar.Item>
          <b>{props.title}</b>
        </NavBar.Item>
        <NavBar.Burger
          onClick={() => {
            let toggle = document.querySelector('.navbar-burger');
            let menu = document.querySelector('.navbar-menu');
            toggle.classList.toggle('is-active');
            menu.classList.toggle('is-active');
          }}
        />
      </NavBar.Brand>
      <NavBar.Menu>
        <NavBar.Container position={'start'}>
          <NavLink to={'/'} text={'Home'} />
          <NavLink to={'/about'} text={'About'} />
        </NavBar.Container>
      </NavBar.Menu>
    </Container>
  </NavBar>
);

export default Navbar;
