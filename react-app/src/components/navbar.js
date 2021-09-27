import '../styles/navbar.css';
import logo from '../resources/logo.svg'
import MenuOptions from './menuOptions';
import '../js/scripts.js';
import UserOptions from './userOptions';

function Navbar() {
  return (
    <nav className="menu">
        <section className="menu-container">
          <img src={logo} alt="Bakery logo" className="menu-logo"/>
          <MenuOptions/>
          <UserOptions/>
        </section>
    </nav> 
  );
}

export default Navbar;
