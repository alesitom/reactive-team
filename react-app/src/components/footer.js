
import '../styles/component.css'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import whatsapp from '../images/whatsapp.svg'
import messenger from '../images/messenger.svg'
import telegram from '../images/telegram.svg'
import logo from '../images/logo.svg'
// import fondo from '../images/fondo.svg'



function Footer() {
    return (
    <>

            <div class="tell-friend">

                <div class="subtitle">
                    <h3>Tell a Friend</h3>
                </div>

                    <div className="social-network-footer">
                        <img src={facebook} alt="logo-facebook"/>
                        <img src={instagram} alt ="logo-instagram"/>
                        <img src={twitter} alt ="logo-twitter"/>
                        <img src={whatsapp} alt ="logo-whatsapp"/>
                        <img src={messenger} alt ="logo-messenger"/>
                        <img src={telegram} alt ="logo-telegram"/>
                    </div>

            </div>
        
        <div className="main-footer">
            
                <div className="container-2">

                    <div className="row">
                        {/* Logo */}
                        <div className="col-icon">
                            <img src={logo} alt="bakery-logo"/>
                        </div>

                        {/* Ocassions */}
                            <ul className="file-two">
                                <h4 className="ocassions">Ocassions</h4>
                                <li>Ocassions</li>
                                <li>Working from Home</li>
                                <li>Snack Time</li>
                                <li>Breakfast</li>
                                <li>Vegan Life</li>
                                <li>Baking</li>
                                <li>Gifts & Bundles</li>
                                <li>Easy Cooking</li>
                                <li>All Products</li>
                            </ul>

                        {/* All Categories */}

                            <ul className="file-three">
                                <h4 className="all">All Categories</h4>
                                <li>Baking</li>
                                <li>Breakfast</li>
                                <li>Condiments</li>
                                <li>Drinks</li>
                                <li>Heat Things Up</li>
                                <li>Meal solutions</li>
                                <li>Pantry Staples</li>
                                <li>Simmer Sauces</li>
                                <li>Snacks & Treats</li>
                                <li>Spice Up Your Cooking</li>
                                <li>Sweet Tooth</li>
                                <li>Wine & Cheese</li>
                                <li>All Products</li>
                            </ul>

                        {/* Gifts & Bundles */}

                            <ul className="file-four">
                                <h4 className="gift">Gift & Bundles</h4>
                                <li>Sweet Tooth Special</li>
                                <li>Discover Local</li>
                                <li>Baking Box</li>
                                <li>Spicy Heat Lover's Box</li>
                                <li>Snacking Sensations</li>
                            </ul>

                        {/* Our Brands */}

                            <ul className="file-five">
                                <h4>Our Brands</h4>
                            </ul>

                        {/* About Us */}

                            <ul className="file-six">
                                <h4 className ="about-us">About Us</h4>
                            </ul>

                    </div>

                </div>
            </div></>
    )
    
}
export default Footer;