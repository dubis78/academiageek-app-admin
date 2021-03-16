import React from "react";
import {Col, Row, Card, Avatar} from "antd";

import Certificates from "./Certificates";


const PerfilProspect = () => {
  return (
    <Card style={{  }}>
      <Row align="middle">
        <Col span={8}>
          <Avatar 
            style={{marginBottom: 24 }}
            src="https://wieldy.g-axon.work/assets/images/avatar/a7.png" 
            size={{ xs: 100, sm: 150, md: 200, lg: 200, xl: 200, xxl: 200 }}
            />
        </Col>
        <Col span={16}>
          <Row justify="end" >
            <Col xs={20} sm={12}>
              <p>{'Juana Martínez'}</p>
              <p>{'juanam@gmail.com'}</p>
              <p>{'17 años'}</p>
              <p>{'Femenino'}</p>
            </Col>
            <Col xs={20} sm={12}>
              <p>{'Juana Martínez'}</p>
              <p>{'juanam@gmail.com'}</p>
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

export default PerfilProspect;
