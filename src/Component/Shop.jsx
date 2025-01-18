function Shop() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48vh',
        gap: '22%',
        backgroundColor:'#f9f9f9'
      };
    
      const cardStyle = {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      };
    
      const iconStyle = {
        fontSize: '50px',
        marginBottom: '10px',
        color: '#777',
      };
    
      const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        fontSize: '16px',
      };
    
      return (
        <div style={containerStyle}>
          <div style={cardStyle}>
            <div style={iconStyle}>
             <img src="https://www-cdn.djiits.com/cms/uploads/94964ecb1bc4c100c42c93a814bd4733.svg"></img>
            </div>
            <h3>Where to buy</h3>
            <a href="#" style={linkStyle}>
              Learn More &gt;
            </a>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>
              <img src="https://www-cdn.djiits.com/cms/uploads/60ff58dae8a3fffc6a6e292ce587ca46.svg"></img>
            </div>
            <h3>Support</h3>
            <a href="#" style={linkStyle}>
              Learn More &gt;
            </a>
          </div>
          <div style={cardStyle}>
            <div style={iconStyle}>
              <img src="https://www-cdn.djiits.com/cms/uploads/e5878a0a23f0c8b05878dac1e0293dfd.svg"></img>
            </div>
            <h3>Fly Safe</h3>
            <a href="#" style={linkStyle}>
              Learn More &gt;
            </a>
          </div>
        </div>
      );
}

export default Shop;