import React from 'react'
import '../styles/userOptions.css'
import search from '../resources/search.svg'
import profile from '../resources/profile.svg'
import cart from '../resources/cart-sin-numero.svg'
import circle from '../resources/circulo.svg'

function UserOptions() {
    return (
        <div className="user-options">
            <img src={search} alt="Search" className="menu-search"/>
            <img src={profile} alt="Profile" className="menu-profile"/>
            <div className="cart">
                <img src={cart} alt="Cart" className="menu-cart"/>
                <div className="circle">
                    <img src={circle} alt="Quantity of products in the cart" className="quantity-circle"/>
                    <p className="quantity-products">3</p>
                </div>
            </div>
        </div>
    )
}

export default UserOptions;
