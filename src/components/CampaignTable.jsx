// components/CampaignTable.js
import React from "react";

const CampaignTable = ({ campaign, onViewPricing, onSchedule }) => {
  return (
    <tr>
      <td>{new Date(campaign.createdOn).toLocaleDateString()}</td>
      <td>{campaign.name.en}</td>
      <td>{campaign.region.en}</td>
      <td>
        <button className="price-button" onClick={() => onViewPricing(campaign)}>
          {campaign.price.en}
        </button>
      </td>
      <td>
        <div className="actions">
          {campaign.csv && (
            <a href={campaign.csv} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-file-csv" aria-hidden="true"></i> CSV
            </a>
          )}
          {campaign.report && (
            <a href={campaign.report} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-chart-line" aria-hidden="true"></i> Report
            </a>
          )}
          <button className="Schedule-again" onClick={() => onSchedule(campaign)}>
            <i className="fa fa-calendar" aria-hidden="true"></i> Schedule Again
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CampaignTable;
