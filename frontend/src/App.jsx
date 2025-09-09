import React, { useEffect, useState } from 'react'

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-white text-center mb-6">PinzOS CRM</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
