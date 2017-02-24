import React from 'react';
import ReactDOM from 'react-dom';
import BuyBtn from './BuyBtn.js';
import SellBtn from './SellBtn.js';
import AmountCash from './AmountCash.js';
import AmountCoin from './AmountCoin.js';

class StepGraph  extends React.Component {    
   constructor(props) {
      super(props);      
      
    // verify if these are really needed
    //      this.getPrice = this.getPrice.bind(this);
    //      this.animatePrice = this.animatePrice.bind(this);
    //      this.updatePrice = this.updatePrice.bind(this);
        
  }

  componentWillMount() {    
      //console.log(this.props)    
      this.props.renderChart(this.props.currency, this.props.hours);                              
      this.props.getPriceData(this.props.updateState);    
      
    }     
     

  render () { 
    //console.log(this.state);
    //console.log("refs",this.refs)

    var objPair = this.props.select_pair;
    var objRange = this.props.graph_ranges;
    var pairOptionList = Object.keys(objPair).map(function(name){
                            return <option key={name} value={name}>{objPair[name]}</option>;
                          })

    var rangeOptionList = Object.keys(objRange).map(function(name){
                            return <option key={name} value={name} >{objRange[name]}</option>;
                          })

    var loading = this.props.loading ? "loading": "";  

    return (
      <div id="menu1" className="menuSection tab-pane  active in ">      
       <div className="row menu1">  
        <div className="chart_panel_selectbox_panel">
         <div className="input-group-btn">            
              <select name="currency_pair" 
                      className="currency-select currency-pair chart_panel_selectbox classic"
                       id="curency-pair"
                       onChange={this.props.handleSelectsChange}>         
                      {pairOptionList}
             </select>
         </div>
         <div className="input-group-btn">
             <select name="graph-range" 
                      className="chart_panel_selectbox classic"
                      id="graph-range"
                      onChange={this.props.handleSelectsChange}>
                      {rangeOptionList}
             </select>
          </div>
          </div>
            <div id="container-graph" 
                 className={"container " + this.props.step} 
                 style={{margin: '0 auto',
                        position:'relative', overflow: 'hidden', 
                        width: '1166px', height: '246px', 'textAlign': 
                        'left', 'lineHeight': 'normal', 'zIndex': '0',
                        'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
                        'fontFamily': 'Gotham'
                      }}
                 >                
           </div>

          <div className="col-xs-12">
           <div className="row">            
             <div className="col-xs-5 price_box price_box_ticker">
                <span className="rate-buy">
                  {this.props.rateBuy}
                </span>
                <br/>
                <span className="currency">
                  {this.props.currency.toUpperCase()}
                </span>            
                <br/>
                <BuyBtn buyBtnClick={this.props.buyBtnClick}
                        ref="buyBtn"
                        />
              </div>
              <div className="col-xs-2"></div>
              <div className="col-xs-5 price_box price_box_ticker">            
                <span className="rate-sell">
                  {this.props.rateSell}
                </span>
                <br/>
                <span className="currency">
                  {this.props.currency.toUpperCase()}
                </span>            
                <br/>
                <SellBtn sellBtnClick={this.props.sellBtnClick} 
                                              ref="sellBtn"/> 
              </div>
            </div>
            <div className="row">            
              <div className="col-xs-5 price_box" id="pricebox_rub">            
                  <AmountCash priceData={this.props.priceData} 
                              currency={this.props.currency} 
                              handleTextFieldsChange={this.props.handleTextFieldsChange}
                              amountCash={this.props.amountCash}
                              animateIcon={this.props.animateIcon}
                              unanimateIcon={this.props.unanimateIcon}
                              ref="amountCash"

                              />
               </div>              
           
               {/*Separator div*/}
               <div className="col-xs-2 price_box_mid">
                <i className={"fa fa-refresh fa-5x exchange-sign " + loading } aria-hidden="true"></i>
               </div>
               {/*Separator div*/}           
               <div className="col-xs-5 price_box" id="pricebox_btc">            
                    <AmountCoin priceData={this.props.priceData} 
                                  currency={this.props.currency} 
                                  handleTextFieldsChange={this.props.handleTextFieldsChange}                              
                                  amountCoin={this.props.amountCoin}
                                  ref="amountCoin"
                                  />              

                </div>                        
            {/*end row  rates and buttons*/}
            </div>                   

       {/*end colx-12*/}
       </div>     
       {/*end row menu1*/}
       </div>     
      {/*end menu1*/}
      </div>
      
   );

  }
}



export default StepGraph;