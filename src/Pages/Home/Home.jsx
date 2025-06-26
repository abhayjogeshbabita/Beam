import React from "react";
import "./Home.css";
import home1 from "../../assets/home1.png";
import home4 from "../../assets/home4.png";
import home14 from "../../assets/home14.png";
import home10 from "../../assets/home10.png";
import home3 from "../../assets/home3.png";
import home12 from "../../assets/home12.png";
import home5 from "../../assets/home5.png";
import home6 from "../../assets/home6.png";
import home7 from "../../assets/home7.png";
import home8 from "../../assets/home8.png";
import home9 from "../../assets/home9.png";

const Home = () => {
  return (
    <>
      <div className="miracle-section">
        <div className="miracle-container">
          <img src={home1} alt="Miracle Maker" className="miracle-image" />
          <div className="miracle-text">
            <h1>MIRACLE MAKER</h1>
            <button className="miracle-button">
              DISCOVER THE MIRACLE OF HYDRATION
            </button>
          </div>
        </div>
      </div>

      <div className="product-scroll-container">
        <div className="product-row">
          {[...Array(4)].map((_, index) => (
            <div className="product-card" key={index}>
              <div className="card-header">
                <span className="category">blush</span>
                <span className="new-badge">new</span>
              </div>
              <img
                src={home1}
                alt={`Product ${index + 1}`}
                className="product-image"
              />
              <div className="card-footer">
                <div className="rating">
                  ★★★★★ <span className="reviews">(4,315)</span>
                </div>
                <div className="title-price">
                  <span className="title">PRODUCT {index + 1}</span>
                  <span className="price">$24.00</span>
                </div>
                <p className="description">The essential prep layer</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hydrating-section">
        <div className="hydrating-container">
          {/* Left Side: Full Image */}
          <div className="hydrating-image-section">
            <img src={home4} alt="Model with cream" />
          </div>

          {/* Right Side: Product Image + Text */}
          <div className="hydrating-content-section">
            <img src={home14} alt="Hydrating Cream" className="product-img" />
            <h2>Hydrating face cream</h2>
            <p>
              A skin revitalizing cream made with <span>hyaluronic acid</span>{" "}
              that replenishes and retains moisture
            </p>
            <button className="shop-btn">SHOP</button>
          </div>
        </div>
      </div>

      <div className="beam-banner">
        <div className="beam-banner-content">
          <h1 className="title">Beam bright, beam big</h1>
          <p className="description">
            Simple steps. Real results. Experience the miracle of 24-hour
            hydration and skin renewal — morning to night.
          </p>
          <button className="shop-button">SHOP BEAM</button>
        </div>
      </div>

      <div className="glass-section">
        <div className="glass-text">
          <h2>Your first step to glass skin</h2>
          <p>
            A skin-soothing toner made with hyaluronic acid to provide a healthy
            glow and prepare the skin for better absorption of skincare products
          </p>
          <button className="glass-btn">START HERE</button>
        </div>
        <div className="glass-image">
          <img src={home10} alt="Miracle Maker Toner" />
        </div>
      </div>
      <div className="serum-section">
        <div className="serum-left">
          <img src={home3} alt="Model applying serum" />
        </div>
        <div className="serum-right">
          <img src={home12} alt="Miracle serum" className="serum-product" />
          <h2>Triple the power, one miracle serum</h2>
          <p>
            A skin revitalizing hydration serum that replenishes the complexion
            and improves the look of skin texture and tone.
          </p>
          <button className="serum-btn">PICK YOUR PAIR</button>
        </div>
      </div>

      <div className="beam-section">
        <div className="beam-header">
          <h2>You + Beam</h2>
          <button className="beam-social-btn">Find Us On Social</button>
        </div>

        <div className="beam-carousel">
          <div className="beam-image-track">
            <img src={home6} alt="Beam 1" />
            <img src={home7} alt="Beam 2" />
            <img src={home8} alt="Beam 3" />
            <img src={home9} alt="Beam 4" />
          </div>
        </div>

        <div className="beam-nav">
          <button className="nav-circle">&lt;</button>
          <button className="nav-circle">&gt;</button>
        </div>
      </div>

      <div className="about-beam">
        <div className="about-left">
          <p>
            At Beam, we believe in creating skincare that delivers miracles.
            From hydration to exfoliation and radiance, every product is
            designed to enhance your natural beauty and help you feel confident
            in your skin.
          </p>
          <button className="about-btn">ABOUT US</button>

          <div className="accordion">
            <div className="accordion-item">Our Technology</div>
            <div className="accordion-item">Our Science</div>
            <div className="accordion-item">Our Ingredients</div>
          </div>
        </div>

        <div className="about-right">
          <img src={home5} alt="Woman with skincare" />
        </div>
      </div>
    </>
  );
};

export default Home;
