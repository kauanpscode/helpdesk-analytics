import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import LogoutPage from "../pages/Auth/LogoutPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import CompanyPage from "../pages/Public/Company/CompanyPage";
import IdeationPage from "../pages/Public/Ideation/IdeationPage";
import ContactPage from "../pages/Public/Contact/ContactPage";
import ProfilePage from "../pages/Dashboard/ProfilePage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/ideation" element={<IdeationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}