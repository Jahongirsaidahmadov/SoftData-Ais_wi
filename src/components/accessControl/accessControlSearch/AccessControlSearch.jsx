import React, { useState, useEffect } from 'react';
import {Input, Select, DatePicker} from "antd";
import moment from "moment";
import {SearchOutlined} from "@ant-design/icons";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './acsessControl.css';
import { ip } from '../../../ip';

import AcsessTable from "./AcsessTable";
import AccessControlSearchPagination from './Pagination';

const AcsessControlSearch = (props) => {

    const isDarkMode = useSelector(state => state.theme.theme_data)
    const is_refresh_value = useSelector(state => state.theme.is_refresh_value)
    const [accessTablePaginationLimit, setAccessTablePaginationLimit] = useState(10)
    const [accessTablePaginationCurrent, setAccessTablePaginationCurrent] = useState(1)
    const [accessTableData, setAccessTableData] = useState([])
    const [accessTableTotal, setAccessTableTotal] = useState(null)
    const navigate = useNavigate()

    const fetchAccessTable = async (id) => {
        const response = await axios.get(`${ip}/api/workers/${accessTablePaginationLimit}/${id}`)
        const { data } = response;
        const count = data.count;
        setAccessTableTotal(count)
        const newData = data.data.map((item, index) => (
            {
                ...item,
                key: index + 1 + (data.current_page - 1) * accessTablePaginationLimit,
                from_date: moment(item.from_date).format('DD.MM.YYYY, HH:mm:ss'),
                to_date: moment(item.to_date).format('DD.MM.YYYY, HH:mm:ss')
            }
        ))
        setAccessTableData(newData)
    }

    const accessTablePaginationOnChange = (e = 1, option) => {
        fetchAccessTable(e)
        setAccessTablePaginationCurrent(e)
        setAccessTablePaginationLimit(option)
    }

    useEffect(() => {
        fetchAccessTable(accessTablePaginationCurrent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessTablePaginationLimit, accessTablePaginationCurrent])

    useEffect(() => {
        if(!is_refresh_value) {
            navigate('/face-control-analysis')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <div className="accsessControl">
                <div className="acsess_content_top">
                    <p className= {`Content_title ${isDarkMode && 'darkModeColor'}`} >Accsess Control Qidiruv</p>
                    <div className='access-control-pagination'>
                        <AccessControlSearchPagination
                            accessTablePaginationLimit = {accessTablePaginationLimit}
                            accessTablePaginationCurrent = {accessTablePaginationCurrent}
                            accessTablePaginationOnChange = {accessTablePaginationOnChange}
                            accessTableTotal = {accessTableTotal}
                        />
                    </div>
                </div>
                <div className="acsess_content">
                    <div className="acsess_left">
                        <div>
                            <div className="form_input_wrapper">
                                <p className={`input_label ${isDarkMode && 'darkModeColor'}`}>Ism</p>
                                <div className="input_wrappe">
                                    <Input
                                        className={`left_input ${isDarkMode && 'darkModeColor'}`}
                                        type="text"
                                        size="large"
                                        style={{marginRight: "10px"}}
                                        placeholder="Kiriting"
                                    />
                                </div>
                            </div>

                            <div className="form_input_wrapper">
                                <p className={`input_label ${isDarkMode && 'darkModeColor'}`}>Qurilma nomi</p>
                                <div className="input_wrapper">
                                    <Select
                                        className={`left_select ${isDarkMode && 'darkModeColor'}`}
                                        style={{width: "100%"}}
                                        size="large"
                                        defaultValue="all"
                                    >
                                        <Select.Option value="all">Hammasi</Select.Option>
                                        <Select.Option value="1">Erkak</Select.Option>
                                        <Select.Option value="2">Ayol</Select.Option>
                                        <Select.Option value="0">Aniqlanmadi</Select.Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="form_input_wrapper">
                                <p className={`input_label ${isDarkMode && 'darkModeColor'}`}>Holat turi</p>
                                <div className="input_wrappe">
                                    <Input
                                        className={`left_input ${isDarkMode && 'darkModeColor'}`}
                                        type="text"
                                        size="large"
                                        style={{marginRight: "10px"}}
                                        placeholder="Aniqlanmadi"
                                    />
                                </div>
                            </div>

                            <div className="form_input_wrapper">
                                <p className={`input_label ${isDarkMode && 'darkModeColor'}`}>Muddat:</p>
                                <div className="input_wrapper">
                                    <DatePicker
                                        className={`left_input ${isDarkMode && 'darkModeColor'}`}
                                        placeholder={`${moment(new Date()).format(
                                            "DD.MM.YYYY, 00:00:00"
                                        )}`}
                                        size="large"
                                        style={{width: "100%"}}
                                        showTime
                                    />
                                </div>
                                <div className="input_wrapper" style={{marginTop: "15px"}}>
                                    <DatePicker
                                        className={`left_input ${isDarkMode && 'darkModeColor'}`}
                                        placeholder={`${moment(new Date()).format(
                                            "DD.MM.YYYY, 23:59:59"
                                        )}`}
                                        size="large"
                                        style={{width: "100%"}}
                                        showTime
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form_input_wrapper" style={{marginTop: "20px"}}>
                            <div className="input_wrapper">
                                <button
                                    type="button"
                                    className="soft_btn"
                                    icon={<SearchOutlined/>}
                                    size="large"
                                    style={{width: "100%"}}
                                >
                                    Qidirish
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className={`acsess_right ${isDarkMode && 'darkModeBackground darkModeBorder'} `}>
                        
                        <AcsessTable
                            isDarkMode={isDarkMode}
                            accessTableData = {accessTableData}

                        />
                    </div>
                </div>
            </div>
        </>

    );
};

export default AcsessControlSearch;