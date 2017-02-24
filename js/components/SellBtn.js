import React from 'react';
import ReactDOM from 'react-dom';

class SellBtn  extends React.Component {
  constructor(props) {
      super(props);
      
   }
  
  render () {     
     //console.log("sell",this.props)
    return (                    
        <a href="javascript:void(0)" className="price_box2_a trigger trigger-sell"
                    onClick={this.props.sellBtnClick}
                    >
            Sell</a> 
        
      );
   }
}

export default SellBtn;