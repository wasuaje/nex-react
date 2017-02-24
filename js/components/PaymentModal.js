import React from 'react';
import ReactDOM from 'react-dom';


class PaymentModal  extends React.Component {    
 
  constructor(props) {
      super(props);      
        
  }

  render () {
		var msg = this.props.action===1 ? "How would you like to pay?" : "How would you like to get paid?";
	  let alfaClick = this.props.PayMethClick.bind(this, {bank:"Alfa Bank",id:this.props.cards.alfa});
	 	let sberClick = this.props.PayMethClick.bind(this, {bank:"Sberbank",id:this.props.cards.sber});
		let qiwiClick = this.props.PayMethClick.bind(this, {bank:"Qiwi wallet",id:this.props.cards.qiwi});
		let roboClick = this.props.PayMethClick.bind(this, {bank:"Robokassa",id:this.props.cards.robo});	
		let cashClick = this.props.PayMethClick.bind(this, {bank:"Cash",id:""});
		let c2cClick = this.props.c2cSellMethClick.bind(this);
		let qiwiclientClick = this.props.qiwiClientClick.bind(this);	    
	
	if (this.props.action===1){

	 var block= (<div>

								<div className="row buy row_type">
								    <div className="payment_title">
								        Bank
								    </div>
								                  
								        <div className="col col-xs-12 col-md-6 payment-type-trigger" data-type="Alfa Bank" data-identifier="" onClick={alfaClick}>
								        <div className="col col-xs-12">
								            <img src="icons/alfa.png" alt="Alfa-bank" className="payment-method-icon btn btn-primary"/>
								        </div>
								        <div className="col col-xs-12  ">
								            <div className="payment-label">
								                Pay with Alfa-bank
								                <a href="#" className="round-button"> &gt;</a>
								            </div>
								        </div>
								    </div>                             
								    <div className="col col-xs-12 col-md-6 payment-type-trigger" data-type="Sberbank" data-identifier="" onClick={sberClick}>
								        <div className="col col-xs-12">
								            <img src="icons/sber.png" alt="Sberbank" className="payment-method-icon btn btn-primary"/>
								        </div>
								        <div className="col col-xs-12  ">
								            <div className="payment-label">
								                Pay with Sberbank
								                <a href="#" className="round-button"> &gt;</a>
								            </div>
								        </div>

								    </div>
								                            

								</div>
								<div className="row buy row_type">

								    <div className="payment_title">
								        Wallets
								    </div>

								    <div className="col col-xs-12 col-md-6 payment-type-trigger qiwi" data-type="Qiwi" data-identifier="" onClick={qiwiClick}>
								        <div className="col col-xs-12">
								            <img src="icons/qiwi.png" alt="Qiwi wallet" className="payment-method-icon btn btn-primary"/>
								        </div>
								        <div className="col col-xs-12  ">
								            <div className="payment-label">
								                
								                    Pay with
								                
								                Qiwi wallet
								                <a href="#" className="round-button"> &gt;</a>
								            </div>
								        </div>
								    </div>
								    
								      <div className="col col-xs-12  col-md-6 payment-type-trigger robokassa" data-type="Robokassa" onClick={roboClick}>
								        <div className="col col-xs-12">
								            <img src="icons/robokassa.png" alt="Robokassa" className="payment-method-icon btn btn-primary"/>
								        </div>

								        <div className="col col-xs-12  ">
								            <div className="payment-label">
								                Pay with Robokassa
								                <a href="#" className="round-button"> &gt;</a>
								            </div>
								        </div>
								    </div>								    
								</div>
	 					</div>)

	} else {

		var block = (<div>
												
									<div className="row sell row_type">
									    <div className="payment_title">
									        Bank
									    </div>
									                          
									    <div className="col col-xs-12 col-sm-4 col-md-6 payment-type-trigger bank" data-type="c2c" onClick={c2cClick}>
									        <div className="col col-xs-12">
									            <i className="fa fa-credit-card-alt fa-5 payment-method-icon btn btn-primary" aria-hidden="true">
									            </i>
									        </div>
									        <div className="col col-xs-12  ">
									            <div className="payment-label">
									                Card 2 card - any bank
									                <a href="#" className="round-button"> &gt;</a>
									            </div>
									        </div>
									    </div>                    
									    <div className="col col-xs-12 col-sm-4 col-md-6 payment-type-trigger" data-type="cash" onClick={cashClick}>
									        <div className="col col-xs-12">
									            <i className="fa fa-money fa-5 payment-method-icon btn btn-primary" aria-hidden="true">
									            </i>
									        </div>

									        <div className="col col-xs-12  ">
									            <div className="payment-label">
									                Cash payment
									                <a href="#" className="round-button"> &gt;</a>
									            </div>
									        </div>
									    </div>
									                             

									</div>

									<div className="row sell row_type">

									    <div className="payment_title">
									        Wallets
									    </div>

									    <div className="col col-xs-12 col-md-6 payment-type-trigger qiwi" data-type="Qiwi" data-identifier="" onClick={qiwiclientClick}>
									        <div className="col col-xs-12">
									            <img src="icons/qiwi.png" alt="Qiwi wallet" className="payment-method-icon btn btn-primary"/>
									        </div>
									        <div className="col col-xs-12  ">
									            <div className="payment-label">
									                
									                Qiwi wallet
									                <a href="#" className="round-button"> &gt;</a>
									            </div>
									        </div>
									    </div>
									    
									</div>
			</div>);
	}	


	return (

    //console.log(this.state);
		<div className="modal fade menuSection" id="PayMethModal" role="dialog">
		    <div className="modal-dialog">

		      {/*<!-- Modal content-->*/}
		      <div className="modal-content">
		        <div className="modal-header">
		          <button type="button" className="close" data-dismiss="modal">×</button>
		                <h4 className="modal-title"> {msg} </h4>
		        </div>
		        <div className="modal-body">
		        	{block}				     		     
		       </div>

		        <div className="modal-footer">
		          <button type="button" className="btn btn-default" data-dismiss="modal">
		              Close
		          </button>
		        </div>
		      </div>
		    </div>
		</div>
   );
  }

}

export default PaymentModal;