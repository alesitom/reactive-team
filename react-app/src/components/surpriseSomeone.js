import '../styles/section-two.css';
import images from '../resources/images';

function SurpriseSomeone() {
    return (
      <div className="surprise-someone-section">
      <div className="surprise-someone-container">
      <div className="surprise-someone-box-1">
      <img src={images.img14} alt="img1"/>  
      </div>
      <div className="surprise-someone-box-2">
      <h3 className="surprise-someone-section-title">Surprise Someone<br/><span> Working from Home</span></h3>
      <div className="surprise-someone-text-box">
        <p className="surprise-someone-text">Do you have a colleague or family member working hard at home? Our Working From Home box of snacks and drinks is the perfect way to put a smile on their face, delivered direct to their door.
        To buy for a large group of people, get in touch and we can discuss bespoke bundles and personalised messaging.</p>
        <div className="surprise-someone-button-box">
        <button className="surprise-someone-button">
          Buy Now
        </button>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  export default SurpriseSomeone;