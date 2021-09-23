import '../styles/latestOffers.css';
import '../resources/latestOffers_1.png';

function LatestOffers() {
  return (
    <div>
      <div className="component-2-title">
      <h2>Latest Offers</h2>
      </div>
    
    <div className="offer-box-1">
    <img src="../resources/latestOffers_1.png" alt="img1"/>
    <h4 className="offer-title">Pepperoni Pizza</h4>
    <p className="offer-price">$19.99 <span className="real-offer-price">$24.99</span>
    </p>
    <button>Quick Shop</button>
    </div>
    </div>
  );
}

export default LatestOffers;