import React from 'react';
import ReactDOM from 'react-dom';


class C2cSellMethModal  extends React.Component {    
 
  constructor(props) {
      super(props);              
      this.state = {bank:"C2C", id:"", owner:""}
      this.c2cTxtOnChange = this.c2cTxtOnChange.bind(this);
  }

  componentDidMount() {                      
    try{
            $("#card-form").card({
                container: '.card-wrapper',
                width: 200,
                placeholders: {
                    number: '•••• •••• •••• ••••',
                    name: 'Ivan Ivanov',
                    expiry: '••/••',
                    cvc: '•••'
                }
            });
        }
        catch(e) {}        
   
    }     
 
 c2cTxtOnChange(elem){
    var name = elem.target.name,
        value = elem.target.value;
        console.log(elem.target.name)
    
    if (name === "name"){      
      this.setState({
        owner:value
     })
    }

    if (name === "number") {      
      this.setState({
        id:value    
    	 })
    } 
  }

  render () {
	var msg = "Select payout option";  
	var userIsLogged = Object.keys(this.props.user).length > 0 ? true : false      	
	let myClick = this.props.c2cSellMethClick.bind(this, {bank:"C2C",id:this.state.id, owner:this.state.owner});	 	
 	let myBack = this.props.c2cSellMethModalBack.bind(this) 	 	
  var block= (<div>

            <div className="card-wrapper"></div>
						 <form action="" name="card-form" id="card-form">
						    Add a new payout card
						    <div className="row">
						        <div className="col col-lg-10 col-lg-offset-1 panel">
						            <div className="col col-sm-5 col-sm-offset-1 pay-row">
						                <input className="val" placeholder="Card number"
						                       type="text" name="number" onChange={this.c2cTxtOnChange}/>
						            </div>
						            <div className="col col-sm-5 pay-row">
						                <input placeholder="Full name" type="text"
						                       name="name" className="name" onChange={this.c2cTxtOnChange}/>
						            </div>
						        </div>
						    </div>
						    <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <span className="btn btn-primary save save-card" onClick={myClick}>Go</span>
                    </div>
                </div>
						 </form>								
	 					</div>)
	
	return (
    //console.log(this.state);
			<div className="modal fade menuSection sellMethModal in" id="CardSellModal" role="dialog">
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

export default C2cSellMethModal;