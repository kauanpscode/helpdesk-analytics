import { useEffect, useState } from "react";
import Header from "../../layouts/dashboard/header";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  location: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_CI_API_URL as string;

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);

        const response = await fetch(apiUrl + "/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar perfil");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Carregando perfil...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text)]">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-sm">

          <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b">
            <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold">
              {user?.name?.charAt(0)}
            </div>

            <div>
              <h1 className="text-2xl font-extrabold">{user?.name}</h1>
              <p className="text-sm text-blue-500 font-semibold mt-1">
                {user?.role}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                {user?.location}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-[var(--text-secondary)]">
                E-mail
              </span>
              <p className="text-sm font-medium">{user?.email}</p>
            </div>

            <div>
              <span className="text-xs font-semibold text-[var(--text-secondary)]">
                Cargo
              </span>
              <p className="text-sm font-medium">{user?.role}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}