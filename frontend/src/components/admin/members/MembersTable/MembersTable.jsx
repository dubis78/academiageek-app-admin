import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {Card, Table, Button, Input, Badge} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {useSelector, useDispatch} from "react-redux";

import {onGetAllProspects} from "../../../../appRedux/actions/Prospects";
import {onGetAllEvidences} from "../../../../appRedux/actions/Evidences";


const ProspectsTable = () => {
  const [prospectsInfo, setProspectsInfo] = useState([]);
  const [prospectsID, setProspectsID] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const dispatch = useDispatch();
  const prospectsList = useSelector(({prospects}) => prospects.prospectList);

  useEffect(() => {
    dispatch(onGetAllProspects());
    dispatch(onGetAllEvidences());
  },[]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (colName,dataIndex) =>({
    filterDropdown: ({setSelectedKeys,selectedKeys,confirm,clearFilters}) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${colName}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined/>}
          size="small"
          style={{ width: 90}}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>(
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : ''
    )
  })
 
 
  const getDataID=(prospects)=>{
    let tempProspects=[], tempIDs=[];
    prospects.forEach((prospect,i)=>{
      tempIDs[i]=prospect.id_user;      
      tempProspects[i]={...prospect};
      delete  tempProspects[i].id_user;
    })
    return{tempProspects,tempIDs}
  };

  const colDatIndex=(getDataID(prospectsList));
  const colIndex=(Object.keys(colDatIndex.tempProspects[0]));

  const dataCols=[
    'Curso','Nombre','Tipo Doc','N. Doc','Género','Edad','Discapacidad',
    'Población','Ciudad Residencia','Etapa','Última Iteracción'
  ];

  const filts=[['Frontend','Backend'],[],['CC','TI','CE','PA'],[],['F','M','N/A'],[],[],[],[],['Interesado','Adecuado'],[]];
  const configTable=[false,false,false,false,false,false,false,false,false,false];

  const colsMaker=(cols,filts,configTable,dIndex)=>{
    return(
      cols.map((col,index)=>{
        return(
        filts[index].length>0
          ? {title:col, dataIndex:`${dIndex[index]}`, fixed:configTable[index],
            filters: filts[index].map((filt)=>{
              return(
              {text:filt, value:filt}
          )}),
          onFilter: (value, record) => record[`col${index}`].indexOf(value) === 0   // record[`col${index}`].indexOf(value) === 0    =  record.col8.indexOf(value) === 0
        }
          : {title:col, dataIndex:`${dIndex[index]}`, fixed:configTable[index],
            render: index===1 
            ? 
              (text,value) =>{
                return(<Link to={{pathname:`/admin/members/prospect/perfil/${value.key}`, data:'hi'}}>{text}</Link>) }
            : null,
            ...getColumnSearchProps(col,`col${index}`),
        }
      )})
    )
  }


  const columns =colsMaker(dataCols,filts,configTable,colIndex);
  
  const data =(list,id)=>{
    let dat=[];
    list.forEach((element,i)=>{
      dat[i]={...element};
      dat[i].key=`${id[i]}`;
    });
    return dat;
  }
    // {
    //   key: '1',
    //   col1: '1_Pedro Pérez',
    //   col2:'CC',
    //   col4: 'M',
    //   col5: '18',
    //   perfil: '',
    //   state: '',
    //   req: ''
    // }


  return (
    <Card>
      <Table
        pagination={{position:['bottomCenter']}}
        columns={columns}
        dataSource={data(colDatIndex.tempProspects,colDatIndex.tempIDs)}
        scroll={{ x: 1000, y: 300 }}
      />
    </Card>
  );
};


export default ProspectsTable;
