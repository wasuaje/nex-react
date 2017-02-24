import React from 'react';
import ReactDOM from 'react-dom';
import GRecaptcha from './GRecaptcha.js';

class StepAuth  extends React.Component {

   constructor(props) {
      super(props);      
      this.sendBtnClick = this.sendBtnClick.bind(this);
      this.goBtnClick = this.goBtnClick.bind(this);
      this.txtOnChange =  this.txtOnChange.bind(this);
      this.toggleSmsSent = this.toggleSmsSent.bind(this);
      this.state = {smsSent: false,                                         
                    phone: "",
                    verification_code: "",
                    humanVerified: false,
                    phoneSmsSend: 'https://staging.nexchange.ru/en/api/v1/phone', 
                    phoneVerify: 'https://staging.nexchange.ru/profile/verifyPhone/', 
                    };
    }


 componentDidMount() {          
            
    var phones = $(".phone");
                       //if not used idx: remove jshint
    phones.each(function () {
          if(typeof $(this).intlTelInput === 'function') {
              // with AMD move to https://codepen.io/jackocnr/pen/RNVwPo    
              $(this).intlTelInput();
          }
      });

    }   

  txtOnChange(elem){
    var name = elem.target.name,
        value = elem.target.value;

    if (name === 'phone'){
      this.setState({ phone: value });
    } else if (name === 'verification_code'){      
      this.setState({ verification_code: value });
    }

  }      
 
  toggleSmsSent(state){
      this.setState({ smsSent: state });
  }

 sendBtnClick(){
  //function to send the sms
  console.log(this.props)
  var phone = this.state.phone,
    url = this.state.phoneSmsSend,
    payload = {'phone':phone},
    nextStep = this.props.nextStep ,
    toggleFunc = this.toggleSmsSent;
    
  //call the server to send the messg
  //need to pass the funcs because inside $.post
  //there is another namespace so this has different context
  nextStep();
  /* COMMENTED for testing next step
  $.post( url , payload, function( data ) {
            //msg sent right
          if (data.status === 'ok') {
            toggleFunc( true );  

          }else if (data.status === 'error'){              
            alert("The phone seems to be incorrect. Please, try again.");
          }
                        
        }).fail(function(){
            //msg on error
            window.alert("Something went wrong. Please, try again.");                        
        });*/
  
 }

 goBtnClick(){
  //function to call phone verification  
  var phone = this.state.phone,
      token = this.state.verification_code,
      url = this.state.phoneVerify,
      payload = {'token': token,'phone':phone },
      toggleFunc = this.toggleSmsSent ,
      nextStep = this.props.nextStep ;

    // while the api verify phone get fixed
    nextStep();
/*
   $.post( url , payload, function( data ) {
      if (data.status === 'OK') {
          //location.reload(); //TODO: Ajax update screen..
          //changes to go on on steps ->confirm
          nextStep();
      } else if (data.status === 'NOT_MATCH') {          
          alert("The code you sent was incorrect. Please, try again.");
      }

    }).fail(function(){      
        alert("Something went wrong. Please, try again.");       
    });
*/

 }

  render () { 

    var hiddenClass = this.state.smsSent ? "hidden" : "";
    var shownClass = this.state.smsSent ? "" : "hidden";
    var sendClassHidden = this.humanVerified ? "" :"hidden" ;

    return (

      <div id="menu2" className="menuSection tab-pane panel active in">
        <div className="row menu2">                        
          <div className="register">
              <h4>Phone verification</h4>
              <div className="auth-steps">
                  <div className="step1">                                          
                    <form action="/">
                        <div className="row">
                            <div className="col col-lg-12">
                                <label htmlFor="phone">Enter your phone </label>
                                   <input type="text" name="phone" id="phone" className="phone val"
                                   onChange={this.txtOnChange}
                                  placeholder="+7"/>
                            </div>
                        </div>
                        <div className="row">                            
                               <GRecaptcha humanVerified={this.state.humanVerified}/>
                        </div>                        
                    </form>
                  </div>
                  <div className={"step2 "+ shownClass}   >
                      <div className="col col-lg-12 register">
                          <label htmlFor="verification_code">
                              Enter verification code from SMS
                          </label>
                          <input type="text" name="verification_code" id="verification_code"
                                 onChange={this.txtOnChange}
                          />
                      </div>
                  </div>
              </div>
              <div className="col col-lg-12 center controls">
                  <span className={"btn btn-primary create-acc " + sendClassHidden}
                        onClick={this.sendBtnClick}>
                      Send SMS
                  </span>
                  <span className={"btn btn-danger create-acc resend " + shownClass}                  
                        onClick={this.sendBtnClick}>
                      Send again
                  </span>
                  <span className={"btn btn-primary verify-acc " + shownClass}
                        onClick={this.goBtnClick}>
                      Go
                  </span>
              </div>
          </div>          
        </div>
      </div>     


   );
  }
}

export default StepAuth;