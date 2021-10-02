import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

const SocialMedia = () => {
    const [socialMediaList,setList] = useState({
      medias : [ /* este array viene del database.json */ ]
})

const url = "http://localhost:3002/medias"
useEffect(() =>{
  axios.get(url)
    .then((response) =>{
      setList({
        medias: response.data
      })
    })
},socialMediaList)

return (
  <div className="tell-a-friend-section">
    <div className="tell-a-friend-container">
    <h2 className="tell-a-friend-title">Tell a Friend</h2>
    <div className="tell-a-friend-social-media">
        {
          socialMediaList.medias.map(
          media => 
          <a href="#" key={media.key}><img key={media.key} src={media.socialMediaImage} alt={media.socialMediaImageAlt}/></a>
          )
        }
      </div>
      </div>
      </div>
);
}
export default SocialMedia