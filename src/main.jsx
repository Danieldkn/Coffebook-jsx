import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initFirestore } from './firebase/config'
// import './index.css'

// App() -> <App /> la llamada de la función App() escrito en jsx 
initFirestore()
ReactDOM.createRoot(document.getElementById('root')).render( <App /> )