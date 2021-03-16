import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {Card, Table, Button, Input, Badge} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {connect} from "react-redux";

import {onGetAllProspects} from "../../../appRedux/actions/Prospects";
import {onGetAllEvidences,onUpdateEvidence} from "../../../appRedux/actions/Evidences";


const ProspectsTable = ({onGetAllProspects,onGetAllEvidences,onUpdateEvidence}) => {
  const [prospects, setProspects] = useState([]);
  const [evidences, setEvidences] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    onGetAllProspects();
    onGetAllEvidences();    
    // console.log(`${process.env.REACT_APP_BASE_URL}/users`);
  },[]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
    onUpdateEvidence({id:'2', commentary:'holis', status:'OK'});
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

  const filters=(filtersData)=>{
    return({filters: filtersData.map(filter=>{return(
      {
        text: filter,
        value: filter,
      })}),
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ['descend', 'ascend']
    })};


const filterData=[
  {values:['London','Sidney']},
  {values:['F','M']}
];

const dataCols=[
  'Curso','Nombre','Tipo Doc','Identificación','Género',
  'Edad','Condición Especial', 'País','Estado','Última Iteracción'
];

const filts=[['Frontend','Backend'],[],['CC','TI','CE','PA'],[],['F','M','N/A'],[],[],[],['Formandose','Interesado','Adecuado'],[]];
const configTable=[false,false,false,false,false,false,false,false,false,false];
// const breakPoints=['']

const colsMaker=(cols,filts,configTable)=>{
  return(
    cols.map((col,index)=>{
      return(
      filts[index].length>0
        ? {title:col, dataIndex:`col${index}`, fixed:configTable[index],
          filters: filts[index].map((filt)=>{return(
            {text:filt, value:filt}
        )}),
        // record.col8.indexOf(value) === 0
        onFilter: (value, record) => record[`col${index}`].indexOf(value) === 0

      }
        : {title:col, dataIndex:`col${index}`, fixed:configTable[index],
          render: index===1 ? (text) => <Link to="/admin/prospect/perfil">{text}</Link> : null,
          ...getColumnSearchProps(col,`col${index}`),
      }
    )})
  )
}

const columns =colsMaker(dataCols,filts,configTable);

const data = [
  {
    key: '1',
    col1: 'Pedro Pérez',
    col2:'CC',
    col4: 'M',
    col5: '18',
    perfil: '',
    state: '',
    req: ''
  },
  {
    key: '2',
    col1: 'Juana Martinez',
    col2:'TI',
    col4: 'F',
    col5: '22',
    url: '',
    perfil: '',
    state: '',
    req: ''
  },
  {
    key: '3',
    col1: 'Mariana Rodríguez',
    col2:'CC',
    col4: 'F',
    col5: '16',
    url: '',
    perfil: '',
    state: '',
    req: ''
  },
  {
    key: '4',
    col1: 'Daniel Sánchez',
    col2:'CE',
    col4: 'M',
    col5: '20',
    url: '',
    perfil: '',
    state: '',
    req: ''
  },
];

  return (
    <Card>
      <Table
        pagination={{position:['bottomCenter']}}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1000, y: 300 }}
      />
    </Card>
  );
};


// export default ProspectsTable;

const mapStateToProps = ({prospects,evidences}) => {
  const {prospectList} = prospects;
  const {evidenceList} = evidences;
  return {prospectList,evidenceList}
};
export default connect(mapStateToProps, {
  onGetAllProspects,
  onGetAllEvidences, 
  onUpdateEvidence
})(ProspectsTable);

