import React from 'react';
import ReactDOM from 'react-dom';

class AmountCoin  extends React.Component {
     constructor(props) {
      super(props);           
    }
 
 componentDidMount() {      
    
    }
   
  render () { 
    //console.log(this.props)    
    return (
      <div className="price_box_selectbox_cont">            
            <input type="text" 
              className="price_box_selectbox_cont_textbox amount amount-coin" 
              name="amount-coin"
              placeholder={this.props.amountCoin}
              onChange={this.props.handleTextFieldsChange}>
              </input>                    
             <select name="currency_to"
                className="currency-select currency-to
                           currency-to price_box_selectbox_cont_selectbox classic">
                   <option value="BTC">BTC</option>                   
             </select>
      </div>       
        )
  }
}

export default AmountCoin;       