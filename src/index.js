import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './component/app';
import {createStore} from "redux";
import allReducers from "./component/redux/reducer";


const store=createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'))