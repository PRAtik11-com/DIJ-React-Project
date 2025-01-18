import { useState } from "react";
import "./Wheretobuy.css";
import OfficialOnlineStores from "../Wheretobuy/OfficialOnlineStores";
import RetailStores from "../Wheretobuy/RetailStores";
import EnterpriseDealers from "../Wheretobuy/EnterpriseDealers";
import AgriculturalDroneDealers from "../Wheretobuy/AgriculturalDroneDealers";
import ProDealers from "../Wheretobuy/ProDealers";

const WheretoBuy = () => {
  const [activeTab, setActiveTab] = useState("Retail Stores");

  const handleOfficialOnlineStores = () => {
    setActiveTab("Official Online Stores");

  };

  const handleRetailStores = () => {
    setActiveTab("Retail Stores");
  };

  const handleEnterpriseDealers = () => {
    setActiveTab("Enterprise Dealers");
  };

  const handleAgriculturalDroneDealers = () => {
    setActiveTab("Agricultural Drone Dealers");
  };

  const handleProDealers = () => {
    setActiveTab("Pro Dealers");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Official Online Stores":
        return <OfficialOnlineStores />;
      case "Retail Stores":
        return <RetailStores />;
      case "Enterprise Dealers":
        return <EnterpriseDealers />;
      case "Agricultural Drone Dealers":
        return <AgriculturalDroneDealers />;
      case "Pro Dealers":
        return <ProDealers />;
      default:
        return null;
    }
  };


  return (
    <div style={{margin:"16px 70px"}}>
      <h1 style={{ color:"#000" ,  paddingBottom: "25px", borderBottom: "1px solid #ccc" }}>Where to Buy </h1>
      <div className="menu-container">
      <div
        className={`menu-item ${activeTab === "Official Online Stores" ? "active" : ""}`}
        onClick={handleOfficialOnlineStores}
      >
        Official Online Stores
      </div>
      <div
        className={`menu-item ${activeTab === "Retail Stores" ? "active" : ""}`}
        onClick={handleRetailStores}
      >
        Retail Stores
      </div>
      <div
        className={`menu-item ${activeTab === "Enterprise Dealers" ? "active" : ""}`}
        onClick={handleEnterpriseDealers}
      >
        Enterprise Dealers
      </div>
      <div
        className={`menu-item ${activeTab === "Agricultural Drone Dealers" ? "active" : ""}`}
        onClick={handleAgriculturalDroneDealers}
      >
        Agricultural Drone Dealers
      </div>
      <div
        className={`menu-item ${activeTab === "Pro Dealers" ? "active" : ""}`}
        onClick={handleProDealers}
      >
        Pro Dealers
      </div>
    </div>

    <div className="content-container">{renderContent()}</div>
    

    </div>

    
  )
}

export default WheretoBuy
