import React, { useEffect, useState } from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenido 🚀
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          ¿No tienes cuenta? <a href="#" className="text-indigo-600 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
