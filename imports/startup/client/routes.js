/* ASLI
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
*/
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
//====== NAVBAR
import { BookingList } from '../../ui/pages/bookingList';
import { HistoryList } from '../../ui/pages/historyList';
import { CityList } from '../../ui/pages/cityList';
import { HelipadList } from '../../ui/pages/helipadList';
import { FareList } from '../../ui/pages/fareList';
//====== NAVBAR DROPDOWN
import { ImportSettlement } from '../../ui/pages/importSettlement';
import { Reconcile } from '../../ui/pages/reconcile';
import { Settlement } from '../../ui/pages/settlement';


//====== END NAVBAR
import { UserManagement } from '../../ui/pages/userManagement';
import { MemberList } from '../../ui/pages/memberList';

import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="BookingList" path="/bookingList" component={ BookingList } onEnter={ requireAuth } />
        <Route name="HistoryList" path="/historyList" component={ HistoryList } onEnter={ requireAuth } />
        <Route name="CityList" path="/cityList" component={ CityList } onEnter={ requireAuth } />
        <Route name="HelipadList" path="/helipadList" component={ HelipadList } onEnter={ requireAuth } />
        <Route name="FareList" path="/fareList" component={ FareList } onEnter={ requireAuth } />

        <Route name="ImportSettlement" path="/importSettlement" component={ ImportSettlement } onEnter={ requireAuth } />
        <Route name="Reconcile" path="/reconcile" component={ Reconcile } onEnter={ requireAuth } />
        <Route name="Settlement" path="/settlement" component={ Settlement } onEnter={ requireAuth } />

        <Route name="UserManagement" path="/userManagement" component={ UserManagement } onEnter={ requireAuth } />
        <Route name="MemberList" path="/memberList" component={ MemberList } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
