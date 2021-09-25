import '../styles/navbar.css';
import logo from '../resources/logo.svg'
import MenuOptions from './menuOptions';
import UserOptions from './userOptions';

function Navbar() {
  return (
    <nav className="menu">
        {/* <section className=""> */}
          <img src={logo} alt="Bakery logo" className="menu-logo"/>
        {/* </section> */}
        
        <MenuOptions/>
        <UserOptions/>
    </nav> 
  );
}

export default Navbar;
