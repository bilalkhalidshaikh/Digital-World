import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home ,About,Services,Blog} from './Pages';
// import './App.css';

const App = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Blog" element={<Blog/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
