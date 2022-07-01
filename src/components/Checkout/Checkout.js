import { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {

  const handleCheckout = (buyerData) => {
    console.log(buyerData)
  };

  return (
    <div>
      <h1 className='checkout-title'>Ingrese sus datos de contacto:</h1>
      <CheckoutForm Checkout={handleCheckout}/>
    </div>
  );
};

export default Checkout;