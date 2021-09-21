import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginComponent from './views/Login';
import "antd/dist/antd.css"
import './styles/project_theme.css'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/about" />
          <Route path="/users" />
          <Route path="/" component={LoginComponent}/>
          <Route path="/login" component={LoginComponent}/>
        </Switch>
      </Router>
  );
}

export default App;
