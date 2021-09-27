import '../styles/navbar.css';
import arrow from '../resources/flecha.svg';
import hamburger from '../resources/hamburger.svg';
import '../js/scripts.js';
import UserOptions from './userOptions';

function MenuOptions() {

    const menus = [
        { key: 1, href: "#Occasions", desc: "Occasions", subMenu: [ { key: 6, href: "#Option1", desc: "Option 1" },
                                                                    { key: 7, href: "#Option2", desc: "Option 2" },
                                                                    { key: 8, href: "#Option3", desc: "Option 3" } ] },

        { key: 2, href: "#All-Categories", desc: "All Categories", subMenu: [ { key: 9, href: "#Option4", desc: "Option 4" },
                                                                              { key: 10, href: "#Option5", desc: "Option 5" } ] },

        { key: 3, href: "#Gifts-Bundles", desc: "Gifts & Bundles", subMenu: [ { key: 11, href: "#Option6", desc: "Option 6" },
                                                                              { key: 12, href: "#Option7", desc: "Option 7" } ] },
        { key: 4, href: "#Our-Brands", desc: "Our Brands" },
        { key: 5, href: "#About-Us", desc: "About Us" }
    ];

    const menusMapeados = menus.map(menu => ( 

        menu.subMenu ?
        
        <li className="menu-item menu-item--show" key={menu.key}>
            <a className="menu-link" href={menu.href}>{menu.desc} <img src={arrow} className="menu-arrow" alt="arrow" /></a>

            <ul className="menu-nesting">
                {menu.subMenu.map( submenu => (
                    <li className="menu-inside" key={submenu.key}>
                        <a className="menu-link menu-link--inside" href={submenu.href}>{submenu.desc}</a>
                    </li>
                ))}
            </ul>
        </li>
        :
        <li className="menu-item" key={menu.key}>
            <a className="menu-link" href={menu.href}>{menu.desc}</a>
        </li> 
        )
    );

    return (
        <>
            <ul className="menu-links">
                {menusMapeados}
            </ul>
            <UserOptions/>
            <div className="menu-hamburger">
                <img src={hamburger} alt="hamburger menu" className="menu-img"/>
            </div>
        </>
    );
}

export default MenuOptions;