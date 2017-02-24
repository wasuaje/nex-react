import React from 'react';
import ReactDOM from 'react-dom';

class Footer2  extends React.Component {
  render () { 
    return (

      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 footer">
        <div className="footer_container">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <a href="#"><img src="icons/logo-footer.png" alt="NEXCHANGE" className="footer_logo"/></a>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <h4>ACCOUNT </h4>
                  
                      <a href="/login">Login</a>
                <a href="/profile">SignUp</a>                  
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <h4>ABOUT </h4>
                  <a href="/about">About Us</a>
                  <a href="/careers">Careers</a>
                  <a href="/press">Press</a>
                  <a href="/conference">Conference</a>
                  <a href="/legal_Privacy">Legal &amp; Privacy</a>
                  <a href="/security">Security</a>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <h4>RESOURCES </h4>
                  <a href="/faq">FAQ</a>
                  <a href="/blog">Blog</a>
                  <a href="/fees">Fees</a>
                  <a href="/support">Support</a>
                  <a href="/trading_guide">Trading Guide</a>
              </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <h4>Social</h4>
            <a href="/twitter" className="footer_social"><img src="icons/tw-icon.png" alt="Twitter"/></a>
             <a href="/facebook" className="footer_social"><img src="icons/fb-icon.png" alt="Facebook"/></a>
            </div>
        </div>
      </div>
   
        );
     }
  }

export default Footer2;

