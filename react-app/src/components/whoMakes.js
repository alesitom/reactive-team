import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import images from '../resources/images';


const WhoMakes = () => {
  const [whoMakesList,setList] = useState({
      makes : [ /* este array viene del database.json */ ]
})


const url = "http://localhost:3002/makes"
useEffect(() =>{
  axios.get(url)
    .then((response) =>{
      setList({
        makes: response.data
      })
    })
},whoMakesList)

return (
  <div className="who-makes-section">
    <div className="who-makes-container">
    <div className="who-makes-box-1">
    <h3 className="who-makes-section-title">Who Makes <span>Your Food?</span></h3>
    <p className="who-makes-section-subtitle">Our mission is to help grow the local food ecosystem in BC and across Canada. Why?</p>
    <div className="who-makes-items-box">
      <ul className="who-makes-items">
      {
        whoMakesList.makes.map(
          make => <li className="who-makes-item-list" key={make.key}>{make.text}</li>
        )
      }
      </ul>
    </div>
    </div>      
    <div className="who-makes-box-2">
    <img src={images.img10} alt="img1"/>
    </div>
    </div>
    </div>
    );
}
export default WhoMakes