import React from 'react';
import ReactDOM from 'react-dom';
import Comp from '../components/PaymentModal';

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Comp PayMethClick={function(){return {bank:"Alfa Bank",id:'232323211'};}}
					 getPriceData={function(){return;}}
					 cards={{'alfa':'323234344566778'}}
					 paymentMethod={{'bank':'Alfa'}}
					 />, div);