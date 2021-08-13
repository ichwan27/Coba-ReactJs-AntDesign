import React, { useState } from 'react';
import './TableQuality.css';

import {Table,Space,Button,Modal } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

import dataQualityDummy from './dataQualityDummy.json';
import ModalChart from './ModalChart.js';

function App() {
  const [isModalViewed,setIsModalViewed] = useState(false);
  // const [searchTexted,setSearchTexted] = useState(" ");
  // const [searchedColumn,setSearchedColumn] = useState(" ");

  // const getColumnSearchProps = dataIndex => ({
  //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
  //     <div style={{ padding: 8 }}>
  //       <Input
  //         ref={node => {
  //            var searchInput = node;
  //         }}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{ marginBottom: 8, display: 'block' }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{ width: 90 }}
  //         >
  //           Search
  //         </Button>
  //         <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({ closeDropdown: false });
  //               setSearchTexted(selectedKeys[0]);
  //               setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  //   onFilter: (value, record) =>
  //     record[dataIndex]
  //       ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
  //       : '',
  //   onFilterDropdownVisibleChange: visible => {
  //     if (visible) {
  //       setTimeout(() => searchInput.select(), 100);
  //     }
  //   },
  //   render: text =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
  //         searchWords={[searchTexted]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ''}
  //       />
  //     ) : (
  //       text
  //     ),
  // });
  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //     setSearchTexted(selectedKeys[0]);
  //     setSearchedColumn(dataIndex);
  // };

  // const handleReset = clearFilters => {
  //   clearFilters();
  //   searchTexted('') ;
  // };
  const showModal = () => {
    setIsModalViewed(true);
  }
  const  handleOk = () =>{
    setIsModalViewed(false);
  }
  const  handleCancel = () =>{
    setIsModalViewed(false);
  }
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      // ...getColumnSearchProps('date'),
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
      // ...getColumnSearchProps('group'),
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'PIC',
      dataIndex: 'pic',
      key: 'pic',
    },
    {
      title: 'Dependents',
      dataIndex: 'dependents',
      key: 'dependents',
    },
    {
      title: 'KPI',
      dataIndex: 'kpi',
      key: 'kpi',
    },
    {
      title: 'Current Val',
      dataIndex: 'current_value',
      key: 'current_value',
    },
    {
      title: 'Threshold',
      dataIndex: 'threshold',
      key: 'threshold',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Aging',
      dataIndex: 'aging',
      key: 'aging',
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      fixed: 'right',
      render: (text, record) => (
         <Space size="middle">
         <Button type="link" onClick={showModal}>Last 30 Days</Button>
         </Space>
         ),
    },
  ]
    return (
      <>
      <div>
        <h2>Table Data Quality</h2>
        <hr/>
        <div className="tableQuality">
          <Table 
            className="quality"
            bordered
            columns={columns}
            dataSource={dataQualityDummy}
            scroll={{ x: 'calc(550px + 100%)', y: 500 }}
            rowKey="_id"/>
        </div>
        <Modal title="Chart quality" style={{top:20}} visible={isModalViewed} onOk={handleOk} onCancel={handleCancel} width={1200}>
          <ModalChart/>
        </Modal>
      </div>
      </>
      );
    }

export default App;