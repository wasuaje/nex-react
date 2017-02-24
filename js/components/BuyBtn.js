import React from 'react';
import ReactDOM from 'react-dom';

class BuyBtn  extends React.Component {
   constructor(props) {
      super(props);
      
    }
   
  render () {     
   //console.log("buy",this.props)
    return (

        <a href="javascript:void(0)" 
            className="trigger trigger-buy"
                    onClick={this.props.buyBtnClick}>
            Buy</a>        
      );
   }
}

export default BuyBtn;