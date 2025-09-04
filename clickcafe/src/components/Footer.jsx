export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cafe-700 to-cafe-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + descripción */}
        <div>
          <div className="text-2xl font-bold tracking-wide">Bean Scene</div>
          <p className="mt-3 text-white/80 text-sm leading-relaxed">
            Donde el aroma del café se encuentra con la pasión. Compartimos
            experiencias únicas en cada taza ☕
          </p>
          <div className="mt-4 flex gap-4 text-white/90">
            <a
              href="https://wa.me/51948107152"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              className="hover:text-cafe-300 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@miapiurasnackcafe"
              aria-label="TikTok"
              className="hover:text-cafe-300 transition-colors"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/miapiura/"
              aria-label="Instagram"
              className="hover:text-cafe-300 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg">About</h3>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                News & Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                Help & Support
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                How we work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cafe-300 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-lg">Contáctanos</h3>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>Av. Ejemplo 123, Piura</li>
            <li>+51 948 107 152</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Bean Scene. Todos los derechos reservados.
      </div>
    </footer>
  );
}
