import { useState } from "react";
import { supabase } from "../supabaseClient";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("¡Inicio de sesión exitoso!");
      // aquí podrías redirigir al dashboard
      window.location.href = "/#/dashboard";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <Input
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </div>
  );
}
