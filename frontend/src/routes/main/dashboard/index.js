import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/geek`}/>
    <Route path={`${match.url}/geek`} component={asyncComponent(() => import('./Geek/index'))}/>
  </Switch>
);

export default Dashboard;
