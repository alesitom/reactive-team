import '../styles/section-two.css';
import images from '../resources/images';

function WhyChoose() {
  const reasons = [
    {key:5, reasonImage:[images.img9], reasonTitle:"Discover new flavours & people", reasonText:"Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it."},
    {key:6, reasonImage:[images.img5], reasonTitle:"Buy wholesale", reasonText:"We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices."},
    {key:7, reasonImage:[images.img8], reasonTitle:"Support your community", reasonText:"By buying in bulk from local and Canadian producers you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community."},
    {key:8, reasonImage:[images.img7], reasonTitle:"Enjoy the best quality", reasonText:"We only offer great tasting, all natural foods that are better for you, and organic if possible."},
    {key:9, reasonImage:[images.img6], reasonTitle:"Enjoy Club Level Service", reasonText:"As a member of our club, we will make sure you are delighted with our service or we will make it right!"}
  ];
const reasonsMap = reasons.map(reason => (
<div className="why-choose-box">
    <img src={reason.reasonImage} alt="img1" className="why-choose-img-box"/>
    <h5 className="why-choose-title">{reason.reasonTitle}</h5>
    <p className="why-choose-text">{reason.reasonText}</p>
    </div>
  )
);
return (
<div className="why-choose-section">
    <div>
      <h2 className="component-title">Why Choose <span className="component-title-detail">the Premium Bakery Quality</span></h2>
    </div>
    <div className="why-choose-container">
    {reasonsMap}
    </div>
    </div>
  );
};
export default WhyChoose;