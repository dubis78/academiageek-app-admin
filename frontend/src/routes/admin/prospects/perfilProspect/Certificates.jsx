import React, { useState, useEffect } from "react";
import { Col, Row, Card, Radio, Popover, Form, Input, Button } from "antd";
import Icon from '@ant-design/icons';
import {useSelector, useDispatch} from "react-redux";

import {onUpdateEvidence} from "../../../../appRedux/actions/Evidences";


const Certificates = () => {
  const dispatch = useDispatch();
  const evidenceList = useSelector(state => state.evidences.evidenceList);
  const [value, setValue] = useState('');  
  const [evidences, setEvidences] = useState([]);
  const [evidenceStatus, setEvidenceStatus] = useState([]);
  const [visible, setVisible] = useState(Array(evidenceList.length).fill(false));

  useEffect(() => {   
    console.log(evidenceList);
  },[]);

  const onChange = (e,index) => {
    console.log('radio checked', e.target.value);
    const changeVisible=visible;
    changeVisible[index]=true;
    console.log(changeVisible)
    setVisible(changeVisible);    
    setValue(e.target.value);
  }  

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(onUpdateEvidence({id:'1', commentary:'byeee', status:'OK'}));
    setVisible(Array(evidenceList.length).fill(false));
  }

  return (
    <Card bordered={false} style={{ }}>
      {/* <form onSubmit={handleSubmit}></form> */}
      {evidenceList.map((evidence,index)=>{
        return(
          <div key={index}>
            <hr/>
            <Row>
              <Col xs={12} xl={16}> 
                <a href="https://example.com" target="_blank"><p>Certificado Khan Academy</p></a>
              </Col>
              <Col xs={12} xl={8}>
              <Radio.Group onChange={(e)=>{onChange(e,index)}} value={value}>
                <Popover
                  content={
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                      <Input name="AntdInput"  />          
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </form>
                  }
                  trigger="click"
                  visible={visible[index]}
                >
                <Radio value={'Correcto'}>Correcto</Radio>          
                <Radio value={'No Correcto'}>No Correcto</Radio>
                </Popover>
              </Radio.Group>
              </Col>
            </Row>
          </div>
        );
      })}
      {/* <hr/>
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
        <a href="https://example.com" target="_blank"><p>Card content</p></a> */}

        <hr/>        
    </Card>
  );
};

export default Certificates;

