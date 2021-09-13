import '../styles/navbar.css';
import logo from '../resources/logo.svg'
import MenuOptions from './menuOptions';

function Navbar() {
  return (
    <header>
        <img src={logo} alt="logo" className="logo"/>
        <nav className="menu">
            <ul>
                <MenuOptions/>
            </ul>
        </nav>
    </header> 
  );
}

export default Navbar;
