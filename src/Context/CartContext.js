import { useState, createContext, useContext } from 'react'

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

    const totalToPay = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, getItemsQuantity, totalToPay }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}