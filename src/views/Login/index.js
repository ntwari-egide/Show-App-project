import AuthenticationComponent from "../../components/AuthenticationForm"

const LoginComponent = () => {
    return (
        <AuthenticationComponent 
            isLogin={false} 
            isForgotPasswordStep1={false} 
            isForgotPasswordStep2={true} 
        />
    )
}

export default LoginComponent
