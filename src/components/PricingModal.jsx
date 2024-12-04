import React from 'react';
import './Modal.css';

const PricingModal = ({ campaign, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Pricing Details</h2>
        <p>{campaign.price}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PricingModal;