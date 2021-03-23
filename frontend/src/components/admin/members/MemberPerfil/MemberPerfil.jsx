import  React, { useState, useEffect } from "react";
import {Col, Row, Card, Avatar} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {useRouteMatch} from "react-router-dom";

import Certificates from "./Certificates";
import {onGetPerfil} from "../../../../appRedux/actions/Perfil";

const MemberPerfil = () => {
  const dispatch = useDispatch();
  const userPerfil = useSelector(({perfil})=> perfil.perfil);
  const [perfilInfo, setPerfilInfo] = useState({});
  const match = useRouteMatch();

  useEffect(() => {  
    dispatch(onGetPerfil({id:`${match.params.user}`}));
  },[]);
  
  return (
    <Card style={{  }}>
      <Row align="middle">
        <Col span={8}>
          <Avatar 
            style={{marginBottom: 24 }}
            src={userPerfil[0].photo} 
            size={{ xs: 100, sm: 150, md: 200, lg: 200, xl: 200, xxl: 200 }}
            />
        </Col>
        <Col span={16}>
          <Row justify="end" >
            <Col xs={20} sm={12}>
              <p>{userPerfil[0].name}</p>
              <p>{userPerfil[0].email}</p>
              <p>{'17 años'}</p>
              <p>{'Femenino'}</p>
            </Col>
            <Col xs={20} sm={12}>
              <p>{userPerfil[0].name}</p>
              <p>{userPerfil[0].email}</p>
              <p>{'17 años'}</p>
              <p>{'Femenino'}</p>
            </Col>
          </Row>
        </Col>
      </Row>       
      <Certificates/>            
    </Card>

  );
};

export default MemberPerfil;