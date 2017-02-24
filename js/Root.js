"use strict";

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory , browserHistory} from 'react-router'

import Main from './components/Main.js';
import Menu from './components/Menu.js';
import MyOrders from './components/MyOrders.js';
import Login from './components/Login.js';
import Referrals from './components/Referrals.js';
import UserRegistration from './components/UserRegistration.js';
import UserProfile from './components/UserProfile.js';
import ResetPassword from './components/ResetPassword.js';
import RestrictedContainer from './components/RestrictedContainer.js';
import Cookies from 'js-cookie';

Cookies.set('user', { expires: 7 , roles: ['user']})


render((
<Router history={browserHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Main} />
        <Route path="orders" component={MyOrders} />
        <Route path="login" component={Login} />
        <Route path="register" component={UserRegistration} />
        <Route path="profile" component={UserProfile} />
        <Route path="resetp" component={ResetPassword} />
        <Route authorize={['user']} component={RestrictedContainer}>          
          <Route path="referrals"   component={Referrals} />          
        </Route>
        
    </Route>
  </Router>  
), document.getElementById('app'))
