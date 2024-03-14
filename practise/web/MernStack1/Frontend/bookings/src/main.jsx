import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BookingContextProvider } from './context/bookingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingContextProvider>
      <App />
    </BookingContextProvider>
  </React.StrictMode>,
)
