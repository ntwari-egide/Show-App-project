import '../../styles/dashboard.css'
import { Layout, Menu, Space,Typography, Row,Col } from 'antd';
import { Image } from 'antd';
import LogoPng from '../../assets/red_icon.png'
import {IoIosNotifications} from "react-icons/io" 
import { useState } from 'react';
import {IoIosClose} from "react-icons/io"
import avatarPng from "../../assets/avatar.png"
import { Select } from 'antd';
import {AiOutlineRight} from "react-icons/ai"

const { Option } = Select;

const { Header, Content, Sider } = Layout;
const { Title,Text } = Typography

const DashboardLayoutComponent = (props) => {

    const [hovericon,sethovericon ] = useState({
        fontSize: 25,
        color: 'rgba(142,152,171,1)'
    })

    const [notificationvisible,setnotificationvisibility] =  useState(false)

    return (
        <Layout className="dashboard-component poppins_font">
        <Sider collapsible collapsed={false}>
          <div className="logo">
            <Image
                    preview={false}
                    width={200}
                    src={LogoPng}
            />
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                <Space direction="vertical" className="dashboard-left-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z" fill="rgba(193,43,61,1)"/></svg>

                    <Title level={5}>Home</Title>
              </Space>
            </Menu.Item>
            <Menu.Item key="2">
                <Space direction="vertical" className="dashboard-left-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="rgba(142,152,171,1)"/></svg>

                    <Title level={5}>Profile</Title>
                </Space>
            </Menu.Item>
            <Menu.Item key="3">
                <Space direction="vertical" className="dashboard-left-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.334 4.545a9.99 9.99 0 0 1 3.542-2.048A3.993 3.993 0 0 0 12 3.999a3.993 3.993 0 0 0 3.124-1.502 9.99 9.99 0 0 1 3.542 2.048 3.993 3.993 0 0 0 .262 3.454 3.993 3.993 0 0 0 2.863 1.955 10.043 10.043 0 0 1 0 4.09c-1.16.178-2.23.86-2.863 1.955a3.993 3.993 0 0 0-.262 3.455 9.99 9.99 0 0 1-3.542 2.047A3.993 3.993 0 0 0 12 20a3.993 3.993 0 0 0-3.124 1.502 9.99 9.99 0 0 1-3.542-2.047 3.993 3.993 0 0 0-.262-3.455 3.993 3.993 0 0 0-2.863-1.954 10.043 10.043 0 0 1 0-4.091 3.993 3.993 0 0 0 2.863-1.955 3.993 3.993 0 0 0 .262-3.454zM13.5 14.597a3 3 0 1 0-3-5.196 3 3 0 0 0 3 5.196z" fill="rgba(142,152,171,1)"/></svg>

                    <Title level={5}>Settings</Title>
                </Space>
            </Menu.Item>
            <Menu.Item key="4" className="margin_top_5">
                <Space direction="vertical" className="dashboard-left-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-9h4v2h-4v3l-4-4 4-4v3z" fill="rgba(142,152,171,1)"/></svg>

                    <Title level={5}>Logout</Title>
                </Space>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background dashboard-header-nav" style={{ padding: 0 }} >
                <Row>
                    <Col span={18}>
                        <Title level={2}>Organizer Portal</Title>
                    </Col>
                    <Col span={6}>
                         <Space className="float_right" direction="horizontal">
                                <div className="margin_top_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" fill="rgba(142,152,171,1)"/></svg>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" fill="rgba(142,152,171,1)"/></svg>

                                <p className="margin_right_1"><Text className="font_sm">Yves Honore</Text></p>

                                <div className="margin_right_1">
                                    <IoIosNotifications 
                                        className="cursor_pointer"
                                        onClick={() => setnotificationvisibility(true)}
                                        fontSize={hovericon.fontSize}  
                                        color={hovericon.color} 
                                        onMouseEnter={() => sethovericon({
                                            fontSize: 29,
                                            color: '#c12b3d'
                                        })} 
                                        onMouseLeave={() => sethovericon({
                                            fontSize: 25,
                                            color: 'rgba(142,152,171,1)'
                                        })} 
                                    />
                                </div>
                            </Space>
                    </Col>
                </Row>


                {/* notification container */}
                
                {
                    notificationvisible? 
                    <Layout className="collapsible-notification-panel">
                        <Row className="header">
                            <Col span={22}><Title className="subtitle_text pure_white_color">My activities</Title></Col>
                            <Col> 
                                <IoIosClose className="cursor_pointer"  onClick={()=> setnotificationvisibility(false)} fontSize={35} color={'white'} />
                            </Col>
                        </Row>
                        <Row className="subheader">
                            <Col span={18}><Title level={2} className="normal_text white">Filter activity by</Title></Col>
                            <Col span={6}> 
                                <Select defaultValue="Today" >
                                    <Option value="1">Today</Option>
                                    <Option value="2">This week</Option>
                                    <Option value="3">This month</Option>
                                    <Option value="4">Past 3 month</Option>
                                    <Option value="5">This year</Option>
                                </Select>                                
                            </Col>
                        </Row>

                        <div className="notification-main-content">
                            {
                                [...Array(6)].map((id) => <>
                                    <Row className="notificaiton-card">
                                        <Col span={4}><Image preview={false} src={avatarPng}/></Col>
                                        <Col span={17}>
                                            <Title level={3} className="normal_text mabo16 grey_color"><span>Yves Honore</span> and <span>245</span> others registered on your event <span>Africa Young Techies Summit 2020</span>. </Title>
                                            <Title level={3} className="time normal_text mabo16 grey_color">14 Feb 2020</Title>
                                        </Col>
                                        <Col span={1} className="margin_left_1">
                                            <AiOutlineRight fontSize={15} color={'gray'}/>
                                        </Col>
                                    </Row>
                                </>)
                            }
                        </div>
                    </Layout> : ''
                }

            </Header>
            <Content>
                {props.children}
            </Content>
        </Layout>
      </Layout>
    )
}

export default DashboardLayoutComponent