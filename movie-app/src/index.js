import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discover from './components/Body/categories/Discover';
import Favorites from './components/Body/categories/Favorites';
import NewReleases from './components/Body/categories/NewReleases';
import Upcoming from './components/Body/categories/Upcoming';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Discover />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
