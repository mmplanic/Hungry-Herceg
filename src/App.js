import React from "react";
import { authService } from "./services/auth.service";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Home from "./components/home/Home";
import LogIn from "./components/LogIn/LogIn";
import CreateOrderItem from "./components/Order/CreateOrderItem";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import Vote from "./components/Vote/Vote";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import AdminRoute from "./routes/AdminRoute";
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {

  const transitions = {
    FADE: 'fade',
    SCALE: 'scale'
  }
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>

        <PublicRoute component={LogIn } path="/login" />

        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={CreateOrderItem} path="/order/:id" />
        <PrivateRoute component={CreatePoll} path="/createpoll" />
        <PrivateRoute component={Vote} path="/vote/:id" />
        {/* <PrivateRoute component={Statistics} path="/stats" /> */}
        <PrivateRoute component={Profile} path="/profile" />

        <AdminRoute component={Settings} path="/settings" />


        <Redirect to={authService.isLoged() ? "/home" : "/login"} />
      </Switch>
    </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
