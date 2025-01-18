import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Link } from "react-router";

function Videoslider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/slides')
  .then(response => {
    console.log("Response Data:", response.data);
    if (Array.isArray(response.data)) {
      setSlides(response.data);
    } else {
      console.error("Invalid data format:", response.data);
    }
  })
  .catch(error => {
    console.error('Error fetching slides:', error);
  });

  }, []);

  if (!slides.length) {
    return <p>Loading slides...</p>;  // Optional loading indicator
  }

  return (
    <div className="slider-container">
      <Carousel data-bs-theme="dark">
        {slides.map(slide => (
          <Carousel.Item key={slide.id} >
            <div style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
                
              }}>
            <video
              className="d-block w-100"
              autoPlay
              loop
              muted
              controls
              style={{width:"100vh" ,height:"100vh"}}
            >
              <source src={slide.url} type="video/mp4" style={{borderLeft:'20px solid #fff'}} />
            </video>
            <Carousel.Caption  style={{ position: "absolute", top: "30%", transform: "translateY(-30%)", textAlign: "center" ,color:"#fff"}}>
              <h1>{slide.title}</h1>
              <h3>{slide.description}</h3>
              <div style={{ marginTop: "23px"}}>
                  <Link to={slide.link1} className="custom-button" style={{ marginRight: "10px", textDecoration:"none" ,color:"#fff"}} >
                    Learn More
                  </Link>
                  <Link to={slide.link2} className="custom-button" style={{ marginRight: "10px", textDecoration:"none" ,color:"#fff"}}>
                    Buy Now
                  </Link>
                </div>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Videoslider;
