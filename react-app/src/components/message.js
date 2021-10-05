import React, { useState } from 'react';
import '../styles/message.css';
import close from '../resources/close.svg'

function Message() {
  const [message, setMessage] = useState(true);

  return (
    <>
      { message && (
        <div className="container-message">
          <div className="message">
            Free Delivery over $100. Gif with Purchase over $150
          </div>
          <div className="close" onClick={() => setMessage(false)}>
            <img src={close} alt="Close"/>
          </div>
        </div>
      ) } 
    </>
  );
}

export default Message;
