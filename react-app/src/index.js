import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LatestOffers from './components/LatestOffers.js';
import WhyChoose from './components/whyChoose.js';
import images from './resources/images';
import WhoMakes from './components/whoMakes';
import OurCharity from './components/ourCharity';
import SurpriseSomeone from './components/surpriseSomeone';
import InstagramLatestPosts from './components/InstagramLatestPosts';
import Footer from './components/footer';
import SocialMedia from './components/tellAFriend';


ReactDOM.render(
  <React.StrictMode>
    <LatestOffers/>
    <WhyChoose />
    <WhoMakes />
    <OurCharity />
    <SurpriseSomeone />
    <InstagramLatestPosts />
    <SocialMedia />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
