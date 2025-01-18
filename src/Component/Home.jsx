import { useDispatch, useSelector } from "react-redux";
import { cardsdata, fetchdata } from "../actionfile/action";
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import { Link } from "react-router";
import Videoslider from "./videoslider";
import Cardmodal from "./Card";
import Shop from "./Shop";
// import WheretoBuy from "./WheretoBuy";


const Home = () => {

  const dispatch = useDispatch();

    const { data ,isLoading ,isError } = useSelector((st) => st.Home);
    const {cards } = useSelector((st) => st.Cards);
    console.log(cards);
        
    useEffect(() => {
      dispatch(fetchdata())
      dispatch(cardsdata())
    }, [dispatch]);
  
    return (
      <div>
        {isError ? ( <h2>Error loading products.</h2> ) : isLoading ? ( <h2>Loading...</h2> ) : (
        <>
        <Carousel fade style={{  top: "9%", left: "0%" }}  interval={2000} wrap={true} pause={false}>
        {(data || []).map((item, index) => (
          <Carousel.Item key={item.id} >
            <img
              className="d-block w-100"
              src={item.image}
              alt={`Slide ${index + 1}`}
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <Carousel.Caption style={{ position: "absolute", top: "30%", transform: "translateY(-30%)", textAlign: "center" }}>
              <div className="carousel-caption-content">
                <h3>{item.text1}</h3>
                <h1>{item.text2}</h1>
                <h4>{item.text3}</h4>
                <div style={{ marginTop: "23px" }}>
                  <Link to={item.link1} className="custom-button" style={{ marginRight: "10px" }} >
                    Learn More
                  </Link>
                  <Link to="/WheretoBuy" className="custom-button">
                    Buy Now

                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        </Carousel>

        {/* Render cards with background image and overlay */}
        
        <div>
        <Link to={"/WheretoBuy"}   style={{ display: 'grid', justifyContent: 'space-around',gridTemplateColumns:"repeat(2,1fr)" ,padding: '20px' ,gap:"8px" }}>
        {(cards || []).map((card, index) => (
         
          <div
            key={index}
            style={{
              // borderRadius: '8px',
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
            <div style={{
              // backgroundColor: 'rgba(0, 0, 0, 0.6)',
              position: 'absolute',
              top: '10%',
              bottom: '0',
              width: '100%',
              padding: '16px',
              boxSizing: 'border-box',
            }}>
              <h2 style={{ fontSize: '16px', color: '#ccc', margin: '0' }}>{card.subtitle}</h2>
              <h1 style={{  margin: '10px 0', color: '#000' , fontSizeAdjust:"60px"}}>{card.title}</h1>
              <h3 style={{ fontSize: '18px', color: '#000' }}>{card.description}</h3>
              <div>
                <span  style={{ textDecoration: 'none', color: '#4db8ff', fontSize: '14px' }}>Learn More</span>
                <span style={{ color: '#fff' }}> | </span>
                <Link to="/WheretoBuy" style={{ textDecoration: 'none', color: '#4db8ff', fontSize: '14px' }}>Buy Now</Link>
              </div>
            </div>
          </div>
          
        ))}
        </Link>
        </div>
      </>
          )
        }
      <Videoslider />
      {/* Standing at the Forefront of Innovation */}
      <div className="banner-container">
      <h1 className="banner-heading">Standing at the Forefront of <br />Innovation</h1>
      <p className="banner-subtext">
        As we explore new technology, we push the capabilities of what is possible, driving
         <br /> progress through continuous innovation.
      </p>
      </div>

      <div className="cards-container">
      <div className="card">
        <div className="background-image-1">
          <div className="content">
          <h2>Engineering, Science & Technology</h2>
            <h1>DJI Ronin Series Wins 2024 <br />Emmy® Award</h1>  
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="background-image-2">
          <div className="content">
          <h2>Industry Insight Report</h2>
            <h1>DJI Agriculture Annual Report</h1>    
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
    

    {/* Explore DJI Products in Different Fields */}
      <div>
        <h1 style={{textAlign:"center" ,margin:"50px 0px"}}>Explore DJI Products in Different Fields</h1>
      </div>  

      <Cardmodal />
      <Shop />
      </div>
    );
}

export default Home
