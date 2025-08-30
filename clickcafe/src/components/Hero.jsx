import Boton from './ui/boton'

export default function Hero() {
  const fondo = '/hero.jpg'; // debe existir en public

  return (
    <section className="relative min-h-[70vh] md:h-[78vh] grid place-items-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{ backgroundImage: `url(${fondo})` }}
        aria-hidden="true"
      />
      {/* De negro a transparente (como en tu Figma) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="font-marca text-6xl md:text-8xl">Mia Piura</h1>
        <p className="max-w-xl mt-6 text-white/90 parrafo-suave">
          Cafetería acogedora en UTP - Piura ubicada en A-02 con café de calidad, postres y un ambiente acogedor.
        </p>
        <div className="mt-8">
          <Boton onClick={() => document.getElementById('recomendados')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Productos
          </Boton>
        </div>
      </div>
    </section>
  );
}
