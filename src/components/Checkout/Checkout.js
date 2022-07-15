import './Checkout.css';
import { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import EmptyMsg from '../EmptyMsg/EmptyMsg';
import { useCart } from '../../Context/CartContext';
import { useNotification } from '../../notification/Notification';
import { getCheckout } from '../../services/firebase/firestore';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, totalToPay, clearCart } = useCart();
  const setNotification = useNotification();

  const handleCheckout = (buyerData) => {
    setLoading(true);
    const day = new Date();
    const today = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
    const newOrder = {
      buyerData,
      date: today,
      items: cart,
      total: totalToPay(),
    };

    getCheckout(cart, newOrder)
      .then(({ id }) => {
        clearCart();
        setNotification(
          'success',
          `Su orden se genero correctamente. El id de su orden es: ${id}`,
          'https://c.tenor.com/Rho9PlHA0ZQAAAAi/kikicat-kikiapp.gif'
        );
      })
      .catch((error) => {
        error.type === 'out_of_stock'
          ? setNotification(
              'error',
              'Hay productos que no tienen stock',
              'https://c.tenor.com/WOwfrVTrn9wAAAAi/kikiapp-kikicat.gif'
            )
          : console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (cart.length === 0)
    return (
      <EmptyMsg
        message={'El carrito esta vacio...'}
        img={'https://c.tenor.com/TzCy1obiigsAAAAi/kikicat-kikiapp.gif'}
      />
    );

  return (
    <div className='checkout-container'>
      <h1 className='checkout-title'>Ingrese sus datos de contacto:</h1>
      <CheckoutForm AddOrder={handleCheckout} />
    </div>
  );
};

export default Checkout;
