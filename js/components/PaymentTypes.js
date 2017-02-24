import React from 'react';
import ReactDOM from 'react-dom';

class PaymentTypes  extends React.Component {    
 
  constructor(props) {
      super(props);      
        
  }

  render () {
	var msg = this.props.action===1 ? "How would you like to pay?" : "How would you like to get paid?";

	if (this.props.action===1){
		var block = ( <div><div className="col col-xs-12 col-sm-4 payment-type-trigger"
			         data-type="Alfa Bank"
			         data-identifier={this.props.cards.alfa }>
				        <div className="col col-xs-12">
				            <img src="icons/alfa.png"
				                 alt="Alfa-bank"
				                 className="payment-method-icon btn btn-primary"/>
				        </div>
				        <div className="col col-xs-12 payment-label" >
				            Alfa-bank
				        </div>
			    	  </div>                              
				    <div className="col col-xs-12 col-sm-4 payment-type-trigger"
				         data-type="Sberbank"
				         data-identifier={this.props.cards.sber} >
				        <div className="col col-xs-12">
				            <img src="icons/sber.png"
				                 alt="Sberbank"
				                 className="payment-method-icon btn btn-primary" />
				        </div>
				        <div className="col col-xs-12 payment-label">
				            Sberbank
				        </div>
				    </div></div>);
	} else {

		var block = (<div>
			<div className="col col-xs-12 col-sm-4 payment-type-trigger bank" data-type="c2c">
			        <div className="col col-xs-12">
			            <i className="fa fa-credit-card-alt fa-5 payment-method-icon btn btn-primary">
			            </i>
			        </div>
			        <div className="col col-xs-12 payment-label">
			            Card 2 card - any bank
			        </div>
			 </div>                              
			 <div className="col col-xs-12 col-sm-4 payment-type-trigger" data-type="cash">
			       <div className="col col-xs-12">
			            <i className="fa fa-money fa-5 payment-method-icon btn btn-primary">
			            </i>
			        </div>
			        <div className="col col-xs-12 payment-label">
			            Cash payment
			        </div>
			 </div>
			</div>);
	}	


	return (

			<div className="row">
			    <div className="col col-xs-12 col-sm-4 payment-type-trigger qiwi"
			         data-type="Qiwi"
			         data-identifier={this.props.cards.qiwi }>
			        <div className="col col-xs-12">
			            <img src="icons/qiwi.png"
			                 alt="Qiwi wallet"
			                 className="payment-method-icon btn btn-primary"/>
			        </div>
			        <div className="col col-xs-12 payment-label">
			            Qiwi wallet
			        </div>
			    </div>
			</div>
	);
  }
}

export default PaymentTypes;
