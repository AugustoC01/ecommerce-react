import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return(cart.some(prod => prod.id === id))
    }

    const getItemsQuantity = () => {
        let itemsQuantity = 0
        cart.forEach(prod => {
            itemsQuantity += prod.quantity
        })
        return itemsQuantity
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getItemsQuantity }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext