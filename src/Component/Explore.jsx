import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../actionfile/action";
import { fetchinfo } from "../actionfile/action"; // Assuming fetchinfo is another action
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CameraDrone.css";
import DroneQuizSection from "./DroneQuizSection";
import ProductGrid from "./ProductGrid";
import ExploreMore from "./ExploreMore";
import Productexplore from "./Productexplore";
import Shop from "./Shop";


const Explore = () => {
  const dispatch = useDispatch();

  const { details, isLoading, isError } = useSelector((state) => state.CameraDrones);
  const { info } = useSelector((state) => state.Infos);
  console.log(info);
  

  useEffect(() => {
    dispatch(Fetchdata);
    dispatch(fetchinfo);
  }, [dispatch]);

  return (
    <div>
      {isError ? (
        <h2>Error loading products.</h2>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px',
            flexWrap: 'wrap',
            backgroundColor: 'rgba(0, 0, 0, .02)',
          }}
        >
          {details.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px 8px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '24px' }}>
                <img src={item.icon} alt={item.name} width="100px" height="100px" />
              </div>
              <span style={{ fontSize: '14px', color: '#333' }}>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Camera Drones */}
      <div className="banner-container">
        <h1 className="banner-heading" style={{ fontSize: "44px" }}>Camera Drones</h1>
        <p className="banner-subtext">
          Capture your moments from above with <br />
          a mini drone, FPV, or professional aerial camera.
        </p>
      </div>

      {/* All-in-One Vlog Camera Drone */}
      <div className="container">
        <div className="content">
          <p style={{ fontSize: "14px", marginBottom: "10px", color: "#ccc" }}>All-in-One Vlog Camera Drone</p>
          <h1 style={{ color: "#fff", marginBottom: "10px" }}>DJI FLIP</h1>
          <h3 style={{ color: "#fff", marginBottom: "10px", fontSize: "16px" }}>Open New Possibilities</h3>
          <div className="buttons">
            <button>Buy Now</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>

      {/* Render cards with background image and overlay */}
      <div style={{ padding: '20px', display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {(info || []).map((card, index) => (
          <div
            key={index}
            style={{
              margin: '10px',
              width: '712px',
              height: '600px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              color: '#fff',
              backgroundImage: `url(${card.images})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10%',
                bottom: '0',
                width: '100%',
                padding: '16px',
                boxSizing: 'border-box',
              }}
            >
              <h2 style={{ fontSize: '16px', color: '#ccc', margin: '0' }}>{card.subtitle}</h2>
              <h1 style={{ margin: '10px 0', color: '#000' }}>{card.title}</h1>
              <h3 style={{ fontSize: '18px', color: '#000' }}>{card.description}</h3>
              <div>
                <Link to={card.links} style={{ textDecoration: 'none', color: '#4db8ff', fontSize: '14px' }}>Learn More</Link>
                <span style={{ color: '#fff' }}> | </span>
                <Link to={card.links} style={{ textDecoration: 'none', color: '#4db8ff', fontSize: '14px' }}>Buy Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DroneQuizSection />

      <div className="banner-container">
        <h1 className="banner-heading" style={{ fontSize: "44px" }}>Popular Drone Comparisons</h1>
      </div>
      
      <ProductGrid />

      <div className="banner-container" style={{ backgroundColor: "#f7f7f7" , marginTop:"30px"}}>
        <h1 className="banner-heading" style={{ fontSize: "44px" }}>Explore More</h1>
      </div>
      <ExploreMore />

      <div className="banner-container" style={{ backgroundColor: "#f7f7f7"}}>
        <h1 className="banner-heading" style={{ fontSize: "44px" }}>Product Support</h1>
      </div>
      <Productexplore />
      <Shop />

    </div>
  );
}

export default Explore
