import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Home from './Home'
import MenuIcon from './MenuIcon'
import NavDrawer from './NavDrawer'

function App() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <Router basename="/cot-demo-react/">
      <Home />
      <MenuIcon menuActive={menuActive} setMenuActive={setMenuActive} />
      <NavDrawer menuActive={menuActive} setMenuActive={setMenuActive} />
    </Router>
)}

export default App;
