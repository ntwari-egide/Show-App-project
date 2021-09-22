import { Modal,Typography } from 'antd';
import React,{useState} from "react"
import { Upload, Row, Col } from 'antd';
 import { Field, Form, Formik,ErrorMessage } from 'formik';

const { Title } = Typography


const NewEventComponent = (props) => {
    const [visibility,setvisibility] = useState(props.isModalVisible)
 

    return (
        <Modal 
        width={'53%'} 
        style={{ top: 20 }}
        footer={
            <Row class="modal-footer pad32 matb64">
                <Col span={11}></Col>
                <Col>
                    <button  href="#" class="cursor_pointer btn red_button_outline">SAVE EVENT</button>
                    <button  href="#" class="cursor_pointer btn red_button malo16">SAVE AND PUBLISH</button>
                </Col>
            </Row>
        } 
        title={<Title className="subtitle_text" level={3}>Create new event</Title>} 
        onCancel={() => setvisibility(false) } 
        visible={visibility}>
            
                    <Formik
                        initialValues={{ eventname: '', eventcategory: '', description: '',date: '', starttime: '', endtime: '',value:'' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Sorry boss!';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form className="new_event_form ">

                                <Row>
                                    <Col span={14} className="pad32">
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        >

                                            <Row className="grey">
                                                <Col><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="rgba(149,164,166,1)"/></svg></Col>
                                                <Col className="upload-img-h1">Upload Image</Col>
                                            </Row>
                                            
                                        </Upload>
                                    </Col>
                                    <Col span={10} className="pad32">
                                        <label htmlFor="eventname">Event name</label>
                                        <ErrorMessage name="eventname" component="p" /> <br />
                                        <Field type="text" name="eventname" placeholder="Name" /> <br /><br />

                                        <label htmlFor="eventcategory">Event category</label>
                                        <ErrorMessage name="eventcategory" component="p" /> <br />
                                        <Field as="select" name="eventcategory">
                                            <option value="one">One</option>
                                            <option value="one">Two</option>
                                            <option value="one">Three</option>    
                                        </Field> <br /><br />

                                        <label htmlFor="eventcategory">Event category</label>
                                        <ErrorMessage name="eventcategory" component="p" /> <br />
                                        <Field as="select" name="eventcategory">
                                            <option value="one">One</option>
                                            <option value="one">Two</option>
                                            <option value="one">Three</option>    
                                        </Field> <br />
                                        
                                    </Col>
                                </Row>

                                <div className="pad32">
                                    <label htmlFor="eventcategory">Description</label>
                                    <ErrorMessage name="eventcategory" component="p" /> <br />
                                    <Field as="textarea" name="eventcategory" placeholder={'Description'} /> <br /><br />

                                    <Row>
                                        <Col span={8}>
                                            <label htmlFor="date">Date</label><br />
                                            <ErrorMessage name="date" component="p" />
                                            <input type="date" name="date" />
                                        </Col>
                                        <Col span={7} className="margin_left_1">
                                            <label htmlFor="starttime">Start time</label>
                                            <ErrorMessage name="starttime" component="p" /> <br />
                                            <input type="time" name="date" />
                                        </Col>
                                        <Col span={8} className="margin_left_1">
                                            <label htmlFor="daendtimete">End time</label>
                                            <ErrorMessage name="endtime" component="p" /> <br />
                                            <input type="time" name="endtime" />
                                        </Col>
                                    </Row><br />

                                    <label htmlFor="venue">Venue</label>
                                    <ErrorMessage name="venue" component="p" /> <br />
                                    <Field type="text" name="venue" placeholder={'Enter the event venue or pick from the map'} /> <br />
                                </div>

                            </Form>
                        )}
                    </Formik>
                
            
        </Modal>
    )
}

export default NewEventComponent