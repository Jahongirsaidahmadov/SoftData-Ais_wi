import React, { useState } from 'react';
import { Table, Space  } from 'antd';
import { useSelector } from "react-redux";

import {ip} from '../../../ip';

import './acsessControl.css';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'T/r',
        dataIndex: 'key',
    },
    {
        title: 'F.I.O',
        dataIndex: 'fullname',
        render: (text, record) => (
            <Space size="small">
                <img className="table_round_img" src={`${ip}/api/worker/${record.id}/img`} alt = 'user'/>
                <td>{record.fullname}</td>
            </Space>
          ),
    },
    {
        title: 'Kirgan vaqt',
        dataIndex: 'from_date',
    },
    {
        title: 'Chiqqan vaqt',
        dataIndex: 'to_date',
    },
    {
        title: 'Qurilma nomi',
        dataIndex: 'accessed_door',
    },
];

const AcsessTable = (props) => {
    const { accessTableData } = props;
    const isDarkMode = useSelector(state => state.theme.theme_data)
    const [state, setState] = useState({
        selectedRowKeys: []
    })

    const onSelectChange = (selectedRowKeys, a) => {
        setState({ selectedRowKeys })
    };

    const { selectedRowKeys } = state;
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    }

        return (
            <Table
               className={` ${isDarkMode && 'darkModeBackground'}`}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={accessTableData}
                pagination={false}
            />
        );
}
export default AcsessTable
