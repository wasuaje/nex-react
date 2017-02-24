import React from 'react';
import ReactDOM from 'react-dom';

class NextBtn  extends React.Component {

  render () {     
    //console.log(this.props)  
    var btnText = this.props.componentsCount === this.props.activeStep ? 'Confirm' : 'Next';
    //console.log(btnText) 
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 price_box_next_cont">
          <span className="price_box_next next-step"
           onClick={this.props.onClick}>
              {btnText}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
      </div>      
      )
  }
}

export default NextBtn;

