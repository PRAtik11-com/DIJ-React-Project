

const ExploreMore = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <div style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gap: '20px', padding: '20px', width: "80%", margin: "auto" ,height:"530px"}}>
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <img
            src="https://www-cdn.djiits.com/dps/e536a543e1ae498a2ba2cd5def951781.jpg"
            alt="Accessories"
            style={{ width: '100%', display: 'block' }}
          />
          <div style={{ padding: '15px', textAlign: 'center' }}>
            <h2 style={{ marginTop: '10px' }}>Accessories</h2>
            <p>Controllers, goggles, batteries, and more</p>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Buy Now &rarr;</a>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <img
            src="https://www-cdn.djiits.com/dps/08afdd8dd25f713d05cd9fd085b82b03.jpg"
            alt="DJI Care Refresh"
            style={{ width: '100%', display: 'block' }}
          />
          <div style={{ padding: '15px', textAlign: 'center' }}>
            <h2 style={{ marginTop: '10px' }}>DJI Care Refresh</h2>
            <p>Protect your drone with this comprehensive plan</p>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Learn More &rarr;</a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ExploreMore;
