import React from 'react';
import ReactDOM from 'react-dom';
import { AuthorizedComponent } from 'react-router-role-authorization';
import Cookies from 'js-cookie';


class RestrictedContainer  extends AuthorizedComponent  {
  constructor(props) {
    super(props);

    this.userRoles = Cookies.getJSON('user').roles;
    this.notAuthorizedPath = '/login';
  }

 render() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default RestrictedContainer;