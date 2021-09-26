import '../styles/section-two.css';
import images from '../resources/images';

function LatestOffers(){
  const offers = [
    {key: 1, offerTitle: "Pepperoni Pizza", offerPrice: "$19.99", realOfferPrice: "$24.99", offerImage:[images.img1]},
    {key: 2, offerTitle: "Baked Pancakes", offerPrice: "$35.99", realOfferPrice: "$45.99", offerImage:[images.img2]},
    {key: 3, offerTitle: "Avocado", offerPrice: "$17.99", realOfferPrice: "$20.99", offerImage:[images.img3]},
    {key: 4, offerTitle: "Bunch of Orange", offerPrice: "$24.99", realOfferPrice: "$29.99", offerImage:[images.img4]}
  ];
const offersMap = offers.map(offer => (
  <div className="offer-box-1" key={offer.key}>
  <img src={offer.offerImage} alt="img1"/>
  <h4 className="offer-title">{offer.offerTitle}</h4>
  <p className="offer-price">{offer.offerPrice} <span className="real-offer-price">{offer.realOfferPrice}</span>
  </p>
  <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
  </div>
)
);
return (
  <div className="offer-section">
  <div>
  <h2 className="component-title">Latest <span className="component-title-detail">Offers</span></h2></div>
  <div className="offer-container">
      {offersMap}
  </div>
  </div>
);
};
export default LatestOffers;