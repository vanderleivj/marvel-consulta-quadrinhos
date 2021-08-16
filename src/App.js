import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './core/routes';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './core/redux/reducers/';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App