import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ initial = 1, stock = 0, Add }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        count < stock && setCount(count + 1)
    }

    const decrement = () => {
        count > 0 && setCount(count - 1)
    }

    return(
        <div className='itemCount-container'>
            <div className='counter'>
                <button className='violet-btn add' onClick={decrement}> - </button>
                <h3>{count}</h3>
                <button className='violet-btn add' onClick={increment}>+</button>
            </div>
            <button className='violet-btn itemCount-btn' onClick={() => Add(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount