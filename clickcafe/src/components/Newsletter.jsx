import Boton from "./ui/boton";
import { EnvelopeIcon, GiftIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-cafe-900 to-cafe-700 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Suscríbete para recibir novedades
        </h2>
        <p className="mt-2 text-white/80">
          Únete a nuestra comunidad y recibe descuentos, tips de café y noticias exclusivas
        </p>

        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left md:text-center">
          <div className="flex md:flex-col items-center gap-3">
            <EnvelopeIcon className="w-8 h-8 text-cafe-300" />
            <span>Noticias y novedades semanales</span>
          </div>
          <div className="flex md:flex-col items-center gap-3">
            <GiftIcon className="w-8 h-8 text-cafe-300" />
            <span>Descuentos exclusivos para suscriptores</span>
          </div>
          <div className="flex md:flex-col items-center gap-3">
            <SparklesIcon className="w-8 h-8 text-cafe-300" />
            <span>Tips y recetas para amantes del café</span>
          </div>
        </div>

        {/* Formulario */}
        <form
          className="mt-10 flex flex-col md:flex-row items-center gap-3 max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            className="flex-1 rounded-full px-5 py-3 text-black w-full focus:ring-2 focus:ring-cafe-400 outline-none"
            placeholder="Ingresa tu correo"
          />
          <Boton type="submit" className="w-full md:w-auto">
            Suscribirse
          </Boton>
        </form>

        {/* Checkbox de consentimiento */}
        <label className="flex items-center gap-2 text-sm text-white/70 mt-3 justify-center">
          <input type="checkbox" className="accent-cafe-500" required />
          Acepto recibir correos con promociones y novedades
        </label>
      </div>

      {/* Granos decorativos animados */}
      <img
        src="/beans.png"
        alt="granos"
        className="absolute bottom-0 left-0 w-72 opacity-40 animate-bounce-slow pointer-events-none"
      />
      <img
        src="/beans.png"
        alt="granos"
        className="absolute bottom-0 right-0 w-72 opacity-40 rotate-180 animate-bounce-slow pointer-events-none"
      />
    </section>
  );
}
