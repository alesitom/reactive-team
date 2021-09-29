import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


const LatestOffers = () => {
    const [offerList,setList] = useState({
        offers : [ /* este array viene del database.json */ ]
})


const url = "http://localhost:3002/offers"
useEffect(() =>{
  axios.get(url)
    .then((response) =>{
      setList({
        offers: response.data
      })
    })
},offerList)

return (
  <div className="offer-section">
  <div>
  <h2 className="component-title">Latest <span className="component-title-detail">Offers</span></h2></div>
  <div className="offer-container">
      {
        offerList.offers.map(
          offer => <div className="offer-box-1" key={offer.key}>
          <img src={offer.offerImage} alt={offer.offerImageDesc}/>
          <h4 className="offer-title">{offer.offerTitle}</h4>
          <p className="offer-price">{offer.offerPrice} <span className="real-offer-price">{offer.realOfferPrice}</span>
          </p>
          <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
          </div>
        )
      }
  </div>
  </div>
);
}
export default LatestOffers