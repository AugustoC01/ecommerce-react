import './Checkout.css'
import { useState, useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CartContext from '../../Context/CartContext';

const Checkout = () => {
  

  return (
    <div className='checkout-container'>
      <h1 className='checkout-title'>Ingrese sus datos de contacto:</h1>
      {/* <CheckoutForm cart={cart} total={total}/> */}
      <CheckoutForm />
    </div>
  );
};

export default Checkout;