import AuthenticationComponent from "../../components/AuthenticationForm"

const ResetPasswordComponent = () => {
    return (
        <AuthenticationComponent 
            isLogin={false} 
            isForgotPasswordStep1={true} 
            isForgotPasswordStep2={false} 
        />
    )
}

export default ResetPasswordComponent