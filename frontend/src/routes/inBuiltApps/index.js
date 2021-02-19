import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const InBuiltApps = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/mail`}/>
    <Route path={`${match.url}/mail`} component={asyncComponent(() => import('./Mail'))}/>
    <Route path={`${match.url}/firebase-crud`} component={asyncComponent(() => import('./FirebaseCRUD'))}/>
  </Switch>
);

export default InBuiltApps;
