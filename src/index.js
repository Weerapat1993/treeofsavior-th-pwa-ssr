/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import './global-styles/index.css';
// import '!style-loader!css-loader!./global-styles/index.css';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import ApiClient from './utils/ApiClient'
import configureStore from './redux-modules/create'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { cyan500, cyan700, cyan100 } from 'material-ui/styles/colors'
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: cyan100,
  },
}, {
  avatar: {
    borderColor: null,
  },
});

// Let the reducers handle initial state
const initialState = {};
const client = new ApiClient();
const store = configureStore(client, initialState);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App initialData={window.DATA} />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
