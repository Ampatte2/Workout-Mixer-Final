import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {NavBar} from "../components"
import {register, login, workout, sample} from "../pages"
import {AppDiv} from "../style/styledcomponents"



function App() {
  return (
    
    <Router>
      
      <NavBar />
      <Switch>
        <Route path="/login" exact component ={login}/>
        <Route path="/register" exact component = {register}/>
        <Route path="/workout" exact component = {workout}/>
        <Route path="/" exact component = {sample}/>
      </Switch>
      
    </Router>
    
  );
}

export default App;
