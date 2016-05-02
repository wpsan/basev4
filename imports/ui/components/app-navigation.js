import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <Navbar inverse>
     <div className="container-fluid"> 
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Whitesky Helicity</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        { this.renderNavigation(this.props.hasUser) }
      </Navbar.Collapse>
      </div>
    </Navbar>;
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};
