import React, { useState} from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Switch} from 'antd';
import { BrowserRouter } from 'react-router-dom'
import {MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

import { useSelector, useDispatch} from "react-redux";
import { getTheme, isRefresh } from "../../redux";

import useWindowDimensions from '../../hooks/hooks';

import { BiGridAlt, BsGraphUp, BsNewspaper, BsPersonBoundingBox, FiSearch, FiSettings} from "react-icons/all";

import searchIcon from "../../images/headerimg/searchIcon.png";
import headerImg from "../../images/headerimg/headerImg.png";

import NewStaff from '../newStaff/newStaff'
import RootPage from '../../pages/root';

import './style.css'


const {Header, Sider, Content} = Layout;
const { SubMenu } = Menu;

const Saidbar = () => {

    const { width } = useWindowDimensions();
    const sidebarWidth = width < 1370 ? 200 : 300;
    const isDarkMode = useSelector(state => state.theme.theme_data);
    
    // const [checkedItemTitle, setCheckedItemTitle] = useState('Dashboard');
    const [newStaffModal, setNewStaffModal] = useState(false);
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const handleChangeTheme = (state) => {
        dispatch(getTheme(state))
    }

    const addNewStaff = () => {
        setNewStaffModal(true)
    }

    const handleClickListItem = (title, id) => {
        // setCheckedItemTitle(title)
        dispatch(isRefresh(id))
    }

    return (
        <BrowserRouter>
                <Layout  style={{height: '100vh'}}>
                    <Sider width={sidebarWidth} theme={isDarkMode ? 'dark' : 'light'} className={`siderBackColor ${isDarkMode && 'darkModeBackground'}`}  trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo">
                            {
                                collapsed ? <span className={`logoText ${isDarkMode && 'darkModeColor'}`}> <span className="grenText">S</span>D</span> :
                                    <div className="fullText"> <span className={`logoText ${isDarkMode && 'darkModeColor'}`} ><span className="grenText">Soft</span>Data</span> <p className={`softdev ${isDarkMode && 'darkModeColor'}`}>Software Development</p> </div>
                            }
                        </div>
                        <hr/>

                        <Menu theme={isDarkMode ? 'dark' : 'light'} className={`siderBackColor ${isDarkMode && 'darkModeBackground'}`}
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                        >
                            <div>
                                {
                                    collapsed ? <p className="close_saidbar_title">DASHBOARD</p> :
                                        <p className="saidbar_title">DASHBOARD</p>
                                }
                            </div>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Dashboard">
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Dashboard', 1)}
                                 icon={<BiGridAlt />} key="1" >
                                    <Link to="/">
                                        Dashboard
                                    </Link>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" icon={< BsPersonBoundingBox />} title=" Face Control" >
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Face Control Qidiruv', 2)}
                                           key="2" icon={< FiSearch />}>
                                    <Link to="/face-control-search">
                                        Qidiruv
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Face Control Sozlamalar', 3)}
                                           key="3"  icon={< FiSettings />}>
                                    <Link to="/face-control-setting">
                                        Sozlamalar
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Face Control Statistika', 4)}
                                           key="4" icon={< BsGraphUp />}>
                                    <Link to="/face-control-analysis">
                                      Statistika
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={< BsNewspaper />} title="Access Control">
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Access Control', 5)} key="5"
                                           icon={< FiSearch />}>
                                    <Link to="/access-control-search">
                                        Qidiruv
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="saidbar_link" onClick={() => handleClickListItem('Access Control', 6)} key="6"
                                           icon={< FiSettings />}>
                                    <Link to="/acsess-setting">
                                        Sozlamalar
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Layout   className={`site-layout ${isDarkMode && 'darkModeLayautBg'} `}>
                        <NewStaff newStaffModal = {newStaffModal} setNewStaffModal = {setNewStaffModal} />
                        <Header theme={isDarkMode ? 'dark' : 'light'}  className={`site-layout-background headerr ${isDarkMode && 'darkModeBackground'} `} style={{ padding: 0 }}>
                            <div className={`${isDarkMode && 'darkModeColor'}`}>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: toggle,
                                })}
                            </div>
                            <div className="header_navbar">
                                <div className="search">
                                    <img className="searchIcon" src={searchIcon} alt=""/>
                                    <input className={`search_input ${isDarkMode && 'darkModeBackground, darkModeColor'} `} type="search" placeholder="Поиск..."/>
                                </div>
                                <div className="header_right">
                                    <Switch onChange={handleChangeTheme} />
                                    <div onClick={addNewStaff} className="rount_img">
                                        <img src={headerImg} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </Header>
                        <Content  className={`site-layout-background ${isDarkMode && 'darkModeBackground'}`}>
                            {/*<div style={{marginRight: '20px'}} className="content_top">*/}
                            {/*    <p className={`Content_title ${isDarkMode && 'darkModeColor'}`} >{checkedItemTitle}</p>*/}
                            {/*</div>*/}
                            <div className={`content_bottom ${isDarkMode && 'darkModeLayautBg'}`} >
                                <RootPage />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
        </BrowserRouter>
    );
};


export default Saidbar;




