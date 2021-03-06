import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Createaccount from './components/Createaccount';
import Dashboard from './components/Dashboard';
import React,{useState} from 'react'

function App() {

  const [mode,sitemode] = useState('sitename');

  const removebodyclass = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const togglemode = (cls) => {
    removebodyclass()
    console.log("togglemode "+cls);
    document.body.classList.add('bg-'+cls);
  }
  

  return (
    <>
    
    <Navbar togglemode={togglemode}/>
    <Router>
    <div className="container">
      <Switch>
          <Route exact path="/">
              <Dashboard pagetitle="Dashboard"/>
          </Route>
          <Route exact path="/login">
            <Login pagetitle="Login Page"/>
          </Route>
          <Route exact path="/createaccount">
            <Createaccount pagetitle="Registration Page"/>
          </Route>
      </Switch>
    </div>
    </Router>

    </>
  );
}

export default App;
