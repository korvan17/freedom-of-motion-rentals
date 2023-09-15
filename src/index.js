import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from './redux/store';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
);
