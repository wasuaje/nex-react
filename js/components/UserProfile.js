

import React from 'react';
import ReactDOM from 'react-dom';


class UserProfile  extends React.Component  {
    constructor(props) {
      super(props);  
      this.handleTextFieldsChange = this.handleTextFieldsChange.bind(this);
      this.clickUpdate = this.clickUpdate.bind(this);
      this.state = { first_name: "",
                    last_name: "",                                        
                    email: "",
                    code:"8cBkDe4i16"
                  }    
    } 

    handleTextFieldsChange(elem){        
    
        var obj = {};                           
        
        if (elem.target.name === 'first_name') {
          this.setState({first_name: elem.target.value});             
        
        } else if (elem.target.name === 'last_name') {
          this.setState({last_name: elem.target.value});             
        
        } else if (elem.target.name === 'email') {
          this.setState({email: elem.target.value});             
        }                                                                                    
          
  }

    clickUpdate(){
    
        var placerAjax = 'https://staging.nexchange.ru/en/order/ajax/',        
            first_name = this.state.first_name,
            last_name = this.state.last_name,
            email = this.state.email,
            verifyPayload = {
                "phone": first_name,            
                "password": last_name,
                "password2": email, 
            };

        if (email === "") {
          window.alert("Email can't be empty");
          return null
        
        } else {

          $.ajax({
                  type: "post",
                  url: placerAjax,
                  dataType: 'text',
                  data: verifyPayload,
                  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                  success: function (data) {
                      console.log(data)            
                      $(".successOrder").html($(data));
                      $("#orderSuccessModal").modal({backdrop: "static"});

                  },
                  error: function () {
                      window.alert("Something went wrong. Please, try again.");
                  }
              });

        }
  }

  render () { 
    return (
    <div> 

    <div className="page-header">
        <h1>
            BTC - Exchange <small>User Profile</small>
        </h1>
    </div>

        <div className="well">
            
            <div className="alert alert-danger" role="alert" style={{display:'block'}} id="alert_phone_not_verified">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> 
                Your phone number is not verified yet.
            </div> 

            <div className="alert alert-warning" role="alert" style={{display:'none'}} id="alert_verifying_phone">
                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                &nbsp;Verifying phone now...
            </div>

            

            <div className="row">
                <div className="col-md-8">
                    <div className="input-group"> 
                        <input type="text" aria-label="Insert" 
                            placeholder="Insert" className="form-control" id="verification_code"/> 
                        <div className="input-group-btn"> 
                            <button data-url="/en/profile/verifyPhone/" className="btn btn-default" type="button" 
                                    id="verify_phone_now">Verify phone now</button> 
                        </div> 
                    </div> 
                </div>

                <div className="col-md-4">
                    <a href="#" className="btn btn-success btn-sm pull-right" id="resend_sms_button" 
                        data-url="/en/profile/resendSMS/">
                        <i className="fa fa-repeat" aria-hidden="true"></i>
                        &nbsp;Send-me the token again
                    </a>
                </div>
            </div>
        </div>

    <form method="post" className="form" encType="multipart/form-data">
        <input type="hidden" name="csrfmiddlewaretoken" value="HUCJP7cjbOwvxuOEzTmcVFxGVGVrSDiY"/>

        <div className="form-group"><label className="control-label" htmlFor="id_first_name">First name</label>
            <input className="form-control" id="id_first_name" maxLength="20" name="first_name" 
                    placeholder="First name" title="" type="text"
                    onChange={this.handleTextFieldsChange}/></div>
        <div className="form-group"><label className="control-label" htmlFor="id_last_name">Last name</label>
            <input className="form-control" id="id_last_name" maxLength="20" name="last_name" 
                    placeholder="Last name" title="" type="text"
                    onChange={this.handleTextFieldsChange}/></div>
        <div className="form-group"><label className="control-label" htmlFor="id_email">Email address</label>
            <input className="form-control" id="id_email" maxLength="254" name="email" 
                    placeholder="Email address" title="" type="email"
                    onChange={this.handleTextFieldsChange}/></div>
        <div className="form-group"><label className="control-label" htmlFor="id_code">Code</label>
            <input className="form-control" id="id_code" maxLength="10" name="code" placeholder="Code" 
                required="required" title="" type="text" value={this.state.code}
                onChange={this.handleTextFieldsChange}/></div>

        <input  name="submit" className="btn btn-success btn-lg" id="submit" value="Update Profile"
                onClick={this.clickUpdate} />
    </form>

</div>
    );
     }
  }

export default UserProfile;








