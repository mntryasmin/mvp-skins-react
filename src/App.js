import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import Favorites from './pages/Favorites/Favorites'
import React from "react";



function App() {
  return (
    <React.Fragment>
      <Header/>
      <Router>
        <Routes/>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;