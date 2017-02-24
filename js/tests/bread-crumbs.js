import React from 'react';
import ReactDOM from 'react-dom';
import Comp from '../components/BreadCrumbs';

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Comp activeStep={1}
					 step={2}
					 actionColors={{'yellow':'yellow'}}
					 />, div);