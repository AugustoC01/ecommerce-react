import { useState } from "react";

const CheckoutForm = ({ Checkout }) => {
  const [buyerData, setBuyerData] = useState({ name:'', phone:'', email:'' });

  const handleInputValue = ({ name, value }) => {
    setBuyerData({ ...buyerData, [name]: value })
  };

  return(
    <form onSubmit={e => e.preventDefault()}>
        <label htmlFor='name'>Nombre completo</label>
        <input
          name='name'
          type='text'
          placeholder='Ingresa tu nombre'
          className='checkout-input'
          value={buyerData.name}
          onChange={e => handleInputValue(e.target)}
        />
        <label htmlFor='phone'>Telefono de contacto</label>
        <input
          name='phone'
          type='number'
          className='checkout-input'
          value={buyerData.phone}
          onChange={e => handleInputValue(e.target)}
        />
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='ejemplo@dominio.com'
          className='checkout-input'
          value={buyerData.email}
          onChange={e => handleInputValue(e.target)}
        />
        <button type='submit'className='violet-btn' onClick={() => Checkout(buyerData)}>Enviar</button>
      </form>
  )
}

export default CheckoutForm