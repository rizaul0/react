import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';   // ✅ import Provider
// import App from './App.jsx';
// import store from './store/store.js';     // ✅ import your Redux store
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>              {/* ✅ wrap App inside Provider */}
//       <App />
//     </Provider>
//   </StrictMode>
// );
