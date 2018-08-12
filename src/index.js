import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import App from './UpdateDeleteList/App.js';
//import Life from './LifeCyclehooks/Life.js';
//import PureCompo from './PureComponents/PureComponent.js';
//import WithOutPureComponent from './PureComponents/WithOutPureComponent.js';
//import registerServiceWorker from './registerServiceWorker';
//import AutosuggestSearch from './Search/AutoCompleteSearch';
//import AppRouter from './Router/App';
//import SearchDrop from './Search//SearchDrop';
//import AppRefsDOM from './Refs-DOM/RefsDOM';
//import AppHOD from "./HigerOrderComponents/App"
import AppRR from "./React-Redux/App"
//For Redux purpose 
//it allows to inject the global store
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from "./React-Redux/store/reducer"

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
         <AppRR />
    </Provider>,
 document.getElementById('root'));
