import React from 'react';
import ReactDOM from 'react-dom';

class AmountCash  extends React.Component {
   constructor(props) {
      super(props);           
    }
   
  render () {     
    //console.log(this.props)    

    return (
      <div className="price_box_selectbox_cont">            
            <input type="text" 
              className="price_box_selectbox_cont_textbox amount amount-cash" 
              name="amount-cash"
              placeholder={this.props.amountCash}
              onChange={this.props.handleTextFieldsChange}>
              </input>                    
             <select name="currency_from"
                className="currency-select currency-from
                           price_box_selectbox_cont_selectbox classic">
                   <option value="GBP">USD</option>
                   <option value="USD">GBP</option>
                   <option value="EUR">EUR</option>
             </select>
      </div>                
        )
  }
}

export default AmountCash;       