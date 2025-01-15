import { useState } from 'react';
import Navbar from './assets/navbar.jsx';
import ProductoSeccion from './assets/productoSeccion.jsx';
import Footer from './assets/footer.jsx';
import Carrito from './assets/carrito.jsx';
import products from './assets/producto.jsx';
import './App.css';

function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const toggleCarrito = () => {
    if (carritoVisible) {
      setIsAnimating(true);
      setTimeout(() => {
        setCarritoVisible(false);
        setIsAnimating(false);
      }, 300); // Duración de la animación
      document.body.style.overflow = 'auto'; // Volver a habilitar el scroll en el body
    } else {
      setCarritoVisible(true);
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll en el body
    }
  };

  const addToCart = (product) => {
    setCarrito((prevCarrito) => {
      const existingProduct = prevCarrito.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCarrito.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...product, quantity: 1 }];
      }
    });
  };

  const carritoCount = carrito.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <Navbar onCarritoClick={toggleCarrito} carritoCount={carritoCount} />
      <div className="min-h-screen">
        <ProductoSeccion products={products} addToCart={addToCart} />
        {carritoVisible && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleCarrito} // Cierra el carrito al hacer clic en el fondo oscuro
            ></div>
            <div
              className={`fixed right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-lg z-50 overflow-y-auto transform ${
                isAnimating ? 'animate-slideOut' : 'animate-slideIn'
              }`}
            >
              <Carrito carrito={carrito} setCarrito={setCarrito} onVolverClick={toggleCarrito} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

