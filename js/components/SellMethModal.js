import React from 'react';
import ReactDOM from 'react-dom';


class SellMethModal  extends React.Component {    
 
  constructor(props) {
      super(props);      
        this.txtOnChange = this.txtOnChange.bind(this);
        this.state = {phone: "+7"}
  }

  componentDidMount() {                      
    var phones = $(".phone");                       
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
 
      this.setState({ phone: value });   

  } 

  render () {
	var msg = "Select payout option";  
	var userIsLogged = Object.keys(this.props.user).length > 0 ? true : false     
 	let myClick = this.props.sellMethClick.bind(this, {bank:"Qiwi - Client",id:this.state.phone});	 	
 	let myBack = this.props.SellMethModalBack.bind(this)
 	var addresses = (<select></select>);
 	var myphone = userIsLogged ? this.props.user.phone: this.state.phone
 	var inputphone = (<form action="/">
										    <div className="row">
										        <div className="col col-lg-12">
										            <label htmlFor="phone"> </label>
																  <input type="text" name="phone" 
																  			className="phone val"
                       									value={myphone}
                       									onChange={this.txtOnChange}/>
										        </div>
										    </div>
										</form>);

 	if (userIsLogged) {
 			var subBlock=(<div> 				
              <div className="row">
                  <h4 className="modal-title">
                      Pick one of your saved accounts
                  </h4>
              </div>
              <div className="row">
                  <div className="col col-xs-12">
                      {addresses}                      
                  </div>
              </div>
              <div className="row">
                  <div className="col col-xs-12">
                      <span className="btn btn-primary">"Use this "|add:method</span>
                  </div>
              </div>                

 			</div>)
 	} else {
			var subBlock=(<div></div>)
 	}

	 var block= (<div>

            <div className="payment-widget">
                {subBlock}
                {inputphone}
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <span className="btn btn-primary save save-card" onClick={myClick}>Go</span>
                    </div>
                </div>
            </div>
								

	 					</div>)
	
	return (
    //console.log(this.state);
			<div className="modal fade menuSection sellMethModal" id="sellMethModal" role="dialog">
			    <div className="modal-dialog">			      
			      <div className="modal-content">
			        <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal">×</button>
			          <h4 className="modal-title">{msg}</h4>
			        </div>
			        <div className="modal-body">
			          {block}
			        </div>
			        <div className="modal-footer">
			          <span className="btn btn-warning back back" onClick={myBack}>Back</span>
			          <span className="btn btn-default" data-dismiss="modal">Close</span>
			        </div>
			      </div>
			    </div>
			</div>


   );
  }

}

export default SellMethModal;