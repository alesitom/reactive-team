import '../styles/section-two.css';
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
<div className="footer-section">
    <div className="footer-container">
        <div className="footer-brand">
        <img src={logo} alt="bakery-logo"/>
        </div>
        <div className="footer-box">
                            <ul className="file-two">
                                <h4 className="ocassions">Occassions</h4>
                                <li>Occassions</li>
                                <li>Working from Home</li>
                                <li>Snack Time</li>
                                <li>Breakfast</li>
                                <li>Vegan Life</li>
                                <li>Baking</li>
                                <li>Gifts & Bundles</li>
                                <li>Easy Cooking</li>
                                <li>All Products</li>
                            </ul>
        </div>
                        {/* All Categories */}
        <div className="footer-box">
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
        </div>
        <div className="footer-box">
                        {/* Gifts & Bundles */}

                            <ul className="file-four">
                                <h4 className="gift">Gifts & Bundles</h4>
                                <li>Sweet Tooth Special</li>
                                <li>Discover Local</li>
                                <li>Baking Box</li>
                                <li>Spicy Heat Lover's Box</li>
                                <li>Snacking Sensations</li>
                            </ul>
        </div>
                        {/* Our Brands */}
        <div className="footer-box">
        <ul className="file-five">
                            <h4 className="brands">Our Brands</h4>
                            </ul>
        </div>
                        {/* About Us */}
        <div className="footer-box">
        <ul className="file-six">
        <h4 className ="about">About Us</h4>
        </ul>
        </div>
</div>           
</div>
)
    
}
export default Footer;