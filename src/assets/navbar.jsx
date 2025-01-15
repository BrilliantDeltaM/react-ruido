import { useState } from 'react';

const Navbar = ({ onCarritoClick, carritoCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Botón del menú para móviles */}
          <button
            id="menu-btn"
            aria-label="Abrir menú"
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-fluorescentYellow">
            RUIDO
          </a>

          {/* Links de navegación */}
          <div className="flex md:space-x-4 items-center">
            <a
              href="index.html"
              className="hidden md:block hover:text-fluorescentYellow"
            >
              Inicio
            </a>
            <a
              href="index.html"
              className="hidden md:block hover:text-fluorescentYellow"
            >
              Tienda
            </a>
            <a
              href="index.html"
              className="hidden md:block hover:text-fluorescentYellow"
            >
              Murales
            </a>
            <a
              href="index.html"
              className="hidden md:block hover:text-fluorescentYellow"
            >
              Podcast
            </a>
            <a
              href="index.html"
              className="hidden md:block hover:text-fluorescentYellow"
            >
              Murales
            </a>

            {/* Carrito */}
            <button
              className="hover:text-fluorescentYellow relative"
              onClick={onCarritoClick}
              aria-label="Ver carrito"
            >
              🛒
              <span
                id="carrito-count"
                className={`absolute -top-2 -right-2 bg-fluorescentYellow text-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full ${
                  carritoCount === 0 ? 'hidden' : ''
                }`}
              >
                {carritoCount}
              </span>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden bg-black">
            <a
              href="index.html"
              className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black w-full"
            >
              Inicio
            </a>  
            <button
              className="volver-productos block px-4 py-2 w-full text-left text-white hover:bg-fluorescentYellow hover:text-black"
            >
              Productos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
