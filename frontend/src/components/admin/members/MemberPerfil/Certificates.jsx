import React, { useState, useEffect } from "react";
import {useRouteMatch} from "react-router-dom";
import { Formik, Field } from "formik";
import {Input, Radio} from "formik-antd";
import { Col, Row, Card, Popover, Button } from "antd";
import {useSelector, useDispatch} from "react-redux";

import {onUpdateEvidence} from "../../../../appRedux/actions/Evidences";



const Certificates = () => {
  const dispatch = useDispatch();
  const evidenceList = useSelector(({evidences})=> evidences.evidenceList);
  const [evidences,setEvidences] = useState([]);
  const [value, setValue] = useState('');
  const [evidenceStatus, setEvidenceStatus] = useState(Array(evidenceList.length).fill(null));
  const [evidenceText, setEvidenceText] = useState(Array(evidenceList.length).fill(''));
  const [visible, setVisible] = useState(Array(evidenceList.length).fill(false));
  const match = useRouteMatch();
  // console.log(useRouteMatch().params.user);


  useEffect(() => {  
    // const test=evidenceList.filter(evidence=> evidence.user_id===match.params.user); 
    setEvidences(evidenceList.filter(evidence=> evidence.user_id===match.params.user));
  },[]);

  const onRadioChange = (e,index) => {
    const status=e.target.value;
    const changeVisible=visible, changeEvidenceStatus=evidenceStatus;
    changeVisible[index]=true; changeEvidenceStatus[index]=(status.split(' ',1))[0];
    setVisible(changeVisible); setEvidenceStatus(changeEvidenceStatus);
    setValue(e.target.value);
  }  

  const onTextChange = (e,index) => {    
    let {value} = e.target;
    const changeEvidenceText=evidenceText;
    changeEvidenceText[index]=value;
    setEvidenceText(changeEvidenceText);    
  }  

  const handleSubmit = (e,index) => {
    e.preventDefault();
    dispatch(onUpdateEvidence({id:`${evidenceList[index].id}`, commentary:`${evidenceText[index]}`, status:`${evidenceStatus[index]}`}));
    setVisible(Array(evidenceList.length).fill(false));
    setEvidenceText((Array(evidenceList.length).fill('')));
  }

  const handleCancel = (e,index) => {
    setVisible(Array(evidenceList.length).fill(false));
    setEvidenceText((Array(evidenceList.length).fill('')));
  }
  // const test=evidenceList.filter(evidence=> evidence.user_id===match.params.user);
  // console.log(evidenceList[0])
  // console.log(test)
  return (
    <Card bordered={false} style={{ }}>
      <Formik
        initialValues={{ }}
      >
      {() => (
      <>
        {evidences.map((evidence,index)=>{
          return(
            <div key={index}>
              <hr/>
              <Row>
                <Col xs={12} xl={16}> 
                  <a href="https://example.com" target="_blank"><p>{evidence.evidence_name}</p></a>
                </Col>
                <Col xs={12} xl={8}>
                <Radio.Group name={`group${index}`} onChange={(e)=>{onRadioChange(e,index)}}>
                  <Popover
                    content={
                      <form onSubmit={(e)=>{handleSubmit(e,index,value)}}>
                        <Input 
                        name={`input${index}`} 
                        type="text" 
                        value={evidenceText[index]} 
                        placeholder="Comentario" 
                        onChange={(e)=>{onTextChange(e,index)}}
                        />          
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                        <Button type="primary" onClick={(e)=>{handleCancel(e,index)}}>
                          Cancel
                        </Button>
                      </form>
                    }
                    trigger="click"
                    visible={visible[index]}
                  >
                  <Radio value={`Correcto ${index}`}>Correcto</Radio>          
                  <Radio value={`No_Correcto ${index}`}>No Correcto</Radio>
                  </Popover>
                </Radio.Group>
                </Col>
              </Row>
            </div>
          );
        })}
        <hr/>
      </>
      )}   
      </Formik>     
    </Card>
  );
};

export default Certificates;