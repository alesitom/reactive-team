import React from 'react'
import '../styles/userOptions.css'
import search from '../resources/search.svg'
import profile from '../resources/profile.svg'
import cart from '../resources/cart-sin-numero.svg'

function UserOptions() {
    return (
        <div className="user-options">
            <img src={search} alt="Search" className="menu-search"/>
            <img src={profile} alt="Profile" className="menu-profile"/>
            <img src={cart} alt="Cart" className="menu-cart"/>
        </div>
    )
}

export default UserOptions;
