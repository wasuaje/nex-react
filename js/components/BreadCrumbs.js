import React from 'react';
import ReactDOM from 'react-dom';

class BreadCrumbs  extends React.Component {  
  render () { 
    var current_step = this.props.activeStep;
    var actionColors = this.props.actionColors
    
    if (this.props.step < current_step ) {
      var mybtnClass = actionColors['green']
    }
    if (this.props.step === current_step ) {
      var mybtnClass = actionColors['yellow']
    }
    return (      
      <div className={"step_panel_box process-step step" + this.props.step} >
       <a href="menu" data-toggle="tab">
       <img src={"icons/" + this.props.icon} alt="" className="step-icon" alt=""/> 
         <p>{this.props.name}</p>       
        </a>
      </div>     

   );
  }
}

export default BreadCrumbs;