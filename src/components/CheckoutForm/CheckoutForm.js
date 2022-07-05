import './CheckoutForm.css'
import { useState } from "react";

const CheckoutForm = ({ AddOrder }) => {
  const [buyerData, setBuyerData] = useState({ name:'', phone:'', email:'' });

  const handleInputValue = ({ name, value }) => {
    setBuyerData({ ...buyerData, [name]: value })
  };

  return(
    <form onSubmit={e => e.preventDefault()}>
        <div className='checkout-input-container'>
          <img src="/images/id-card.png" alt="icon" className='form-icon' />
          <input
            name='name'
            type='text'
            placeholder='Ingresa tu nombre'
            className='checkout-input'
            value={buyerData.name}
            onChange={e => handleInputValue(e.target)}
            required
          />
        </div>
          <div className='checkout-input-container'>
          <img src="/images/phone.png" alt="icon" className='form-icon' />
          <input
            name='phone'
            type='number'
            placeholder='Ingresa tu telefono'
            className='checkout-input'
            value={buyerData.phone}
            onChange={e => handleInputValue(e.target)}
            required
          />
        </div>
        <div className='checkout-input-container'>
          <img src="/images/email.png" alt="icon" className='form-icon' />
          <input
            name='email'
            type='email'
            placeholder='Ingresa tu email'
            className='checkout-input'
            value={buyerData.email}
            onChange={e => handleInputValue(e.target)}
            required
          />
        </div>
        <button type='submit'className='violet-btn form-btn' onClick={() => AddOrder(buyerData)}>Enviar</button>
      </form>
  )
}

export default CheckoutForm