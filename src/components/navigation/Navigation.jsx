import { useState } from 'react';
import {
  NavbarBrand,
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar className='bg-nav navbar-dark' sticky='top' expand='md'>
      <NavbarBrand href='/'>
        <h1 className='navbar-logo mt-3 ml-4'>The DeadPool</h1>
      </NavbarBrand>
      <NavbarToggler className='navbar-toggle' onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse className='navbar-menu' navbar isOpen={menuOpen}>
        <Nav className='nav-list mx-auto justify-content-center'>
          <NavItem className='ml-lg-4 nav-item'>
            <NavLink className='text-decoration-none nav-link' to='/bets'><h3 className='mt-lg-4'>Bets</h3></NavLink>
          </NavItem>
          <NavItem className='ml-lg-4 nav-item'>
            <NavLink className='text-decoration-none nav-link' to='/deadpool'><h3 className='mt-lg-4'>DeadPool</h3></NavLink>
          </NavItem>
          <NavItem className='ml-lg-4 nav-item'>
            <NavLink className='text-decoration-none nav-link' to='/contact'><h3 className='mt-lg-4'>Contact</h3></NavLink>
          </NavItem>
          <NavItem className='nav-item'>
            <NavLink className='text-decoration-none nav-link login-btn' to='/'><h2 className=' mt-3'>Login</h2></NavLink>
          </NavItem>
          <NavItem className='nav-item ml-2'>
            <NavLink className='text-decoration-none nav-link sign-btn' to='/'><h3 className=' mt-3'>Sign Up</h3></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Navigation;