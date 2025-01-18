import axios from "axios";
import { useEffect, useState } from "react";

function Cardmodal() {
    const [exploreData, setExploreData] = useState([]);
    const [hoveredCard, setHoveredCard] = useState(null); 

    useEffect(() => {
      axios.get('http://localhost:3000/explore') 
      .then(response => {
        setExploreData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px' ,justifyContent:"center",marginBottom:"30px" }}>
      {exploreData.map((el) => (
        <div
        key={el.id}
        className="card"
        onMouseEnter={() => setHoveredCard(el.id)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '400px',
          height: '500px',
        //   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
          color: '#fff',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${el.image})`,
            backgroundSize: hoveredCard === el.id ? '110%' : '100%',
            backgroundPosition: 'center',
            transition: 'background-size 0.6s ease',
          }}
        ></div>
        <div style={{
        //   background: 'rgba(0, 0, 0, 0.6)',
          padding: '15px',
        //   borderRadius: '4px',
          textAlign:"center",
          zIndex: 1,
          position: 'relative',
        }}>
          <h2>{el.title}</h2>
          <p style={{fontSize:"18px" , paddingTop:"10px" ,lineHeight:"1.8"}}>{el.description}</p>
          <a href={el.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none',textAlign:"center"}}>
            Learn More
          </a>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Cardmodal;

{/* <p style={{fontSize:"18px" , paddingTop:"10px" ,lineHeight:"1.8"}}>{el.description}</p>
            <a href={el.link} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none',textAlign:"center" }}>
              Learn More
            </a> */}