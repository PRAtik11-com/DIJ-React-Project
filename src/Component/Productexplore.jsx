const Productexplore = () => {
    return (
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <div style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gap: '20px', padding: '20px', width: "80%", margin: "auto" ,height:"530px"}}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img
              src="https://www-cdn.djiits.com/dps/71685a7a83e4c70907f3c504f6806561.jpg"
              alt="Support"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2 style={{ marginTop: '10px' }}>Support</h2>
              <p>After-sale support and services for your drone</p>
              <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Learn More &rarr;</a>
            </div>
          </div>
  
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img
              src="https://www-cdn.djiits.com/dps/dd1b12f9a5c1f65019873c542d4e5860.jpg"
              alt="DJI Care Refresh"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2 style={{ marginTop: '10px' }}>Download Center</h2>
              <p>Download official apps, software, and user guides</p>
              <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Learn More &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Productexplore;