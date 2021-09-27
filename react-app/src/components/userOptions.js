import React from 'react'
import search from '../resources/buscar.svg'
import profile from '../resources/perfil.svg'
import cart from '../resources/carrito.svg'

function UserOptions() {
    return (
        <div className="user-options">
            <img src={search} alt="Search" className="menu-search"/>
            <img src={profile} alt="Profile" className="menu-profile"/>
            <img src={cart} alt="Cart" className="menu-cart"/>

            <button type="button" class="btn btn-primary position-relative">
             Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
            </span>
            </button>
        </div>
    )
}

export default UserOptions;
