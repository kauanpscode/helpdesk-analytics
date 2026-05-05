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

      const body = isLogin ? { email, password } : { name, email, password };

      const response = await fetch(apiUrl + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data: { token?: string; message?: string } = await response.json();

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
      if (err instanceof Error) setError(err.message);
      else setError("Erro inesperado");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-[#F6F9FC] p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-start text-gray-800">
          {isLogin ? "Acesse sua conta" : "Criar conta"}
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome só no register */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-3 py-2 border border-gray-300 focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none transition-all"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-3 py-2 border border-gray-300 focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full px-3 py-2 border border-gray-300 focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            {isLoading
              ? isLogin
                ? "Entrando..."
                : "Criando..."
              : isLogin
                ? "Entrar"
                : "Criar conta"}
          </button>

          {/* Alternância */}
          <div className="text-center text-sm text-gray-600">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <Link
              to={isLogin ? "/register" : "/login"}
              className="text-blue-600 font-medium"
            >
              {isLogin ? "Cadastre-se" : "Entrar"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
