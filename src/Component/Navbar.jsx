import { NavLink } from "react-router"
import './Navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };


  return (
    
    <div  className="navbar" style={{paddingLeft:"60px" ,position:"sticky"}}>
        <div  className="nav-links">
          <NavLink to="/Home"  className="logo"><img src="/images/Screenshot 2025-01-18 113704.png" alt="Screenshot" /></NavLink>
          <NavLink to="/CameraDrones">CameraDrones</NavLink>
          <NavLink to="/Handheld">Handheld</NavLink>
          <NavLink to="/Power">Power</NavLink>
          <NavLink to="/Specialized">Specialized</NavLink>
          <NavLink to="/Explore">Explore</NavLink>
          <NavLink to="/Support">Support</NavLink>
          <NavLink to="/WheretoBuy">Where to Buy</NavLink>
        </div>

        <div className="nav-actions">
          <div style={{paddingRight:"20px" , fontSize:"20px"}}>
             <i className="ri-search-line"></i>
             
          </div>
          {/* <div style={{paddingRight:"20px" , fontSize:"20px"}}>
             <i className="ri-user-line"></i>
          </div> */}
          <div style={{ position: 'relative' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span style={{ fontSize: '20px', cursor: 'pointer' }}>👤</span>
          {isDropdownVisible && (
            <div style={{ position: 'absolute', top: '30px', right: '0', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '4px', padding: '10px', width: '120px' }}>
              <NavLink to="/Login" style={{ display: 'block', padding: '5px 0', textDecoration: 'none', color: '#000' }} activeStyle={{ fontWeight: 'bold' }}>Login</NavLink>
              <NavLink to="/Login" style={{ display: 'block', padding: '5px 0', textDecoration: 'none', color: '#000' }} activeStyle={{ fontWeight: 'bold' }}>Register</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/buy" style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', textDecoration: 'none' }}>Buy</NavLink>
         </div>
      
    </div>
  
  )
}

export default Navbar


