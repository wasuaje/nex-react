
import React from 'react';
import ReactDOM from 'react-dom';
import Recaptcha from 'react-recaptcha';

// site key
const sitekey = '6LfPaAoUAAAAAOmpl6ZwPIk2Zs-30TErK48dPhcS';

// specifying your onload callback function
const callback = () => {
  console.log(' sss Done!!!!');
};

const verifyCallback = (response) => {
  console.log(response);
  console.log($('.g-recaptcha-response').val())
  console.log(recaptchaInstance)
  this.props.humanVerified=true
};

const expiredCallback = () => {
  console.log(`Recaptcha expired`);
};

// define a variable to store the recaptcha instance
let recaptchaInstance;

// handle reset
const resetRecaptcha = () => {
  recaptchaInstance.reset();
};

class GRecaptcha extends React.Component {
   constructor(props) {
      super(props);            
    }
  render() {
    return (
      <div className="col col-lg-12 ">        
      <center>
        <Recaptcha
          ref={e => recaptchaInstance = e}
          sitekey={sitekey}          
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
          expiredCallback={expiredCallback}
        />    
        </center>    
      </div>
    );
  }
}

export default GRecaptcha;