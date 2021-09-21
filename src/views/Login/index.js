import AuthenticationComponent from "../../components/AuthenticationForm"

const LoginComponent = () => {
    return (
        <AuthenticationComponent 
            isLogin={true} 
            isForgotPasswordStep1={false} 
            isForgotPasswordStep2={false} 
        />
    )
}

export default LoginComponent
