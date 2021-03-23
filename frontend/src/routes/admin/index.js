import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Members from "./Members";
import ProspectsTable from '../../components/admin/members/MembersTable/MembersTable'


const Admin = ({match}) => (
  <Switch>
    {/* <Route path={`${match.url}/courses`} component={Courses}/> */}
    <Route path={`${match.url}/members`} component={Members}/>
    {/* <Route path={`${match.url}/bank`} component={Bank}/> */}
  </Switch>
);

export default Admin;