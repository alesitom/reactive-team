import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


const LatestOffersTest = () => {
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
          task => <div className="offer-box-1" key={task.key}>
          <img src={task.offerImage} alt="img1"/>
          <h4 className="offer-title">{task.offerTitle}</h4>
          <p className="offer-price">{task.offerPrice} <span className="real-offer-price">{task.realOfferPrice}</span>
          </p>
          <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
          </div>
        )
      }
  </div>
  </div>
);
}
export default LatestOffersTest





  
  /* [
    {key: 1, offerTitle: "Pepperoni Pizza", offerPrice: "$19.99", realOfferPrice: "$24.99", offerImage:[images.img1]},
    {key: 2, offerTitle: "Baked Pancakes", offerPrice: "$35.99", realOfferPrice: "$45.99", offerImage:[images.img2]},
    {key: 3, offerTitle: "Avocado", offerPrice: "$17.99", realOfferPrice: "$20.99", offerImage:[images.img3]},
    {key: 4, offerTitle: "Bunch of Orange", offerPrice: "$24.99", realOfferPrice: "$29.99", offerImage:[images.img4]}
  ]; */
/* const offersMap = offersList.map(offer => (
  <div className="offer-box-1" key={offer.key}>
  <img src={offer.offerImage} alt="img1"/>
  <h4 className="offer-title">{offer.offerTitle}</h4>
  <p className="offer-price">{offer.offerPrice} <span className="real-offer-price">{offer.realOfferPrice}</span>
  </p>
  <button className="quick-shop-button" onClick={() => alert('esto deberia ser un modal, quack!')}>Quick Shop</button>
  </div>
)
); */
