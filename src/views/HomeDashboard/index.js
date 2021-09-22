import React from 'react'
import '../../styles/dashboard.css'
import { Layout, Space,Typography, Row,Col,Slider, Button } from 'antd';
import { Image } from 'antd';
import NewEventLogo from '../../assets/newevent.png'
import DashboardEvent from '../../components/Event/dashboard-events';
import DashboardLayoutComponent from '../../components/dashboard/dashboardlayout';
import NewEventComponent from '../../components/Event/newevent';


const {  Content } = Layout;
const { Title,Text } = Typography

const Dashboard = () => {

    // const [neweventmodelvisible,setneweventmodelvisible] = useState(false)

    return (
        <DashboardLayoutComponent>
            <Row>
                <Col span={18} className="dashboard-center">
                        <Content className="welcome-container">
                            <Row>
                                <Col span={12}>
                                    <Image src={NewEventLogo} preview={false} />

                                </Col>
                                <Col span={12}>
                                    <Title>Have an event in mind?</Title>
                                    <Button>Create event</Button>
                                </Col>
                            </Row>
                            <NewEventComponent isModalVisible={true} />
                        </Content>

                        <Text level={2} className="center-title">My recent events</Text>

                        <Space direction="horizontal">                            

                            {
                                [{id: 1},{id: 2},{id: 3}, {id: 4}].map( id => <DashboardEvent />)
                            }
                            
                        </Space>
                    </Col>
                    <Col span={6} className="dashboard-center-right">
                        <Title level={4}>Stats</Title>

                        <Row>
                            <Col className="stats-container">
                                <Title>2100</Title>
                                <Title level={2}>New users</Title>
                            </Col>
                            <Col className="stats-container">
                                <Title>2100</Title>
                                <Title level={2}>New users</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="stats-container">
                                <Title>2100</Title>
                                <Title level={2}>New users</Title>
                            </Col>
                            <Col className="stats-container">
                                <Title>2100</Title>
                                <Title level={2}>New users</Title>
                            </Col>
                        </Row>

                        <Title className="margin_top_10" level={4}>Followers interests</Title>

                        <Space className="interests-container" direction="vertical">
                            <Space direction="vertical">
                                <Space direction="horizontal">
                                    <Text>Marketing -</Text><Text className="number">140</Text>
                                </Space>

                                <Slider defaultValue={40} disabled={true} />
                            </Space>

                            <Space direction="vertical">
                                <Space direction="horizontal">
                                    <Text>Marketing -</Text><Text className="number">140</Text>
                                </Space>

                                <Slider defaultValue={70} disabled={true} />
                            </Space>

                            <Space direction="vertical">
                                <Space direction="horizontal">
                                    <Text>Marketing -</Text><Text className="number">140</Text>
                                </Space>

                                <Slider defaultValue={40} disabled={true} />
                            </Space>

                            <Space direction="vertical">
                                <Space direction="horizontal">
                                    <Text>Marketing -</Text><Text className="number">140</Text>
                                </Space>

                                <Slider defaultValue={40} disabled={true} />
                            </Space>

                        </Space>

                        <Button type="primary">UPDATE TO PREMIUN</Button>

                    </Col>
                </Row>
        </DashboardLayoutComponent>
    )
}

export default Dashboard