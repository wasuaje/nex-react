import React from 'react';
import ReactDOM from 'react-dom';

class StepConfirm  extends React.Component {

 constructor(props) {
    super(props);      
    /*this.sendBtnClick = this.sendBtnClick.bind(this);
    this.goBtnClick = this.goBtnClick.bind(this);
    this.txtOnChange =  this.txtOnChange.bind(this);
    this.toggleSmsSent = this.toggleSmsSent.bind(this);*/
    
  }


 componentDidMount() {          
            
    
    }   

  render () { 
    

    var action = this.props.action === null ? 1 : this.props.action,
        bank = this.props.paymentMethod.bank,
        id = this.props.paymentMethod.id;

    id = id === "None" ? "" : id

    //console.log("action",action)
    if (action === 0){
      var btnToShow = (<button className="sell-go btn btn-danger btn-lg place-order "
                        onClick={this.props.clickConfirm}>Sell</button>);
    }else{
      var btnToShow = (<button className="buy-go btn btn-success btn-lg place-order "
                        onClick={this.props.clickConfirm}>Buy</button>);
    }

 // console.log(this.props,action,btnToShow)
    return (
    <div id="menu3" className="menuSection tab-pane   panel active in">
      <div className="row menu3">
        
       <div className="row step-confirm panel">
        <h3>Your Order</h3>
        <div className="col-sm-12 center confirm-order">
            <div className="col-sm-5 col-md-5">
                <div className="col-lg-12 confirm-elem">
                    <span className="amount btc-amount-confirm">{this.props.amountCoin}</span> BTC
                </div>
            </div>
            <div className="col-sm-2 col-md-2 confirmation-elem for">
                <span>For</span>
            </div>
            <div className="col-sm-5 col-md-5 confirmation-elem">
                <div className="col-lg-12">
                    <span className="amount cash-amount-confirm">{this.props.amountCash}</span> 
                    <span className="currency">{this.props.currency.toUpperCase()}</span>
                </div>
            </div>
            <div className="col-lg-12 confirmation-elem payment-confirm">
                <span>Payment Method</span>
                <div className="payline">  </div>
            </div>
            <div className="col-lg-12 confirmation-elem">
                <span className="payment-preference-confirm">{bank}</span>
            </div>
            <div className="col-lg-12 confirmation-elem">
                <span className="payment-preference-identifier-confirm">{id}</span>
            </div>            
        
            <div className="col-lg-12"> 
                {btnToShow}
                <a href="/" className="btn place-cancel">Cancel</a>                                                
            </div>
        </div>
       </div>
      
       <div className="successOrder"></div>
      </div>
    </div>
   );
  }
}

export default StepConfirm;