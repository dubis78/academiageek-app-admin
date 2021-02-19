import React from "react";
import {Route, Switch} from "react-router-dom";

import DataEntry from "./dataEntry";
import Feedback from "./feedback";
import Navigation from "./navigation";
import General from "./general";
import Table from "./table";

const Components = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dataEntry`} component={DataEntry}/>
    <Route path={`${match.url}/feedback`} component={Feedback}/>
    <Route path={`${match.url}/general`} component={General}/>
    <Route path={`${match.url}/navigation`} component={Navigation}/>
    <Route path={`${match.url}/table`} component={Table}/>
  </Switch>
);

export default Components;
