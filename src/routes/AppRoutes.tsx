import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EmpresaPage from "../pages/Empresa/EmpresaPage";
import IdealizacaoPage from "../pages/Idealizacao/IdealizacaoPage";
import ContatoPage from "../pages/Contato/ContatoPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/empresa" element={<EmpresaPage />} />
                <Route path="/idealizacao" element={<IdealizacaoPage />} />
                <Route path="/contato" element={<ContatoPage />} />
            </Routes>
        </BrowserRouter>
    )
}