import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Members = ({match}) => (
  <Switch>
    <Route path={`${match.url}/prospects`} component={asyncComponent(() => import('../../../components/admin/members/MembersTable/MembersTable'))}/> 
    <Route path={`${match.url}/prospect/perfil/:user`} component={asyncComponent(() => import('../../../components/admin/members/MemberPerfil/MemberPerfil'))}/>
  </Switch>
);

export default Members;