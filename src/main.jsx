import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 
import { Provider } from 'react-redux'
import store from './Store/store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// npm install @reduxjs/toolkit
// npm install react-redux
// npm install axios
// npm install react-loading-indicators
