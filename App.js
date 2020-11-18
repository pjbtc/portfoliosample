import React, { Component } from 'react';
import { Route, Redirect, Switch,useLocation  } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion';
import './App.css';

function App(){

  

 
    const location= useLocation();
    return (
   
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
        <div className="app_sidebar">
          <Sidebar/>
          
        </div>
        </div>
        
        <div className="col-lg-9 app_main-content">
         <Navbar/>
         <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.key}>
         <Route exact path="/">
          <About/>
         </Route>

         <Route path="/resume">
          <Resume/>
         </Route>

         <Route path="/projects">
          <Projects/>
         </Route>
         <Route >
          <Redirect to="/"  />
         </Route>
         </Switch>
         </AnimatePresence>
        </div>
      </div>
      </div>
      </div>
      
      
    );
  
}

export default App;
