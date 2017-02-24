


import React from 'react';
import ReactDOM from 'react-dom';


class ResetPassword  extends React.Component  {
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
            BTC - Exchange
              <small>Password reset</small>
          </h1>
        </div>
        <div className="row">
            <div className="col-md-8 col-md-offset-2">           
                <h2>Forgot your password? </h2>
                <p>
                    Please inform the e-mail that you have registered in your profile and we will send you instructions to reset your pasword.
                </p>

                <form method="post" action="">
                    <input type="hidden" name="csrfmiddlewaretoken" value="HUCJP7cjbOwvxuOEzTmcVFxGVGVrSDiY"/>

                    <div className="form-group"><label className="control-label" htmlFor="id_email">Email</label>
                        <input className="form-control" id="id_email" maxLength="254" name="email" placeholder="Email" 
                            required="required" title="" type="email"/>
                    </div>
                    
                    <input type="submit" name="submit" className="btn btn-success btn-lg" id="submit" value="Send-me instructions via e-mail"/>
                </form>
            </div>
        </div>

    </div>

    );
     }
  }

export default ResetPassword;