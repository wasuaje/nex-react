"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import StepGraph from './StepGraph.js';
import BreadCrumbs from './BreadCrumbs.js';
import StepAuth from './StepAuth.js';
import StepConfirm from './StepConfirm.js';
import NextBtn from './NextBtn.js';
import Menu from './Menu.js';
import PaymentModal from './PaymentModal.js';
import SellMethModal from './SellMethModal.js';
import C2cSellMethModal from './C2cSellMethModal.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.buyBtnClick = this.buyBtnClick.bind(this);
    this.sellBtnClick = this.sellBtnClick.bind(this);
    //second step binds
    this.renderChart = this.renderChart.bind(this);
    this.handleSelectsChange = this.handleSelectsChange.bind(this);
    this.handleTextFieldsChange = this.handleTextFieldsChange.bind(this);
    this.responseToChart = this.responseToChart.bind(this);
    this.updateState =this.updateState.bind(this);
    this.getPriceData = this.getPriceData.bind(this);
    this.doMath = this.doMath.bind(this);
    this.updateCashState = this.updateCashState.bind(this);
    this.togglePayMethModal = this.togglePayMethModal.bind(this);
    this.getCardsData = this.getCardsData.bind(this);
    this.updateCardsState = this.updateCardsState.bind(this);
    this.PayMethClick = this.PayMethClick.bind(this);
    this.sellMethClick = this.sellMethClick.bind(this);
    this.SellMethModalBack = this.SellMethModalBack.bind(this);
    this.c2cSellMethModalBack =this.c2cSellMethModalBack.bind(this);
    this.c2cSellMethClick = this.c2cSellMethClick.bind(this);    
    this.clickConfirm = this.clickConfirm.bind(this);
    this.unanimateIcon = this.unanimateIcon.bind(this);
    this.animateIcon = this.animateIcon.bind(this);

        //action 1 but 0 sell null entering page
    this.state = { currentStep: 1,
                    action: null,                    
                    btn_action: 'blue',
                    loading: 0,
                    cards_url: 'https://staging.nexchange.ru/en/api/v1/ajaxcards/', 
                    cards:{},
                    user:{},
                    paymentMethod:{},                  
                    components : {
                        1: StepGraph,
                        2: StepAuth,
                        3: StepConfirm
                      },
                    actionColors : {
                      'blue'  : "btn-info",
                      'green' : "btn-success",
                      'red'   : "btn-danger",
                      'yellow': "btn-warning"
                      },
                      breadCrumbs: {
                        1:{name: "Order", step: 1, icon:"step_circle.png"},
                        2:{name: "Login", step: 2, icon:"step_circle2.png"},
                        3:{name: "Confirm", step: 3, icon:"step_circle3.png"}
                        },    
                    //states used in second step
                     rateSell: 0.00,
                     rateBuy: 0.00,                     
                     currency: 'rub',  
                     hours: '1',
                     amountCoin: 0.1,
                     amountCash: 0.00,
                     priceData: {},
                     select_pair: {'rub':'BTC/RUB',
                                  'usd':'BTC/USD',
                                  'eur':'BTC/EUR'},
                     graph_ranges: {'1':'1 Hour',
                                  '4':'4 Hours',
                                  '6':'6 Hours',
                                  '8':'8 Hours',
                                  '12':'12 Hours',
                                  '16':'16 Hours',
                                  '24':'24 Hours'}, // TODO next line to be fixed, how???
                    tickerLatestUrl : 'https://staging.nexchange.ru/en/api/v1/price/latest',
                    //states for third step
                  };
  }

  animateIcon(){
    this.setState({ loading: 1}); 
    setTimeout(this.unanimateIcon, 500)

  }

  unanimateIcon(){
    this.setState({ loading: 0});  
  }
    

  nextStep() {
    var nextStatus = (this.state.currentStep === 3 ? 1 : this.state.currentStep + 1 );          
      
    
    if (this.state.currentStep === 1 && Object.keys(this.state.paymentMethod).length===0) {
        this.setState({
          currentStep: nextStatus
        }, function () {this.getCardsData(this.updateCardsState); } );
    
    }else{
        this.setState({
          currentStep: nextStatus
        });
    }
    
  }
  
  togglePayMethModal(){

    $("#PayMethModal").modal('toggle');

  }

  toggleSellMethModal(){

    $("#PayMethModal").modal('toggle');

    $("#sellMethModal").modal('toggle');

  }  

   SellMethModalBack(){

    $("#sellMethModal").modal('toggle');

    $("#PayMethModal").modal('toggle');  

  }  

  toggleC2cSellMethModal(){

    $("#PayMethModal").modal('toggle');

    $("#CardSellModal").modal('toggle');

  }  
   
  c2cSellMethModalBack(){

    $("#CardSellModal").modal('toggle');

    $("#PayMethModal").modal('toggle');  

  }  

  PayMethClick(obj){
   var nextStatus = (this.state.currentStep === 3 ? 1 : this.state.currentStep + 1 ); 
    //console.log(obj)
    this.setState({
          paymentMethod: obj,    
          currentStep: nextStatus      
         })

    $("#PayMethModal").modal('toggle');

  }

  sellMethClick(obj){
    var nextStatus = (this.state.currentStep === 3 ? 1 : this.state.currentStep + 1 ); 
    //console.log(obj)    

    this.setState({
          paymentMethod: obj,    
          currentStep: nextStatus      
         })
    
    $("#sellMethModal").modal('toggle');    

  }
  
  c2cSellMethClick(obj){
    var nextStatus = (this.state.currentStep === 3 ? 1 : this.state.currentStep + 1 ); 
    //console.log(obj)        
    this.setState({
          paymentMethod: obj,    
          currentStep: nextStatus      
         })

    $("#CardSellModal").modal('toggle');

  }

  buyBtnClick(){
     var obj = this.doMath('amount-coin', this.state.amountCoin, 1);
    
     this.setState({
          action: 1,
          btn_action:'green',
          amountCoin: obj.coins,
          amountCash: obj.cash
        }, function () {this.getCardsData(this.updateCardsState); } );

    }

  sellBtnClick(){
    //console.log("1",this.state)

     var obj = this.doMath('amount-coin', this.state.amountCoin, 0);
     
     this.setState({
          action: 0,
          btn_action:'red',
          amountCoin: obj.coins,
          amountCash: obj.cash
        }, function () {this.getCardsData(this.updateCardsState); });

    }
  
  //Confirm order action
  clickConfirm(){
    console.log("1",this.state)   
    var placerAjaxOrder = 'https://staging.nexchange.ru/en/order/ajax/',
        paymentType = this.state.paymentMethod.bank,
        preferenceIdentifier = this.state.paymentMethod.id,
        preferenceOwner = "", //this.state.paymentMethod.owner;
        verifyPayload = {
            "trade-type": this.state.action,            
            "amount-coin": this.state.amountCoin,
            "currency_from": this.state.currency.toLocaleUpperCase(), //fiat
            "currency_to": "BTC", //crypto
            "pp_type": paymentType,
            "pp_identifier": preferenceIdentifier,
            "pp_owner": preferenceOwner
        };


    $.ajax({
        type: "post",
        url: placerAjaxOrder,
        dataType: 'text',
        data: verifyPayload,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function (data) {
            console.log(data)            
            $(".successOrder").html($(data));
            $("#orderSuccessModal").modal({backdrop: "static"});

        },
        error: function () {
            window.alert("Something went wrong. Please, try again.");
        }
    });

  }
//methods for the second step

  handleSelectsChange(e){
      //console.log(e.target.name);
      var tg_name=e.target.name;
      if (tg_name === 'currency_pair'){
        this.setState({
          currency: e.target.value,              
        });
      }

      if (tg_name === 'graph-range'){
        this.setState({
          hours: e.target.value,              
        });
      }

      this.renderChart(this.state.currency, this.state.hours);
      this.getPriceData(this.updateState);       
   }
  
  doMath(elem, value, argaction){
    // i don't know whats this
        var floor = 100000000;
        var obj = {};
        var action = (typeof argaction === 'undefined') ? this.state.action : argaction;

        //debugger;
        //get what are we doing, buying-selling
        //action  = this.state.action === null ? 1 : this.state.action;//buy by dafault

        var rate = action === 1 ? this.state.rateBuy : this.state.rateSell;
        //console.log(elem.target.name,elem.target.value)                 
       // console.log(this.refs,elem.target.name)        
        // coins changed
        if (elem === 'amount-coin') {
            var coins = value;
            var cashAmount = rate * coins;
          
            
            /*if (isInitial) {
                $('.amount-cash').attr('placeholder', cashAmount);
            } else {
                $('.amount-cash').val(cashAmount);
            }*/

        // cash amount changed 
        } else if (elem==='amount-cash') {
            var cashAmount = value;
            //var coins = this.state.amountCoin;
            var coins = Math.floor(cashAmount / rate * floor) / floor;
            //console.log(cash,coins,btcAmount) 
            
            /*if (isInitial) {
                $('.amount-coin').attr('placeholder', btcAmount);
            } else {
                $('.amount-coin').val(btcAmount);
            }*/
        }    

        obj = {coins:Math.round(coins * 100) / 100,cash:Math.round(cashAmount * 100) / 100};
    
    return obj;
      
  }

  // applies when txt field changes
  // amountCoin or amountCash
  handleTextFieldsChange(elem){        
        this.animateIcon() 
        this.getPriceData(this.updateState);       
        
        var obj = {};                           
        // coins changed        
        if (elem.target.name === 'amount-coin') {
           obj = this.doMath('amount-coin', elem.target.value);        
        // cash amount changed 
        } else {
           obj = this.doMath('amount-cash', elem.target.value);                        
        }                                       
    
      this.setState({
       amountCash: obj.cash,
       amountCoin: obj.coins
      });
    
  }
//console.log("QQQ",this.state,this.props)

  updateCashState(){
      var obj2 = this.doMath('amount-coin', this.state.amountCoin);
      //debugger;
    this.setState({
       amountCash: obj2.cash
      });
  
  }

  updateState(obj){
    var tmpdata = obj,
        ratebuy = tmpdata[1]['price_'+this.state.currency+'_formatted'],
        ratesell = tmpdata[0]['price_'+this.state.currency+'_formatted'],
        action  = this.state.action === null ? 1 : this.state.action;//buy by dafault
    
    
    // necessary step to can catch data from ##1
    this.setState({
       priceData:  obj,
       rateSell:   ratesell,
       rateBuy:    ratebuy,
       action: action
      }, function updateCashState() {this.updateCashState(); } );

    //console.log("Update",this.state)
  }

  // ##1   Need this to use this kinda ajax calls
  getPriceData(updateState){      
      $.get(this.state.tickerLatestUrl, function(dataret) {         
          updateState(dataret);
          //console.log(dataret)          
      });
  }
    
  updateCardsState(data){
    this.setState({
       cards:  data.cards      
      }, function togglePayMethModal() {this.togglePayMethModal(); });    

  }

  getCardsData(updateCardsState){
    var payload = {currency:this.state.currency}
    $.post(this.state.cards_url, payload ,function(data) {         
          updateCardsState(data);
          //console.log(dataret)          
      });

  }

  updatePrice (price, elem) {
        var currentPriceText = elem.html().trim(),
            currentPrice,
            isReasonableChange;

        if (currentPriceText !== '') {
            currentPrice = parseFloat(currentPriceText);
        } else {
            elem.html(price);
            return;
        }
        // TODO: refactor this logic
        isReasonableChange = price < currentPrice * 1.05;
        if (currentPrice < price && isReasonableChange) {
            animatePrice(price, elem, true);
        }
        else if (!isReasonableChange) {
            setPrice(elem, price);
        }

        isReasonableChange = price * 1.05 > currentPrice;
        if (currentPrice > price && isReasonableChange) {
            animatePrice(price, elem);
        }
        else if (!isReasonableChange) {
            setPrice(elem, price);
        }
    }
    
  animatePrice (price, elem, isRaise) {
        var animationClass = isRaise ? 'up' : 'down';
        elem.addClass(animationClass).delay(animationDelay).queue(function (next) {
                        setPrice(elem, price).delay(animationDelay / 2).queue(function(next) {
                elem.removeClass(animationClass);
                next();
            });
            next();
        });
    }

  getPrice (data, currency) {
        return data['price_' + currency + '_formatted'];
    }

  responseToChart(data) {
        var i,
            resRub = [],
            resUsd = [],
            resEur = [];

        for (i = 0; i < data.length; i+=2) {
            var sell = data[i],
            buy = data[i + 1];
            if(!!sell && !!buy) {
                resRub.push([Date.parse(sell.created_on), 
                              buy.price_rub_formatted, 
                              sell.price_rub_formatted]);
                resUsd.push([Date.parse(sell.created_on), 
                              buy.price_usd_formatted, 
                              sell.price_usd_formatted]);
                resEur.push([Date.parse(sell.created_on), 
                              buy.price_eur_formatted, 
                              sell.price_eur_formatted]);
            }
        }        
        return {
            rub: resRub,
            usd: resUsd,
            eur: resEur
        };
    }

  renderChart (currency, hours) {
        var apiRoot = 'https://staging.nexchange.ru/en/api/v1',
          chartDataRaw,
          tickerHistoryUrl = apiRoot +'/price/history',
          tickerLatestUrl = this.state.tickerLatestUrl,
          actualUrl = tickerHistoryUrl,
          rspChartfunc=this.responseToChart;

        if (hours) {
            actualUrl = actualUrl + '?hours=' + hours;
        }        
         $.get(actualUrl, function(resdata) {
            chartDataRaw = resdata;            
            var data = rspChartfunc(resdata)[currency];
            //console.log("data:",data, "resdata:",resdata,"curr:",currency)
          $('#container-graph').highcharts({

                chart: {
                    type: 'arearange',
                    zoomType: 'x',
                    style: {
                        fontFamily: 'Gotham'
                    },
                  backgroundColor: {
                     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                     stops: [
                        [0, '#F3F3F3'],
                        [1, '#F3F3F3']
                     ]
                  },
                    events : {
                        load : function () {
                            // set up the updating of the chart each second
                            var series = this.series[0];
                            setInterval(function () {
                                $.get(tickerLatestUrl, function (resdata) {
                                    var lastdata = rspChartfunc(resdata)[currency];
                                    if ( chartDataRaw.length && parseInt(resdata[0].unix_time) >
                                         parseInt(chartDataRaw[chartDataRaw.length - 1].unix_time)
                                    ) {
                                        //Only update if a ticker 'tick' had occured
                                        series.addPoint(lastdata[0], true, true);
                                        Array.prototype.push.apply(chartDataRaw, resdata);
                                    }

                                });
                        }, 1000 * 30);
                      }
                    }
                },

                title: {
                    text: 'BTC/' + currency.toUpperCase()
                },

                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                       day: '%e %b',
                        hour: '%H %M'

                    }
                },
                yAxis: {
                    title: {
                        text: null
                    }
                },

                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: ' ' + currency.toLocaleUpperCase()
                },

                legend: {
                    enabled: false
                },

                series: [{
                    name: currency === 'rub' ? 'цена' : 'Price',
                    data: data,
                    color: '#8cc63f',
                    // TODO: fix this! make dynamic
                    pointInterval: 3600 * 1000
                }]
            });
        });
    }

//end methdos 2nd step

  componentDidMount(){
    
  }

  render() {
    //console.log("###",this.state)
    var componentsCount = Object.keys(this.state.components).length;     
    if  (this.state.currentStep < componentsCount + 1){
      var Component = this.state.components[this.state.currentStep]; 
      
    } 
      var myBreads = this.state.breadCrumbs,
          activeStep = this.state.currentStep,
          actionColor = this.state.actionColors;

      
      var breadCrumbs =  Object.keys(this.state.breadCrumbs).map(
                    function ( mkey ) {
                        return(
                            <BreadCrumbs
                                key={mkey}                                
                                name= {myBreads[mkey].name}
                                step={myBreads[mkey].step}
                                icon={myBreads[mkey].icon}
                                activeStep={activeStep}
                                actionColors={actionColor}                                                              
                                />
                            
                        )});

      //showing next button only in step 1 as it's now
      if (this.state.currentStep === 1){        
        var myNext=(
                 <NextBtn onClick={this.nextStep} 
                   myStyle={this.state.actionColors[this.state.btn_action]}
                   activeStep={this.state.currentStep}
                   componentsCount={componentsCount}>
                  </NextBtn>
                   );      

        }else{
          var myNext=<div></div>;          
      }

  //console.log("###",myNext,BreadCrumbs);

    return (
       <div className="tab-content"  >
       <div className="breadcrumbsContainer"  >
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 step_panel_cont">       
        <div className="step_panel">

          {breadCrumbs}
                  
        </div>        
       </div>
       </div>

          <Component buyBtnClick={this.buyBtnClick}
                     sellBtnClick={this.sellBtnClick}  
                     action={this.state.action} 
                     phoneOnChange={this.phoneOnChange}
                     nextStep={this.nextStep}
                     rateSell={this.state.rateSell}
                     rateBuy= {this.state.rateBuy}                     
                     currency= {this.state.currency}
                     hours= {this.state.hours}
                     amountCoin= {this.state.amountCoin}
                     amountCash= {this.state.amountCash}
                     priceData= {this.state.priceData}
                     select_pair= {this.state.select_pair}
                     graph_ranges= {this.state.graph_ranges}
                     tickerLatestUrl={this.state.tickerLatestUrl}
                     renderChart={this.renderChart}
                     getPriceData={this.getPriceData}
                     updateState={this.updateState}
                     handleSelectsChange={this.handleSelectsChange}
                     handleTextFieldsChange={this.handleTextFieldsChange}
                     nextStep={this.nextStep} 
                     doMath={this.doMath}   
                     paymentMethod={this.state.paymentMethod}  
                     clickConfirm={this.clickConfirm}          
                     loading={this.state.loading}  
                     animateIcon={this.animateIcon}  
                     unanimateIcon={this.unanimateIcon}  
                    />

            {myNext}

            <PaymentModal 
                  action={this.state.action}
                  cards={this.state.cards} 
                  PayMethClick={this.PayMethClick}
                  qiwiClientClick={this.toggleSellMethModal}
                  c2cSellMethClick={this.toggleC2cSellMethModal}/>
            <SellMethModal
                  action={this.state.action}
                  cards={this.state.cards} 
                  sellMethClick={this.sellMethClick}
                  SellMethModalBack={this.SellMethModalBack}
                  user={this.state.user}/>
            
            <C2cSellMethModal
                  action={this.state.action}
                  cards={this.state.cards} 
                  c2cSellMethClick={this.c2cSellMethClick}
                  c2cSellMethModalBack={this.c2cSellMethModalBack}
                  c2cTxtOnChange={this.c2cTxtOnChange}
                  user={this.state.user}/>

            <div className="successOrder"></div>

      </div>           
    
           );
  }
}

export default Main;
/*
 * Render the above component into the div#app
 */
/*ReactDOM.render(<Main />, document.getElementById("app")); */