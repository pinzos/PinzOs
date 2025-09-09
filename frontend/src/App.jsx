import React, { useEffect, useState } from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">🌟 PinzOS CRM</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-5 py-3 border-2 border-indigo-300 rounded-xl focus:border-indigo-600 focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3 border-2 border-indigo-300 rounded-xl focus:border-indigo-600 focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="mt-8 text-center text-gray-500">
          ¿No tienes cuenta?
          <a href="#" className="text-indigo-600 hover:underline ml-1">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
