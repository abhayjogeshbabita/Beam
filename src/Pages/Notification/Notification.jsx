import React from 'react';
import './Notification.css';

const Notification = () => {
  return (
    <div className="notification-wrapper">
      <div className="notification" role="alert">
        <p className="notification-message">
          FREE U.S. SHIPPING ON ORDERS OVER $45
        </p>
      </div>
    </div>
  );
};

export default Notification;
