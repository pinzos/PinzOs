import React from "react";
export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded text-white font-bold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

