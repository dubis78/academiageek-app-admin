import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Admin = ({match}) => (
  <Switch>
    {/* <Route path={`${match.url}/courses/`} component={asyncComponent(() => import('./courses/Courses'))}/>
    <Route path={`${match.url}/courses/cohorts`} component={asyncComponent(() => import('./courses/Cohorts'))}/> */}
    <Route path={`${match.url}/prospects/`} component={asyncComponent(() => import('./prospects/Prospects'))}/>
    {/* <Route path={`${match.url}/courses/cohorts`} component={asyncComponent(() => import('./courses/Cohorts'))}/> */}
    {/* <Route path={`${match.url}/tests/`} component={asyncComponent(() => import('./tests/Bank'))}/>
    <Route path={`${match.url}/tests/technical`} component={asyncComponent(() => import('./tests/Technical'))}/> */}
  </Switch>
);

export default Admin;
