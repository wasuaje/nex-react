import React from 'react';
import ReactDOM from 'react-dom';
import Comp from '../components/menu';

let div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Comp />, div);