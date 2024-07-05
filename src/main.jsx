import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

axios.get('/api/books').then(({ data }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialData={data} />
    </React.StrictMode>,
  )
})

