import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import './Description.css';

const Description = () => {
  const param = useParams();
  const [store, setStore] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${param.id}`)
      .then((res) => setStore(res.data))
      .catch((err) => console.log(err));
  }, [param.id]);

  return (
    <div className="description-container">
      <div key={store.id} className="store-card">
        <div className="store-image-container">
          <img src={store.image} alt={store.name} className="store-image" />
        </div>
        <div className="store-details">
          <h2 className="store-category">{store.category}</h2>
          <h3 className="store-name">{store.name}</h3>
          <p className="store-price">USD ${store.price}</p>
          <Link to="/WheretoBuy" style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    height: "40px",
                    // lineHeight: "40px",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop:"20px"
                  }}>Buy Now</Link>

          <p className="store-weight">{store.weight} Takeoff Weight</p>
          <p className="store-flight-time">{store.flightTime} Max Flight Time</p>

          <div className="store-specifications">
            <h4>Specifications</h4>
            <p><strong>Camera:</strong> {store.camera}</p>
            <p><strong>Video Resolution:</strong> {store.videoResolution}</p>
            <p><strong>Photo Resolution:</strong> {store.photoResolution}</p>
            <p><strong>Obstacle Sensing:</strong> {store.obstacleSensing}</p>
            <p><strong>Transmission:</strong> {store.transmission}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

