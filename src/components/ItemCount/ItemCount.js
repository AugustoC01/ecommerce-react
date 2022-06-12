import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        count < stock && setCount(count + 1)
    }

    const decrement = () => {
        count > 0 && setCount(count - 1)
    }

    return(
        <div className='item-count-container'>
            <div className='counter'>
                <button className='btn-incr' onClick={decrement}>-</button>
                <h3>{count}</h3>
                <button className='btn-incr' onClick={increment}>+</button>
            </div>
            <button className='btn-addCart' onClick={() => console.log(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount