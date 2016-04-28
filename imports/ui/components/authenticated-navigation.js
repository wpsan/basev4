/* ASLI
import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};


export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
*/

import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};


export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>
      <LinkContainer to="/bookingList">
        <NavItem eventKey={ 3 } href="/bookingList">Booking</NavItem>
      </LinkContainer>
      <LinkContainer to="/historyList">
        <NavItem eventKey={ 3 } href="/historyList">History</NavItem>
      </LinkContainer>
      <LinkContainer to="/cityList">
        <NavItem eventKey={ 3 } href="/cityList">City</NavItem>
      </LinkContainer>
      <LinkContainer to="/helipadList">
        <NavItem eventKey={ 3 } href="/helipadList">Helipad</NavItem>
      </LinkContainer>
      <LinkContainer to="/fareList">
        <NavItem eventKey={ 3 } href="/fareList">Fare</NavItem>
      </LinkContainer>
      <LinkContainer to="/Reconciliation">
        <NavItem eventKey={ 3 } href="/Reconciliation">Reconciliation</NavItem>
      </LinkContainer> 
      <LinkContainer to="/userManagement">
        <NavItem eventKey={ 3 } href="/userManagement">User Management</NavItem>
      </LinkContainer> 
      <LinkContainer to="/memberList">
        <NavItem eventKey={ 3 } href="/memberList">Member List</NavItem>
      </LinkContainer>     
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);