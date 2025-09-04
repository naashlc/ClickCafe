import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const testimonios = [
  {
    id: 1,
    texto:
      "El café de ClickCafe es simplemente espectacular. El ambiente es acogedor y perfecto para estudiar o reunirse con amigos.",
    nombre: "Jonny Thomas",
    rol: "Project Manager",
    foto:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    texto:
      "Siempre encuentro un postre nuevo para probar. El servicio es rápido y la calidad nunca decepciona.",
    nombre: "Ana Rodríguez",
    rol: "Diseñadora UX",
    foto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    texto:
      "El mejor café de Piura. El cappuccino es mi favorito y siempre lo preparan perfecto.",
    nombre: "Carlos Pérez",
    rol: "Estudiante de Ingeniería",
    foto:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonio = testimonios[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonios.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonios.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="titulo-seccion">Nuestros clientes opinan</h2>
        
        <p className="text-center mt-2 parrafo-suave">
          Ellos ya disfrutaron de nuestra experiencia, ahora te toca a ti.
        </p>

        <div className="mt-10 relative bg-cafe-50 rounded-2xl p-10 shadow-suave text-center">
          <div className="text-5xl text-cafe-500">“</div>
          <p className="parrafo-suave mt-4 max-w-2xl mx-auto">{testimonio.texto}</p>

          <div className="mt-8">
            <div className="font-semibold text-cafe-900">{testimonio.nombre}</div>
            <div className="text-sm text-cafe-900/60">{testimonio.rol}</div>
          </div>

          <img
            src={testimonio.foto}
            alt={testimonio.nombre}
            className="w-16 h-16 rounded-full ring-4 ring-white absolute -bottom-8 left-1/2 -translate-x-1/2"
          />

          {/* Botones de navegación */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-6 -translate-y-1/2 boton-dorado p-2 rounded-full"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-6 -translate-y-1/2 boton-dorado p-2 rounded-full"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
