import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './app/login';
import MainApp from './app/main';
import "./style/main.scss"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/*' element={<MainApp />} />
      </Routes>
    </div>
  );
}

export default App;
