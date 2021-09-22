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
import ResetPasswordComponent from './views/ResetPassword';
import LastStepPasswordResetComponent from './views/FinishPasswordReset';
import Dashboard from './views/HomeDashboard';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/reset-password-2" component={LastStepPasswordResetComponent}/>
          <Route path="/reset-password" component={ResetPasswordComponent}/>
          <Route path="/login" component={LoginComponent}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" exact component={LoginComponent}  />
        </Switch>
      </Router>
  );
}

export default App;
