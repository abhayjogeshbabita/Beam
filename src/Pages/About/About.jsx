import React from "react";
import "./About.css";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import in1 from "../../assets/in1.webp"
import in6 from '../../assets/in6.avif'
import in5 from '../../assets/in5.jpeg'
import in4 from '../../assets/in4.webp'
import about6 from '../../assets/about6.png'
import about7 from '../../assets/about7.png'
import about8 from '../../assets/about8.png'


const About = () => {
  return (
    <>
  <section className="hero">
  <img src={about1} alt="Beam Skincare" className="hero-image" />
  <div className="hero-text">
    <h1>
      A new <strong>PHILOSOPHY</strong> on <strong>SKINCARE.</strong>
    </h1>
    <button className="shop-btn">SHOP NOW</button>
  </div>
</section>


<section className="founder-note-section">
  <div className="founder-note-inner">
    <p className="note-heading">Founder’s Note</p>
    <p className="note-body">
      At Beam, we believe in simplicity, efficacy, and a touch of magic.
      Skincare should be more than a routine – it should be a ritual that
      empowers you to feel your best every day. With Beam, we’ve created
      products that work with your skin, not against it, to bring out your
      natural radiance.
      <br />
      <br />
      Here’s to glowing skin and endless confidence – welcome to the world
      of Beam family.
    </p>
    <p className="note-author">Nour, Founder of world of Beam</p>
  </div>
</section>



<section className="whybeam-section">
  <div className="whybeam-block">
    <div className="whybeam-image">
      <img src={about2} alt="Why Beam Skincare" />
    </div>
    <div className="whybeam-text">
      <h2>Why beam?</h2>
      <p className="whybeam-description">
        Each formula combines the latest in skincare science with nature’s most effective ingredients.
      </p>
      <div className="whybeam-tabs">
        <div className="tab">Innovative Technology</div>
        <div className="tab">Multifunctional Benefits</div>
        <div className="tab">Clean Beauty Promise</div>
      </div>
    </div>
  </div>
</section>



<section className="ingredients-section">
  <h2 className="ingredients-title">research-backed ingredients</h2>

  <div className="ingredients-carousel-wrapper">
    <div className="ingredients-scroll">
      
      <div className="ingredient-card">
        <div className="ingredient-image">
          <img src={in1} alt="Rosa Damascena" />
        </div>
        <div className="ingredient-text">
          <h3>Rosa Damascena</h3>
          <p>Soothes and hydrates, leaving skin soft and glowing.</p>
        </div>
      </div>

      <div className="ingredient-card">
        <div className="ingredient-image">
          <img src={in6} alt="Hyaluronic Acid" />
        </div>
        <div className="ingredient-text">
          <h3>Hyaluronic Acid</h3>
          <p>Plumps skin and locks in deep hydration for a radiant finish.</p>
        </div>
      </div>

      <div className="ingredient-card">
        <div className="ingredient-image">
          <img src={in4} alt="Niacinamide" />
        </div>
        <div className="ingredient-text">
          <h3>Niacinamide</h3>
          <p>Brightens, evens tone, and smoothens skin texture.</p>
        </div>
      </div>

      <div className="ingredient-card">
        <div className="ingredient-image">
          <img src={in5} alt="Glycolic Acid" />
        </div>
        <div className="ingredient-text">
          <h3>Glycolic Acid</h3>
          <p>Exfoliates gently to reveal fresh, glowing skin underneath.</p>
        </div>
      </div>

    </div>
  </div>
</section>
    <section className="product-scroll-section">
      <div className="scroll-container">

        {/* Product 1 */}
        <div className="product-card">
          <div className="product-header">
            <h2>blush</h2>
            <span className="badge new">new</span>
          </div>
          <div className="product-image-container">
            <img src={about6} alt="Pocket Blush" className="product-image" />
          </div>
          <div className="product-info">
            <div className="rating">★★★★★ <span className="reviews">(4,315)</span></div>
            <div className="info-row">
              <div className="name">POCKET BLUSH</div>
              <div className="price">$24.00</div>
            </div>
            <div className="desc">The natural flush</div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <div className="product-header">
            <h2>pink</h2>
            <span className="badge new">new</span>
          </div>
          <div className="product-image-container">
            <img src={about7} alt="The Pink Edit" className="product-image" />
          </div>
          <div className="product-info">
            <div className="info-row">
              <div className="name">THE PINK EDIT</div>
              <div className="price">$62.00</div>
            </div>
            <div className="desc">Blush + lip trio</div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <div className="product-header">
            <h2>prep</h2>
            <span className="badge award">award</span>
          </div>
          <div className="product-image-container">
            <img src={about8} alt="Glazing Milk" className="product-image" />
          </div>
          <div className="product-info">
            <div className="rating">★★★★★ <span className="reviews">(4,312)</span></div>
            <div className="info-row">
              <div className="name">GLAZING MILK</div>
              <div className="price">$32.00</div>
            </div>
            <div className="desc">The essential prep layer</div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
