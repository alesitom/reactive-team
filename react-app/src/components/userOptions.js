import React, { useContext } from 'react'
import '../styles/userOptions.css'
import search from '../resources/search.svg'
import profile from '../resources/profile.svg'
import cart from '../resources/cart-sin-numero.svg'
import { CartContext } from '../contexts/CartContext'

function UserOptions() {

    const cartUser = useContext(CartContext)

    return (
        <div className="user-options">
            <img src={search} alt="Search" className="menu-search"/>
            <img src={profile} alt="Profile" className="menu-profile"/>
            <div className="cart">
                <img src={cart} alt="Cart" className="menu-cart"/>
                <div className="circle">
                    <p className="quantity-products">{cartUser.length}</p>
                </div>
            </div>
        </div>
    )
}

export default UserOptions;
