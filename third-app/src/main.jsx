import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Events from './Events'
import Counter from './CountInDisplay'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Events/>
    <Counter/>
  </StrictMode>,
)
