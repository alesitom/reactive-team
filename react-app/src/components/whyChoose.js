import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


const WhyChoose = () => {
  const [whyChooseList,setList] = useState({
      reasons : [ /* este array viene del database.json */ ]
})


const url = "http://localhost:3002/reasons"
useEffect(() =>{
  axios.get(url)
    .then((response) =>{
      setList({
        reasons: response.data
      })
    })
},whyChooseList)

return (
  <div className="why-choose-section">
      <div>
        <h2 className="component-title">Why Choose <span className="component-title-detail">the Premium Bakery Quality</span></h2>
      </div>
      <div className="why-choose-container">
      {
        whyChooseList.reasons.map(
          reason => <div className="why-choose-box" key={reason.key}>
          <img src={reason.reasonImage} alt={reason.reasonImageDesc} className="why-choose-img-box"/>
          <h5 className="why-choose-title">{reason.reasonTitle}</h5>
          <p className="why-choose-text">{reason.reasonText}</p>
          </div>
        )
      }
      </div>
      </div>
    );
}
export default WhyChoose