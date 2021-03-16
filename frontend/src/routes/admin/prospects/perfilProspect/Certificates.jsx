import React, {useState} from "react";
import { Col, Row, Card, Radio, Popover, Form, Input, Button } from "antd";
import Icon from '@ant-design/icons';


const Certificates = () => {

  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const onChange = e => {
    console.log('radio checked', e.target.value);    
    setVisible(true);
    setValue(e.target.value);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('holis');
    setVisible(false);
  }

  return (
    <Card bordered={false} style={{ }}>
      <hr/>
      <Row>
        <Col xs={12} xl={16}> 
          <a href="https://example.com" target="_blank"><p>Certificado Khan Academy</p></a>
        </Col>
        <Col xs={12} xl={8}>
        <Radio.Group onChange={onChange} value={value}>
          <Popover
            content={
              <form onSubmit={handleSubmit}>
                <Input name="AntdInput"  />          
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </form>
            }
            trigger="click"
            visible={visible}
          >
          <Radio value={'Correcto'}>Correcto</Radio>          
          <Radio value={'No Correcto'}>No Correcto</Radio>
          </Popover>
        </Radio.Group>
        </Col>
      </Row>
      <hr/> 
        <a href="https://example.com" target="_blank"><p>Card content</p></a>
        <hr/>
        <a href="https://example.com" target="_blank"><p>Card content</p></a>
        <hr/>
        
      </Card>
  );
};

export default Certificates;
