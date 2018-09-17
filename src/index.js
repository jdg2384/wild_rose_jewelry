import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Redux
import { Provider } from 'react-redux' //, Store 
import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import ReduxThunk from 'redux-thunk';
//Router

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
//App
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
//reducer, 
const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
   <Provider store={store}>
            <App />
        </Provider>
    
,document.getElementById('root'));
registerServiceWorker();
