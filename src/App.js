import { BrowserRouter as Router } from "react-router-dom"
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/template/Header/Header'
import Footer from './components/template/Footer/Footer'
import React from "react";



function App() {


  return (
   <>
    <Router>
    <Header/>
     <Routes/>
     <Footer/>
   </Router>
   
</> 
  );
}

export default App;