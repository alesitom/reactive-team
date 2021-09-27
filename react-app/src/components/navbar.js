import '../styles/navbar.css';
import logo from '../resources/logo.svg'
import MenuOptions from './menuOptions';
import '../js/scripts.js';

function Navbar() {
  return (
    <nav className="menu">
        <section className="menu-container">
          <img src={logo} alt="Bakery logo" className="menu-logo"/>
          <MenuOptions/>
        </section>
    </nav> 
  );
}

export default Navbar;
