import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [passwond, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800">Acesse a sua conta</h2>
      </div>
    </div>
  );
}
