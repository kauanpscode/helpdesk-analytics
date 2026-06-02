import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth token
    localStorage.removeItem("token");
    
    // Redirect to login page
    navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium">Saindo...</p>
      </div>
    </div>
  );
}
