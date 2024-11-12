import { useState } from 'react';
import { reset } from '../ReduxToolkit/cartSlice';
import { useDispatch } from 'react-redux';

const States = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // Función para alternar el carrito y cerrar el menú si se abre el carrito
  const toggleCart = () => {
    setCartOpen(!cartOpen);
    // Cerrar el menú si se abre el carrito en pantallas pequeñas
    if (cartOpen && window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  // Función para alternar el menú y cerrar el carrito si está abierto
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.innerWidth <= 768 && cartOpen) {
      setCartOpen(false);
    }
  };

  const toggles = () => {
    toggleCart();
    handleMenuToggle();
  }

  const resetAndToggles = () => {
    toggles();
    dispatch(reset());
  }

  return {
    cartOpen,
    isMenuOpen,
    toggleCart,
    handleMenuToggle,
    toggles,
    resetAndToggles,
  };
};

export default States;