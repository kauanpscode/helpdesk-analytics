import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./LoginForm";
import helpFlowLogo from "../../assets/images/logos/helpflow-logo-inteira.png";

export default function LoginPage () {
    return (
        <AuthLayout>
            <div>
                <img src={helpFlowLogo} alt="Logo" className="mb-6 mx-auto w-40"></img>
                <LoginForm />
            </div>
        </AuthLayout>
    )
}