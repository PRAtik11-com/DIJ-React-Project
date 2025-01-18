import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products") 
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {products.map((el) => (
        <div key={el.id} style={{ border: '1px solid #ddd', padding: '20px', width: '320px', borderRadius: '8px', textAlign: 'center' }}>
          <Link
              to={`/Description/${el.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
              }}
            >
          {/* el Image */}
          <img src={el.image} alt={el.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />

          {/* el Header */}
          <h2 style={{ color: '#ff6600' }}>{el.category}</h2>
          <h3>{el.name}</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>USD ${el.price}</p>
          <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Buy Now
          </button>

          {/* Flight Time & Weight */}
          <p style={{ marginTop: '10px' }}>{el.weight} Takeoff Weight</p>
          <p>{el.flightTime} Max Flight Time</p>

          {/* Specifications */}
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4>Specifications</h4>
            <p><strong>Camera:</strong> {el.camera}</p>
            <p><strong>Video Resolution:</strong> {el.videoResolution}</p>
            <p><strong>Photo Resolution:</strong> {el.photoResolution}</p>
            <p><strong>Obstacle Sensing:</strong> {el.obstacleSensing}</p>
            <p><strong>Transmission:</strong> {el.transmission}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
