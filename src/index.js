import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './config/store'
import { Router, hashHistory } from 'react-router'
import { routes } from './config/routes'

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore()

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

injectTapEventPlugin();

render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={hashHistory} routes={routes(store)} />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
