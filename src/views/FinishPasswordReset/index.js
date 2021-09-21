import AuthenticationComponent from "../../components/AuthenticationForm"

const LastStepPasswordResetComponent = () => {

    return (
        <AuthenticationComponent 
            isLogin={false} 
            isForgotPasswordStep1={false} 
            isForgotPasswordStep2={true}
        />
    )

}

export default LastStepPasswordResetComponent