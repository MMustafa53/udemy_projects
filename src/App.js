import React from 'react';
import './App.css';

import User from './components/User';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <User
      isim = "my"
      />
      <Navbar title="titleım"/>
    </div>
  );
}

export default App;
