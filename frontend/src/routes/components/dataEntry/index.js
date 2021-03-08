import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const DataEntry = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/checkbox`}/>
    <Route path={`${match.url}/checkbox`} component={asyncComponent(() => import('./Checkbox/'))}/>
    <Route path={`${match.url}/form`} component={asyncComponent(() => import('./Form/'))}/>
    <Route path={`${match.url}/input`} component={asyncComponent(() => import('./Input/'))}/>
  </Switch>
);

export default DataEntry;
