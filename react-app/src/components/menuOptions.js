import '../styles/menuOptions.css';

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

    const menusMapeados = menus.map(menu => ( <li key={menu.key}><a href={menu.href}>{menu.desc}</a></li> ) );

    return (
        <>
        {menusMapeados}
        </>
    );
}

export default MenuOptions;