import '../styles/section-two.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

//instagramLatestPosts
//latestPostsList
//latestPosts
//posts

const InstagramLatestPosts = () => {
    const [latestPostsList,setList] = useState({
      posts : [ /* este array viene del database.json */ ]
})

const url = "http://localhost:3002/posts"
useEffect(() =>{
  axios.get(url)
    .then((response) =>{
      setList({
        posts: response.data
      })
    })
},latestPostsList)

return (
  <div className="instagram-section">
<div className="instagram-container">
<h2 className="instagram-title"> <a className="instagram-title" href="#"> @PremiumBakeryQuality</a> <span> on Instagram</span></h2>
<div className="instagram-image-container">
  <div className="carousel-container">
  <div className="inner-carousel">
    <div className="track">
    {
      latestPostsList.posts.map(
      post => <div className="card-container instagram-image-detail" key={post.key}>
      <div classNameName="card"><img src={post.postImage} alt="img1"/></div> 
      </div>
      )
    }
    </div>
    <div className="nav">
      <button className="prev"><i className="fas fa-arrow-left fa-2x"></i></button>
      <button className="next"><i className="fas fa-arrow-right fa-2x"></i></button>
    </div>
  </div>
</div>
</div>
</div>
</div>
      
);
}
export default InstagramLatestPosts


{/* <div className="instagram-section">
        <div className="instagram-container">
        <h2 className="instagram-title"> <a className="instagram-title" href="#"> @PremiumBakeryQuality</a> <span> on Instagram</span></h2>
        <div className="instagram-image-container">
        {
          latestPostsList.posts.map(
          post => <div className="instagram-image-detail" key={post.key}>
          <img src={post.postImage} alt="img1"/>
          </div>
          )
        }
      </div>
      </div>
      </div> */}