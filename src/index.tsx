import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/Pastel.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nond from './components/Nond';
import Legal from './components/Legal';
import Support from './components/Support';
import Privacy from './components/Privacy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nond" element={<Nond />} />
        <Route path="/nond/support" element={<Support />} />
        <Route path="/nond/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
