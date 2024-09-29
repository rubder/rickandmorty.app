import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Home from './pages/home';
import Landingpague from './pages/landingpague';
import Notfound from './pages/notfound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PersonajesProvider from './componentes/Contexts/PersonajesContext';

export default function App() {
  return (
    <PersonajesProvider>
      <Routes>
        <Route path='create' element={<Create />} />
        <Route path='home' element={<Home />} />
        <Route path='landingpague' element={<Landingpague />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </PersonajesProvider>
  );
}
