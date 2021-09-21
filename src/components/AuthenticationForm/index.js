import { Formik,Form, Field, ErrorMessage } from "formik";
import { Image } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import Logo from '../../assets/red_icon.png'
import "../../styles/login.css"
import { Link,useHistory } from "react-router-dom"

const { Title, Text } = Typography;

const AuthenticationComponent = (props) => {

    const history = useHistory()

    const routetonextpage = () => {
        props.isLogin ? history.push('/reset-password') : 
        props.isForgotPasswordStep1? history.push('/reset-password-2') :
        history.push('/dashboard')
    }

    return (
        <div className="form-container">

            <div className="main-container bg_white poppins_font">
                <div className="small-div"></div>
                <div className="form-content ">
                    <Image preview={false} src={Logo} />
                
                    { props.isLogin ? <Title>Organizer Login</Title> : '' }
                    { props.isForgotPasswordStep1 ? <Title>Forgot password</Title> : '' }
                    { props.isForgotPasswordStep2 ? <Title>Set new password</Title> : '' }

                    { props.isLogin ?  <Text>User your company email to login</Text>:  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text> }

                    <Formik
                        initialValues={{ email: '', password: '' }}
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
                            <Form>
                                { props.isLogin || props.isForgotPasswordStep1 ? 
                                <>
                                    <label htmlFor="email">Email</label> <br />
                                    <ErrorMessage name="email" component="p" /> <br />
                                    <Field type="email" name="email" placeholder="Email" /> <br />
                                </>: '' }

                                { props.isLogin || props.isForgotPasswordStep2  ? 
                                <>
                                    <label htmlFor="email">Password</label> <br />                            
                                    <Field type="password" name="password"  placeholder="Enter password" /> <br />
                                    <ErrorMessage name="password" component="p" />
                                </>
                                
                                : '' }

                                { props.isLogin ? <><Button onChange={routetonextpage} type="primary" loading={isSubmitting}> Login </Button> <br /><br /></>  : '' }
                                { props.isForgotPasswordStep1 ? <><Button onChange={routetonextpage} type="primary" loading={isSubmitting}> Submit </Button> <br /><br /></> : '' }
                                { props.isForgotPasswordStep2 ? <><Button onChange={routetonextpage} type="primary" loading={isSubmitting}> Change password </Button> <br /><br /></> : '' }



                                { props.isLogin ? <p className="forgot-pass">Forgot password? <Link to={'/reset-password'}  className="link">Reset</Link></p>  : '' }
                                { props.isForgotPasswordStep1 ? <p className="forgot-pass">Back to? <Link to={'/login'}  className="link">Login</Link></p> : '' }
                                { props.isForgotPasswordStep2 ? <p className="forgot-pass">Recall password? <Link to={'/login'}  className="link">Login</Link></p> : '' }

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default AuthenticationComponent
