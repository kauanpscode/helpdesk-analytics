import AuthForm from "../../../components/auth/AuthForm";
import Header from "../../../layouts/Auth/header";
import Footer from "../../../layouts/Auth/footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AuthForm type="register" />
      <Footer />
    </div>
  );
}
