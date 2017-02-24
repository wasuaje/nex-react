import React from 'react';
import ReactDOM from 'react-dom';

class UserRegistration  extends React.Component {
     constructor(props) {
      super(props);  
      this.handleTextFieldsChange = this.handleTextFieldsChange.bind(this);
      this.clickRegister = this.clickRegister.bind(this);
      this.state = { phone: "",
                    password: "",                                        
                    passwordConfirmation: "",
                  }    
    }


  handleTextFieldsChange(elem){        
    
    var obj = {};                           
    
    if (elem.target.name === 'phone') {
      this.setState({phone: elem.target.value});             
    
    } else if (elem.target.name === 'password1') {
      this.setState({password: elem.target.value});             
    
    } else if (elem.target.name === 'password2') {
      this.setState({passwordConfirmation: elem.target.value});             
    }                                                                                    
          
  }

   clickRegister(){
    
    var placerAjax = 'https://staging.nexchange.ru/en/order/ajax/',        
        phone = this.state.phone,
        password = this.state.password,
        password2 = this.state.passwordConfirmation,
        verifyPayload = {
            "phone": phone,            
            "password": password,
            "password2": password2, 
        };

    if (phone === "") {
      window.alert("Phone can't be empty");
      return null
    }   

    if (password != password2) {
      window.alert("Passwords Don't Match");
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
          BTC - Exchange <small>User Registration</small>
        </h1>
      </div>
      <form method="post" className="form" encType="multipart/form-data">
        <input type="hidden" name="csrfmiddlewaretoken" value="qbXeeLMyEBRxM1RN7CQpAxsUTyI9wD7e"/>
        
        <div className="form-group">
          <label className="control-label" htmlFor="id_phone">Phone</label>
          <input className="form-control" id="id_phone" name="phone" placeholder="Phone" 
                 required="required" title="Enter phone number in international format. eg. +555198786543" 
                 type="tel"
                 onChange={this.handleTextFieldsChange}/>
          <span className="help-block">Enter phone number in international format. eg. +555198786543</span>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="id_password1">Password</label>
            <input className="form-control" id="id_password1" name="password1" placeholder="Password" 
                   required="required" title="" type="password"
                   onChange={this.handleTextFieldsChange}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="id_password2">Password confirmation</label>
            <input className="form-control" id="id_password2" name="password2" 
                   placeholder="Password confirmation" required="required" title="Enter the same password as before, for verification." 
                   type="password"
                   onChange={this.handleTextFieldsChange}/>
            <span className="help-block">Enter the same password as before, for verification.</span>
         </div>

        <input name="submit" className="btn btn-success btn-lg" id="submit" 
               value="Register"
               onClick={this.clickRegister} />
       </form>
      </div>
      )
  }
}

export default UserRegistration;       