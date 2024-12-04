import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CampaignTable from "./components/CampaignTable";
import PricingModal from "./components/PricingModal";
import ScheduleModal from "./components/ScheduleModal";
import campaignData from "./data.json"; // Import campaign data
import "./App.css";
import "./i18n";

const App = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  // Fetch campaigns based on the active tab
  const getCampaignsByTab = () => {
    return campaignData[activeTab] || [];
  };

  const campaigns = getCampaignsByTab();

  const handleOpenPricingModal = (campaign) => {
    setSelectedCampaign(campaign);
    setShowPricingModal(true);
  };

  const handleOpenScheduleModal = (campaign) => {
    setSelectedCampaign(campaign);
    setShowScheduleModal(true);
  };

  const handleCloseModal = () => {
    setShowPricingModal(false);
    setShowScheduleModal(false);
    setSelectedCampaign(null);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>{t("title")}</h1>
        <button className="language-switch" onClick={handleLanguageSwitch}>
          {i18n.language === "en" ? "Switch to French" : "Passer à l'anglais"}
        </button>
      </header>

      <div className="navbar">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={activeTab === "upcoming" ? "active" : ""}
        >
          {t("upcoming")}
        </button>
        <button
          onClick={() => setActiveTab("live")}
          className={activeTab === "live" ? "active" : ""}
        >
          {t("live")}
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={activeTab === "past" ? "active" : ""}
        >
          {t("past")}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>{t("date")}</th>
            <th>{t("name")}</th>
            <th>{t("region")}</th>
            <th>{t("price")}</th>
            <th>{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <CampaignTable
                key={campaign.id}
                campaign={campaign}
                onViewPricing={handleOpenPricingModal}
                onSchedule={handleOpenScheduleModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5">{t("no_campaigns_available")}</td>
            </tr>
          )}
        </tbody>
      </table>

      {showPricingModal && selectedCampaign && (
        <PricingModal
          campaign={{
            ...selectedCampaign,
            price: selectedCampaign.price[i18n.language], // Ensure the correct language
          }}
          onClose={handleCloseModal}
        />
      )}

      {showScheduleModal && selectedCampaign && (
        <ScheduleModal
          campaign={{
            ...selectedCampaign,
            name: selectedCampaign.name[i18n.language], // Ensure the correct language
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
