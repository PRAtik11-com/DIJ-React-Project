import { useState, useEffect } from "react";
import "./Offical.css";

const RetailStores = () => {
  const [continents, setContinents] = useState({});
  const [states, setStates] = useState({});
  const [storeData, setStoreData] = useState([]); // Store all data to display
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Fetch continents and countries
  useEffect(() => {
    fetch("http://localhost:3000/continents")
      .then((response) => response.json())
      .then((data) => setContinents(data))
      .catch((error) => console.error("Error fetching continents:", error));
  }, []);

  // Fetch states and store information
  useEffect(() => {
    fetch("http://localhost:3000/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.error("Error fetching states:", error));

    fetch("http://localhost:3000/stores")
      .then((response) => response.json())
      .then((data) => setStoreData(data))
      .catch((error) => console.error("Error fetching stores:", error));
  }, []);

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
    setSelectedCountry("");
    setSelectedState("");
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  // Filtered data based on selections
  const filteredStores = storeData.filter((store) => {
    return (
      (!selectedContinent || store.continent === selectedContinent) &&
      (!selectedCountry || store.country === selectedCountry) &&
      (!selectedState || store.state === selectedState)
    );
  });

  return (
    <div style={{height:"100vh"}}>
      <h1>Retail Stores</h1>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {/* Continent Dropdown */}
        <select
          value={selectedContinent}
          onChange={handleContinentChange}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Select Continent</option>
          {Object.keys(continents).map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>

        {/* Country Dropdown */}
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          disabled={!selectedContinent}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Select Country</option>
          {selectedContinent &&
            continents[selectedContinent]?.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>

        {/* State Dropdown */}
        <select
          value={selectedState}
          onChange={handleStateChange}
          disabled={!selectedCountry || !states[selectedCountry]}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Select State</option>
          {selectedCountry &&
            states[selectedCountry]?.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>
      </div>

      {/* Display Selected Filters */}
      <div style={{ marginTop: "20px" }}>
        <strong>Selected:</strong> {selectedContinent || "None"} /{" "}
        {selectedCountry || "None"} / {selectedState || "None"}
      </div>

      {/* Display Filtered Store Data */}
      <div style={{ marginTop: "20px" }}>
        {filteredStores.length > 0 ? (
          filteredStores.map((store, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
              <h3>{store.name}</h3>
              <p>
                <strong>Address:</strong> {store.address}
              </p>
              <p>
                <strong>Hours:</strong> {store.hours}
              </p>
              <p>
                <strong>Contact:</strong> {store.contact}
              </p>
            </div>
          ))
        ) : (
          <p>No stores available for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default RetailStores;
