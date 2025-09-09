import React, { useEffect, useState } from 'react'

import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo / título */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full text-2xl font-bold shadow-md">
            🚀
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            PinzOS CRM
          </h1>
          <p className="text-gray-500">Inicia sesión en tu cuenta</p>
        </div>

        {/* Formulario */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Enlaces */}
        <p className="mt-6 text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
