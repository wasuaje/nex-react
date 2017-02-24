import React from 'react';
import ReactDOM from 'react-dom';
import Comp from '../components/StepGraph';

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Comp renderChart={function(){return;}}
					 getPriceData={function(){return;}}
					 select_pair={{'rub':'BTC/RUB',
                                  'usd':'BTC/USD',
                                  'eur':'BTC/EUR'}}
					 graph_ranges={{'1':'1 Hour',
                                  '4':'4 Hours',
                                  '6':'6 Hours',
                                  '8':'8 Hours',
                                  '12':'12 Hours',
                                  '16':'16 Hours',
                                  '24':'24 Hours'}}
					 currency={'rub'}
					 paymentMethod={{'bank':'Alfa'}}
					 />, div);