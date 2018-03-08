import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/global.css';
// import 'ag-grid/dist/styles/ag-grid.css';
// import 'ag-grid/dist/styles/ag-theme-material.css';
import 'font-awesome/css/font-awesome.min.css';
import AppContainer from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import configureStore from './redux/configureStore';


const store = configureStore();

ReactDOM.render(
    <Provider store={store} key="provider">
        <BrowserRouter>
            <div>
                <Route path='/' component={AppContainer}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
