import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './index.css'
import store from './redux/store'

//select main dom element
const main_dom = import.meta.env.VITE_MAIN_DOM || '%VITE_MAIN_DOM%';
//browser base route path
const basename = import.meta.env.VITE_BASENAME || '/';

ReactDOM.createRoot(document.getElementById(main_dom)!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
