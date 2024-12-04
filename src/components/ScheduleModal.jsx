import React from 'react';
import './Modal.css';

const ScheduleModal = ({ campaign, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Schedule Campaign</h2>
        <p>Schedule campaign: {campaign.name}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ScheduleModal;
