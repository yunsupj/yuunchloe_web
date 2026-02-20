import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './src/Page';
import About from './src/About';
import { Navbar7 } from './components/Navbar7';
import './index.css';

import PrivacyPolicy from './src/PrivacyPolicy';
import TermsOfService from './src/TermsOfService';
import { Footer1 } from './components/Footer1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar7 />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer1 />
    </Router>
  </React.StrictMode>
);
