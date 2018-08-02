import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import App from './UpdateDeleteList/App.js';
//import Life from './LifeCyclehooks/Life.js';
//import PureCompo from './PureComponents/PureComponent.js';
import WithOutPureComponent from './PureComponents/WithOutPureComponent.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WithOutPureComponent />, document.getElementById('root'));
registerServiceWorker();
