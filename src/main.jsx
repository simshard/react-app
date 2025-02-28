import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
//import reportWebVitals from './reportWebVitals';
// import AppClass from './components/AppClass';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
         {/* <AppClass /> */}
  </StrictMode>,
)


