import { Space, Divider, Typography, Image, Row, Col } from 'antd';
import { BsArrowRight } from 'react-icons/bs';

const  { Title } = Typography

const DashboardEvent = () =>{
    
    return (
        <Space className="event-container" direction="vertical">
            <Image src={'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} preview={false} />

            <Title level={4} className="event-name">East African Techies 2020</Title>
            <Title level={4} className='date'>14 February 2020</Title>

            <Divider />

            <Row className="actions margin_botton_1">
                <Col span={14}><p  className="status margin_right_1 ">ONGOING</p></Col>

                <Col span={8}>
                    <div className="float_right cursor_pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z" fill="rgba(0,0,0,0.43)"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(0,0,0,0.43137254901960786)"/></svg>

                        <Space><BsArrowRight fontSize={18} color={'#c12b3d'}/></Space>
                    </div>
                </Col>
            </Row>
        </Space>
    )
}

export default DashboardEvent