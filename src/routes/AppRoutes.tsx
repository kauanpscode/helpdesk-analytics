import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home/HomePage.tsx";
import LoginPage from "../pages/Login/LoginPage.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}