import '../styles/section-two.css';
import images from '../resources/images';

function OurCharity() {
  return (
    <div className="our-charity-section">
    <div className="our-charity-container">
    <div>
    <h2 className="our-charity-title">Our Charity Partner, City Bakery</h2>
    </div>
    <div className="our-charity-logo">
    <img src={images.img13} alt="img1"/>
    </div>
    <div className="our-charity-button-box">
    <button className="our-charity-button">
    Learn more about City Bakery
    </button>
    </div>
    </div>
    </div>
  );
}

export default OurCharity;