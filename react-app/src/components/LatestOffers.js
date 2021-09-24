import '../styles/latestOffers.css';
import '../resources/latestOffers_1.png';
import images from '../resources/images';

function LatestOffers() {
  return (
    <div>
    <div className="component-2-title">
    <h2>Latest <span className="component-2-title-detail">Offers</span></h2>
    </div>
    <div className="offer-container">
    <div className="offer-box-1">
    <img src={images.img1} alt="img1"/>
    <h4 className="offer-title">Pepperoni Pizza</h4>
    <p className="offer-price">$19.99 <span className="real-offer-price">$24.99</span>
    </p>
    <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
    </div>
    <div className="offer-box-1">
    <img src={images.img2} alt="img1"/>
    <h4 className="offer-title">Baked Pancakes</h4>
    <p className="offer-price">$35.99 <span className="real-offer-price">$45.99</span>
    </p>
    <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
    </div>
    <div className="offer-box-1">
    <img src={images.img3} alt="img1"/>
    <h4 className="offer-title">Avocado</h4>
    <p className="offer-price">$17.99 <span className="real-offer-price">$20.99</span>
    </p>
    <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
    </div>
    <div className="offer-box-1">
    <img src={images.img4} alt="img1"/>
    <h4 className="offer-title">Bunch of Orange</h4>
    <p className="offer-price">$24.99 <span className="real-offer-price">$29.99</span>
    </p>
    <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
    </div>
    </div>
    </div>
  );
}

export default LatestOffers;