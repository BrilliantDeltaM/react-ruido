import React, { useState } from "react";
import OptionsHolder from "./menuOpciones";

const Carrito = ({ carrito, setCarrito, onVolverClick }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(""); // Estado para la opción seleccionada

  const calcularTotal = () =>
    carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);

  const incrementarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === id ? { ...producto, quantity: producto.quantity + 1 } : producto
      )
    );
  };

  const Eliminar = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };

  const decrementarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((producto) =>
          producto.id === id && producto.quantity > 1
            ? { ...producto, quantity: producto.quantity - 1 }
            : producto
        )
        .filter((producto) => producto.quantity > 0)
    );
  };

  const generarMensaje = () => {
    const detalles = carrito.map((producto) =>
      `${producto.name} x${producto.quantity} - $${producto.price * producto.quantity}`).join('\n');

    const total = calcularTotal().toFixed(2);
    const metodoEnvio = opcionSeleccionada
      ? `\n\n*Método de envío:* ${opcionSeleccionada}`
      : "\n\n*Método de envío:* No seleccionado";

    return `*Detalles de la compra:*\n\n${detalles}\n\n*Total: $${total}*${metodoEnvio}`;
  };

  const crearLinkWhatsApp = () => {
    const mensaje = generarMensaje();
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/5493816061625?text=${mensajeCodificado}`;
  };

  const manejarContinuarClick = () => {
    const link = crearLinkWhatsApp();
    window.open(link, "_blank");
  };

  const opciones = [
    { value: "retiro", label: "Retiro en local" },
    { value: "envio", label: "Envío a domicilio" },
  ];

  const handleSelection = (selected) => {
    setOpcionSeleccionada(selected.label); // Actualizar el estado con la opción seleccionada
  };

  return (
    <section className="px-4">
      <h2 className="text-2xl font-bold text-center mb-8 border-gray border-b py-4">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <div>
          <p className="text-center text-gray-600">El carrito está vacío.</p>
          <div className="flex justify-center mt-8">
            <button
              onClick={onVolverClick}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Volver
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {carrito.map((producto) => (
            <div key={producto.id} className="flex items-center space-x-4 border-b pb-4">
              <img
                src={producto.image}
                alt={producto.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{producto.name}</h3>
                <p className="text-gray-600">${producto.price}</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2 border border-gray">
                  <button
                    onClick={() => decrementarCantidad(producto.id)}
                    className="px-3 py-1 text-black rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{producto.quantity}</span>
                  <button
                    onClick={() => incrementarCantidad(producto.id)}
                    className="px-3 py-1 text-black rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => Eliminar(producto.id)}
                  className="px-3 py-1 text-black hover:text-gray-700 ml-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 10.5v6m3-6v6m3-6v6M4.5 7.5h15m-13.5 0l.75 12.75c.075.9.675 1.5 1.575 1.5h8.85c.9 0 1.5-.6 1.575-1.5l.75-12.75m-12.75 0h12.75M9 4.5h6m-6 0a1.5 1.5 0 00-1.5 1.5m7.5-1.5a1.5 1.5 0 011.5 1.5m-9 0h10.5"
                    />
                  </svg>
                </button>
              </div>

            </div>
          ))}

          <div className="mx-auto">
            <h1 className="text-2xl font-bold mb-6">Medios de envío</h1>
            <OptionsHolder options={opciones} onSelect={handleSelection} />
          </div>

          <div className="text-right text-xl font-bold">
            Total: ${calcularTotal().toFixed(2)}
          </div>

          <div className="flex flex-col space-y-1">
            <button
              onClick={manejarContinuarClick}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Continuar
            </button>
            <button
              onClick={onVolverClick}
              className="text-gray-700 px-6 py-2 rounded-lg hover:text-gray-800"
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carrito;
