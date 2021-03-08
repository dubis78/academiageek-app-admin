import React from "react";
import {Route, Switch} from "react-router-dom";
import ErrorPages from "./errorPages";
import UserAuth from "./userAuth";

const CustomViews = ({match}) => (
  <Switch>
    <Route path={`${match.url}/error-pages`} component={ErrorPages}/>
    <Route path={`${match.url}/user-auth`} component={UserAuth}/>
  </Switch>
);

export default CustomViews;
