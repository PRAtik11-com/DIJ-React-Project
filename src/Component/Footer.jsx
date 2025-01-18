
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function Footer() {
  const footerStyle = {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: '40px 20px',
    fontSize: '13px',
    lineHeight: '1.8',
  };

  const footerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '150px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    // fontSize:"14px"
  };

  const subscribeStyle = {
    marginTop: '10px',
  };

//   const inputStyle = {
//     padding: '8px',
//     marginRight: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     width: '70%',
//   };

  const buttonStyle = {
    padding: '2px 5px',
    backgroundColor: '#333',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  

//   const socialIconsStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     marginTop: '10px',
//   };

//   const iconStyle = {
//     fontSize: '20px',
//     color: '#fff',
//   };

  const topLinksStyle = {
    display: 'flex',
    justifyContent: "space-between",
    gap:"20px",
    alignItems: 'center',
    paddingBottom: '10px',
    
    borderBottom: '1px solid #333',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  

  const bottomStyle = {
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const policyLinksStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
  };

  const socialIconStyle = {
    fontSize: '20px',
    color: '#fff',
  };

  const regionStyle = {
    marginTop: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={columnStyle}>
          <h4 style={{marginTop:"10px" ,fontSize:"16px"}}>Product Categories</h4>
          <a href="#" style={linkStyle}>Consumer</a>
          <a href="#" style={linkStyle}>Professional</a>
          <a href="#" style={linkStyle}>Enterprise</a>
          <a href="#" style={linkStyle}>Components</a>
          
          <h4 style={{marginTop:"30px" ,fontSize:"16px"}}>Service Plans</h4>
          <a href="#" style={linkStyle}>DJI Care Refresh</a>
          <a href="#" style={linkStyle}>DJI Care Pro</a>
          <a href="#" style={linkStyle}>DJI Care Enterprise</a>
          <a href="#" style={linkStyle}>DJI Maintenance Program</a>
        
        </div>
        
        <div style={columnStyle}>
          <h4 style={{marginTop:"10px" ,fontSize:"16px"}}>Where to Buy</h4>
          <a href="#" style={linkStyle}>DJI Online Store</a>
          <a href="#" style={linkStyle}>Flagship Stores</a>
          <a href="#" style={linkStyle}>DJI-Operated Stores</a>
          <a href="#" style={linkStyle}>Retail Stores</a>
          <a href="#" style={linkStyle}>Enterprise Retailers
          </a>
          <a href="#" style={linkStyle}>Agricultural Drone Dealer</a>
          <a href="#" style={linkStyle}>Delivery Drone Dealer</a>
          <a href="#" style={linkStyle}>Pro Retailers</a>
          <a href="#" style={linkStyle}>DJI Store App</a>

          <h4 style={{marginTop:"30px" ,fontSize:"16px"}}>Cooperation</h4>
          <a href="#" style={linkStyle}>Become a Dealer</a>
          <a href="#" style={linkStyle}>Apply For Authorized Store</a>
        </div>


        <div style={columnStyle}>
          <h4 style={{marginTop:"10px" ,fontSize:"16px"}}>Fly Safe</h4>
          <a href="#" style={linkStyle}>Fly Safe</a>
          <a href="#" style={linkStyle}>DJI Flying Tips</a>

          <h4 style={{marginTop:"30px" ,fontSize:"16px"}}>Support</h4>
          <a href="#" style={linkStyle}>Product Support</a>
          <a href="#" style={linkStyle}>Service Request and Inquiry</a>
          <a href="#" style={linkStyle}>Help Center</a>
          <a href="#" style={linkStyle}>After-Sales Service Policies</a>
          <a href="#" style={linkStyle}>Download Center
          </a>
          <a href="#" style={linkStyle}>Security and Privacy</a>
        </div>

        <div style={columnStyle}>
          <h4 style={{marginTop:"10px" ,fontSize:"16px"}}>Explore</h4>
          <a href="#" style={linkStyle}>Media Center</a>
          <a href="#" style={linkStyle}>Buying Guides</a>
          <a href="#" style={linkStyle}>DJI Trust Center</a>
          <a href="#" style={linkStyle}>DJI Blog</a>
        </div>

        <div style={columnStyle}>
          <h4 style={{marginTop:"10px" ,fontSize:"16px"}}>Community</h4>
          <a href="#" style={linkStyle}>SkyPixel</a>
          <a href="#" style={linkStyle}>DJI Forum</a>
          <a href="#" style={linkStyle}>Developer</a>
          <h4 style={{marginTop:"30px" ,fontSize:"16px"}}>Subscribe</h4>
          <p>Get the latest news from DJI</p>
          <div style={subscribeStyle}>
          <InputGroup>
          <Form.Control
            type="text"
            placeholder="Your email address"
            aria-label="Your email address"
            aria-describedby="btnGroupAddon"
          />
          <InputGroup.Text id="btnGroupAddon"> <button type="submit" style={buttonStyle}><i className="ri-mail-line"></i></button></InputGroup.Text>
        </InputGroup>
          </div>
        </div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",gap:"10px" ,}}>
      <div style={topLinksStyle}>
        <div style={logoStyle}>DJI</div>
       
          <a href="#" style={linkStyle}>Who We Are</a>
          <a href="#" style={linkStyle}>Contact Us</a>
          <a href="#" style={linkStyle}>Careers</a>
          <a href="#" style={linkStyle}>Dealer Portal</a>
          <a href="#" style={linkStyle}>RoboMaster</a>

          <div style={socialIconStyle}>
            <div style={{marginLeft:"100px"}}>
            <a href="#" style={logoStyle}><i className="ri-facebook-fill"></i></a>
            <a href="#" style={logoStyle}><i className="ri-twitter-x-line"></i></a>
            <a href="#" ><i className="ri-youtube-fill"></i></a>
            <a href="#" ><i className="ri-vuejs-fill"></i></a>
            <a href="#" ><i className="ri-instagram-fill"></i></a>
            </div>         
        </div>
        
      </div>
      </div>
      <div style={bottomStyle}>
        <div style={policyLinksStyle}>
          <a href="#" style={linkStyle}>DJI Privacy Policy</a>
          <a href="#" style={linkStyle}>Use of Cookies</a>
          <a href="#" style={linkStyle}>Terms of Use</a>
          <a href="#" style={linkStyle}>Business Information</a>
          <div style={{marginLeft:"300px"}}>
          <a href="#" style={linkStyle}>Other Regions / English</a>
          </div>  
        </div>
       
      </div>

      <div style={{display:"flex",gap:"20px",marginBottom:"0%"}}>
        <p>Copyright © 2025 DJI All Rights Reserved.</p>
        <a href="#" style={linkStyle}>Feedback on web experience</a>
      </div>
      
    </footer>
  );
}

export default Footer;
