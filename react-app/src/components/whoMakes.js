import '../styles/section-two.css';
import images from '../resources/images';

function WhoMakes() {
    return (
      <div className="who-makes-section">
      <div className="who-makes-container">
      <div className="who-makes-box-1">
      <h3 className="who-makes-section-title">Who Makes <span>Your Food?</span></h3>
      <p className="who-makes-section-subtitle">Our mission is to help grow the local food ecosystem in BC and across Canada. Why?</p>
      <div className="who-makes-items-box">
        <ul className="who-makes-items">
            <li className="who-makes-item-list">
            Because it connects us to the land we live on, and to the people who live here.</li>
            <li className="who-makes-item-list">Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation.</li>
            <li className="who-makes-item-list">Because good local food makes our corner of the world a better place to live.</li>
            <li className="who-makes-item-list">Because it supports local jobs.</li>
            <li className="who-makes-item-list">Because it makes more sense for the environment.</li>
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
  
  export default WhoMakes;