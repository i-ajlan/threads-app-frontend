import React from 'react'
import ReactDOM from 'react-dom/client'
import AppPage from './AppPage'
import {BrowserRouter} from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppPage />
    </BrowserRouter>
  </React.StrictMode>,
)
