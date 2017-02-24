import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Footer from './Footer.js';
import Footer2 from './Footer2.js';
import Footer3 from './Footer3.js';

class Menu extends React.Component {
   constructor(props) {
    super(props);
    this.state = { 
                    user:{logged:false,
                          username:"",
                          email:""},
                  }
    this.requireAuth = this.requireAuth.bind(this);

  }

 requireAuth(nextState, replace) {
    console.log(nextState)
  
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
  })

}
  render () { 
    //console.log(this.state)
    var VarFooter = this.props.location.pathname === "/" ? <Footer /> : ""
    
  return (
     <div>
      <div className="Container">
        <div className="menuContainer">
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 logo_panel">
                  <a href="/">
                  <img src="icons/logo.png" alt=""/></a>
                </div>
                
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 topright_panel">             
                    
                <form className="form pull-right" id="formLogin" action="/en/i18n/setlang/" method="post">
                <input type="hidden" name="csrfmiddlewaretoken" value="NZJaoqZK5cOA58OA5cjfdamW1dE4msQc"/>
                <input name="next" type="hidden" value=""/>
                <select name="language" className="topright_selectbox classNameic">                        
                  <option value="ru">Русский (ru)</option>              
                  <option value="en" defaultValue="selected">English (en)</option>          
                </select>
                &nbsp;<input type="submit" className="topright_panel_submit" value=">"/>
              </form>
                    
                </div>
            </div>              
            
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 menu_panel">
            <nav className="navbar pull-left" role="banner">                
              <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
              </div>
                  
              <div className="collapse navbar-collapse menupanel">
                      <ul className="nav navbar-nav">
                      <li className="active"><Link to="/" >HOME</Link></li> 
                      <li>                   <Link to="/orders">MY ORDERS</Link></li> 
                      <li>                   <Link to="/referrals">REFERRALS</Link></li>
                      <li>                   <Link to="/profile">PROFILE</Link></li>
                      </ul>
              </div>
              
            </nav>
            <ul className="pull-right auth">
            
                <li>
                  <Link to="/login" >Login</Link>
                </li>
                  &nbsp;|&nbsp;
                <li>
                    <Link to="/register" >Register</Link>
                </li>
              
            </ul>
            </div>
        </div>
            {this.props.children}

       </div>
          {VarFooter }
          <Footer2 />
          <Footer3 />

    </div>

    );
  }
}

export default Menu;