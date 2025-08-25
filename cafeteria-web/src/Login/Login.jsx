import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import SplitText from "../React Bits/SplitText";
import FadeContent from '../React Bits/FadeContent'

function Login() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animación del título completa ");
  };

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        {init && (
          <Particles
            id="tsparticles"
            options={{
              background: { color: "#ffffffff" },
              fpsLimit: 60,
              particles: {
                number: { value: 60, density: { enable: true, area: 800 } },
                color: { value: "#000000ff" },
                shape: { type: "circle" },
                opacity: { value: 0.6 },
                size: { value: { min: 1, max: 4 } },
                move: { enable: true, speed: 2, outModes: "out" },
                links: {
                  enable: true,
                  color: "#ff0000ff",
                  distance: 150,
                  opacity: 0.4,
                  width: 1,
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" },
                },
                modes: {
                  repulse: { distance: 100 },
                  push: { quantity: 3 },
                },
              },
            }}
            className="absolute inset-0 -z-10"
          />
        )}

        {/* Contenido encima */}
        <div className="w-full max-w-4xl bg-red-50 p-6 rounded-lg shadow-md flex items-center relative z-10">
          <div className="w-1/2 pr-6">
            {/* Aquí usamos SplitText en vez del h1 normal */}
            <SplitText
              text="Sistema de Cafeterías"
              className="block w-full text-center text-4xl font-bold text-red-500 mb-2"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            <SplitText
              text="Inicia sesión para acceder al sistema"
              className="block w-full text-center text-lg text-gray-700 mb-6"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  className="bg-white border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="email"
                  placeholder="Ingrese su correo universitario"
                />
                <div className="text-sm text-gray-500 mt-1">
                  Ejemplo de usuario: U1533148.
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Contraseña
                </label>
                <input
                  className="bg-white border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer w-full bg-orange-400 hover:bg-orange-500 text-white font-bold p-5 rounded-lg transition-colors"
              >
                Iniciar sesión
              </button>
            </form>
          </div>

          <div className="w-1/2 flex justify-center">
            <img
              className="rounded-lg shadow-lg object-cover"
              src="/cafeteria.jpg"
              alt="cafeteria"
            />
          </div>
        </div>
      </div>

    </FadeContent>


  );
}

export default Login;
