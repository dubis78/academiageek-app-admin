import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";
import ProspectsTable from "./prospects/ProspectsTable"
import PerfilProspect from "./prospects/perfilProspect";


const Admin = ({match}) => (
  <Switch>
    {/* <Route path={`${match.url}/courses/`} component={asyncComponent(() => import('./courses/Courses'))}/>
    <Route path={`${match.url}/courses/cohorts`} component={asyncComponent(() => import('./courses/Cohorts'))}/> */}

    {/* <Route path={`${match.url}/prospects/`} component={ProspectsTable}/>
    <Route path={`${match.url}/prospect/perfil`} component={PerfilProspect}/> */}
    <Route path={`${match.url}/prospects/`} component={asyncComponent(() => import('./prospects/ProspectsTable'))}/> 
    <Route path={`${match.url}/prospect/perfil`} component={asyncComponent(() => import('./prospects/perfilProspect'))}/>


    {/* <Route path={`${match.url}/courses/cohorts`} component={asyncComponent(() => import('./courses/Cohorts'))}/> */}
    {/* <Route path={`${match.url}/tests/`} component={asyncComponent(() => import('./tests/Bank'))}/>
    <Route path={`${match.url}/tests/technical`} component={asyncComponent(() => import('./tests/Technical'))}/> */}
  </Switch>
);

export default Admin;



/**
 * import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Table = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
    <Route path={`${match.url}/basic`} component={asyncComponent(() => import('./Basic'))}/>
    <Route path={`${match.url}/data`} component={asyncComponent(() => import('./Data'))}/>
  </Switch>
);

export default Table;
 * 
 */