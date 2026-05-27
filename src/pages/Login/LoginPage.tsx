import AuthForm from "../../components/auth/AuthForm";
import Header from "../../layouts/Auth/header";
import Footer from "../../layouts/Auth/footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <AuthForm type="login" />
    <Footer />
    </div>
  )
}