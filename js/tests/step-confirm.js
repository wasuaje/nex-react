import React from 'react';
import ReactDOM from 'react-dom';
import Comp from '../components/StepConfirm';

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Comp activeStep={1}
					 currency={'rub'}
					 paymentMethod={{'bank':'Alfa'}}
					 />, div);