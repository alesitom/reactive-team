import '../styles/section-two.css';
import images from '../resources/images';

function WhyChoose() {
  return (
    <div className="why-choose-section">
    <div>
      <h2 className="component-title">Why Choose <span className="component-title-detail">the Premium Bakery Quality</span></h2>
    </div>
    <div className="why-choose-container">
    <div className="why-choose-box">
    <img src={images.img9} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">Discover new flavours & people</h5>
    <p className="why-choose-text">Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.</p>
    </div>
    <div className="why-choose-box">
    <img src={images.img5} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">Buy <br/> wholesale</h5>
    <p className="why-choose-text">We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices.</p>
    </div>
    <div className="why-choose-box">
    <img src={images.img8} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">Support your community</h5>
    <p className="why-choose-text">By buying in bulk from local and Canadian producers you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community.</p>
    </div>
    <div className="why-choose-box">
    <img src={images.img7} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">Enjoy the best quality</h5>
    <p className="why-choose-text">We only offer great tasting, all natural foods that are better for you, and organic if possible.</p>
    </div>
    <div className="why-choose-box">
    <img src={images.img6} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">Enjoy Club Level Service</h5>
    <p className="why-choose-text">As a member of our club, we will make sure you are delighted with our service or we will make it right!</p>
    </div>
    </div>
    </div>
  );
}

export default WhyChoose;