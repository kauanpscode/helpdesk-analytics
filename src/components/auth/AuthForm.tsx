import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

type AuthType = "login" | "register";

type Props = {
  type: AuthType;
};

export default function AuthForm({ type }: Props) {
  const isLogin = type === "login";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_CI_API_URL as string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/login" : "/register";

      const body = isLogin
        ? { email, password }
        : { name, email, password };

      const response = await fetch(apiUrl + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data: {
        token?: string;
        message?: string;
      } = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro");
      }

      if (isLogin && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        return;
      }

      if (!isLogin) {
        navigate("/login");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-[var(--bg-secondary)] transition-colors duration-300 p-6">
      <div className="max-w-md w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-lg dark:shadow-black/30 p-8 transition-colors duration-300">
        
        <h2 className="text-3xl font-bold mb-6 text-start text-[var(--text)] transition-colors duration-300">
          {isLogin ? (
            <>
              Entre no <span className="text-[#216bde]">Help</span>
              <span className="text-[#15a059]">Flow</span>
            </>
          ) : (
            <>
              Crie uma conta no{" "}
              <span className="text-[#216bde]">Help</span>
              <span className="text-[#15a059]">Flow</span>
            </>
          )}
        </h2>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm transition-colors duration-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {!isLogin && (
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-input)] text-[var(--text)] placeholder:text-[var(--text-description)] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-input)] text-[var(--text)] placeholder:text-[var(--text-description)] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-input)] text-[var(--text)] placeholder:text-[var(--text-description)] outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#216bde] hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-all duration-300"
          >
            {isLoading
              ? isLogin
                ? "Entrando..."
                : "Criando..."
              : isLogin
                ? "Entrar"
                : "Criar conta"}
          </button>

          <div className="text-center text-sm text-[var(--text-muted)] transition-colors duration-300">
            {isLogin
              ? "Não tem uma conta?"
              : "Já tem uma conta?"}{" "}
            <Link
              to={isLogin ? "/register" : "/login"}
              className="text-[#216bde] hover:underline font-medium"
            >
              {isLogin ? "Cadastre-se" : "Entrar"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}