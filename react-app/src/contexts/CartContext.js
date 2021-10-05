import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const CartContext = createContext()

function CartContextProvider(props) {
    const [products, setProducts] = useState([])
    
    const url = "http://localhost:3002/cart"
    useEffect(() => {
        axios.get(url).then((response) => {
            setProducts(response.data)
        })
    },products)

    return (
        <CartContext.Provider value={products}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
