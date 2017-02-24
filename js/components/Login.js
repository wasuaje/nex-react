

import React from 'react';
import ReactDOM from 'react-dom';

class Login  extends React.Component {
  render () { 
    return (
    <div> 
        <div className="page-header">
          <h1>
            BTC - Exchange <small>Login</small>
          </h1>
        </div>
        <form method="post" className="form" encType="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" value="ia5N4UYUc3rWJTCH3ATYVdt8bB9Okhx7"/>
          
          <div className="form-group"><label className="control-label" htmlFor="id_username">Phone</label>
            <input className="form-control" id="id_username" maxLength="254" name="username" placeholder="Phone" 
                 required="required" title="" type="text"/>
          </div>
        <div className="form-group"><label className="control-label" htmlFor="id_password">Password</label>
            <input className="form-control" id="id_password" name="password" placeholder="Password" 
           required="required" title="" type="password"/>
        </div>

          <input type="submit" name="submit" className="btn btn-success btn-lg" id="submit" value="Login" />
          <input type="hidden" name="next" value="/en/referrals" />
        </form>

        <p>Don't have an account? <a className="nav-link" href="/en/profile/add">Register here</a></p>
        <p>Forgot your password? <a className="nav-link" href="/en/accounts/password/reset/">Reset it here</a></p>
    </div>
    );
     }
  }

export default Login;