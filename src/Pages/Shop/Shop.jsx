import React from 'react';
import './Shop.css';
import home5 from '../../assets/home5.png';
import home6 from '../../assets/m6.jpg';
import home7 from '../../assets/m7.jpg';
import home20 from '../../assets/m20.jpg';
import home21 from '../../assets/m21.jpg';
import product8 from '../../assets/product8.png';
import m5 from '../../assets/m5.jpg';
import m31 from '../../assets/m31.jpg';
import p24 from '../../assets/p24.jpg';
import p23 from '../../assets/p23.jpg';
import product10 from '../../assets/product10.png';
import p3 from '../../assets/p3.jpg'
import m25 from '../../assets/m25.jpg';
import in1 from '../../assets/in1.webp';
import about6 from '../../assets/about6.png';
import about7 from '../../assets/about7.png';
import about8 from '../../assets/about8.png';
import about9 from '../../assets/about9.png';



const Shop = () => {
  
  return (
    <>
<div className="beam-wrapper">
  {/* Left: Image */}
  <div className="beam-image">
    <img src={home5} alt="Model" />
  </div>

  {/* Right: Content */}
  <div className="beam-content">
    <h1 className="beam-title">beam cream</h1>
    <p className="beam-subtitle">THE NATURAL GLOW</p>
    <p className="beam-rating">★★★★★ <span>(4,535)</span></p>
    <p className="beam-description">
      A little glow for a big impact. Our on-the-go beam cream brings instant radiance
      to your skin with a soft, luminous finish that blends easily and lasts all day. It's a
      lightweight, hydrating formula that gives your face a natural dewy look without
      feeling heavy or greasy.
    </p>
    <p className="beam-size">Size: 30ml / 1.01 fl oz</p>

    <div className="shade-section">
      <label>Shade:</label>
      <span> sprinkle - warm pearly pink </span>
      <div className="shades">
        <div className="shade-circle" style={{ backgroundColor: '#d18c9d' }}></div>
        <div className="shade-circle selected" style={{ backgroundColor: '#df697f' }}></div>
        <div className="shade-circle" style={{ backgroundColor: '#e24b6b' }}></div>
        <div className="shade-circle" style={{ backgroundColor: '#c8415c' }}></div>
        <div className="shade-circle" style={{ backgroundColor: '#ac3e4c' }}></div>
      </div>
    </div>

    <button className="buy-btn">BUY BLUSH – $24.00</button>
    <p className="afterpay-note">or 4 interest-free payments of $6.00 with <strong>Afterpay</strong></p>

    <div className="edit-options">
      <span className="active">GET THE EDIT</span>
      <span>GET THE TRIO</span>
    </div>

    <div className="edit-pack">
      <img src={product10} alt="Cream Edit" />
      <div className="edit-info">
        <span className="pack-name">THE CREAM EDIT</span>
        <button className="add-btn">ADD – $62.00</button>
      </div>
    </div>

    <div className="accordions">
      <details>
        <summary>BENEFITS</summary>
        <p>Hydrates, glows, lasts all day.</p>
      </details>
      <details>
        <summary>APPLICATION</summary>
        <p>Tap onto cheeks and blend upward with fingers.</p>
      </details>
    </div>
  </div>
</div>




<div className="sprinkle-wrapper">
  <div className="sprinkle-container">
    <div className="sprinkle-text">
      <h2 className="sprinkle-heading">
        meet sprinkle — <br />
        <span>a warm pearly beam cream</span>
      </h2>
    </div>

    <div className="sprinkle-images">
      <img src={home6} alt="Sprinkle step 1" />
      <img src={home7} alt="Sprinkle step 2" />
      <img src={home20} alt="Sprinkle product" />
      <img src={home21} alt="Sprinkle eye apply" />
    </div>
  </div>
</div>

<div className="info-wrapper">
  <div className="info-container">
    {/* Text Section */}
    <div className="info-text">
      <h2>
        A skin-plumping cream for <strong>LASTING hydration + SOFT, SUPPLE skin.</strong>
      </h2>
      <table>
        <tbody>
          <tr>
            <td className="label">BEST MATCH FOR:</td>
            <td className="value">Dehydrated, dull, or tired skin</td>
          </tr>
          <tr>
            <td className="label">TEXTURE VIBE:</td>
            <td className="value">Silky, cloud-like cream that sinks in fast</td>
          </tr>
          <tr>
            <td className="label">VISIBLE RESULTS:</td>
            <td className="value">Bouncy, glowing skin with a fresh finish</td>
          </tr>
          <tr>
            <td className="label">SCENT PROFILE:</td>
            <td className="value">Zero fragrance, all comfort</td>
          </tr>
          <tr>
            <td className="label">JUST SO YOU KNOW:</td>
            <td className="value">Derm-approved • Vegan formula • No nasties • Korean skincare tech</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Image Section */}
    <div className="info-image">
      <img src={product8} alt="Beam Glow Look" />
    </div>
  </div>
</div>




      
<div className="video-wrapper">
  <div className="video-thumbnail">
    <img src={m5} alt="Pocket Blush Thumbnail" className="video-bg" />
    <div className="video-overlay">
      <p>See POCKET BLUSH in action.</p>
      <button className="play-button" aria-label="Play Video">▶</button>
    </div>
  </div>
</div>

<div className="ingredient-feature-wrapper">
  <div className="ingredient-feature-container">
    {/* Left Side: Styled Text */}
    <div className="feature-text">
      <p className="made-with">MADE WITH</p>
      <div className="ingredient-highlight">peptides</div>
      <div className="ingredient-sub">tamanu oil</div>
    </div>

    {/* Right Side: Image */}
    <div className="feature-image">
      <img src={m31} alt="Cream Ingredients" />
    </div>
  </div>
</div>


<div className="mini-cream-wrapper">
  <p className="mini-tagline">DREAMY, CREAMY, <span>teeny.</span></p>

  <div className="mini-image-group">
    <img src={p23} alt="Tiny Beam Cream 1" />
    <img src={p24} alt="Tiny Beam Cream 2" />
  </div>
</div>


<div className="study-section">
  <div className="study-text">
    <p className="study-stat"><strong>100%</strong><br />said it gave cheeks a natural glow</p>
    <p className="study-stat"><strong>97%</strong><br />said it melts into skin + blends seamlessly</p>
    <p className="study-stat"><strong>94%</strong><br />said it works well on cheeks + lips</p>
    <p className="study-stat"><strong>3 out of 4</strong><br />said the blush feels hydrating</p>

    <p className="study-footnote">*Based on a 32-subject consumer perception study after 2 weeks of use.</p>

    <div className="study-links">
      <a href="#">consumer study results</a>
      <a href="#">clinical results</a>
    </div>
  </div>

  <div className="study-image">
    <img src={p3} alt="Beam Miracle Maker stacked jars" />
  </div>
</div>

<div className="routine-wrapper">
  {/* Image Section */}
  <div className="routine-image-container">
    <img src={m25} alt="Model with cream" className="routine-image" />
  </div>

  {/* Text Section */}
  <div className="routine-content">
    <h2 className="routine-title">Get ready with beam.</h2>
    <p className="routine-subtitle">Essentials in Hailey’s beam routine.</p>

    <div className="product-step">
      <p className="product-name">glazing milk</p>
      <p className="product-desc">press essence into skin for a hydrated makeup base</p>
      <img src={in1} alt="Glazing Milk" className="milk-drop" />
    </div>

    <div className="routine-steps">
      <div className="step"><span>01</span><p>PREP</p></div>
      <div className="step"><span>02</span></div>
      <div className="step"><span>03</span></div>
      <div className="step"><span>04</span></div>
      <div className="step"><span>05</span></div>
    </div>
  </div>
</div>
<div className="reviews-wrapper">
  <div className="reviews-header">
    <div className="average-rating">
      <p><strong>4.7 ★★★★★</strong></p>
      <p>AVERAGE RATING</p>
      <p className="sub">Based on 4,535 reviews</p>
    </div>
    <div className="controls">
      <button className="filter-btn">⚲ FILTERS</button>
      <select className="sort-dropdown">
        <option>Most Recent</option>
        <option>Highest Rated</option>
        <option>Lowest Rated</option>
      </select>
    </div>
  </div>

  {/* Review 1 */}
  <div className="review-card">
    <div className="review-meta">
      <p><strong>Samantha W.</strong></p>
      <p className="verified">Verified Buyer</p>
      <p className="review-label">Reviewing</p>
      <p>pocket blush sprinkle</p>
      <p className="review-label">Age Range</p>
      <p>18 - 24</p>
      <p className="review-label">What is your skin type?</p>
      <p>Dry, Sensitive</p>
      <p className="review-label">What are your favorite features about this product?</p>
      <p>Easy to Apply, Easy to Blend, Lightweight, Buildable Color</p>
    </div>
    <div className="review-content">
      <p className="stars">★★★★★</p>
      <p className="review-title">The Perfect Shade</p>
      <p className="review-comment">
        Blends so easily and is a nice creamy texture, it is smaller than what I thought but this blush is the perfect shade for a sun-kissed look
      </p>
      <p className="review-slider-label">How long-wearing is this product?</p>
      <input type="range" className="review-slider" min="0" max="100" value="70" readOnly />
      <div className="slider-scale">
        <span>Not very long-wearing</span>
        <span>Super long-wearing</span>
      </div>
    </div>
  </div>

  {/* Review 2 */}
  <div className="review-card">
    <div className="review-meta">
      <p><strong>Kourtney L.</strong></p>
      <p className="verified">Verified Buyer</p>
      <p className="review-label">Reviewing</p>
      <p>pocket blush sprinkle</p>
      <p className="review-label">Age Range</p>
      <p>25 - 34</p>
      <p className="review-label">Biggest Skin Concern</p>
      <p>Dryness, Dry Lips, Wrinkles, Dullness, Uneven Skin Tone</p>
      <p className="review-label">What is your skin type?</p>
      <p>Sensitive, Dry</p>
      <p className="review-label">What are your favorite features about this product?</p>
      <p>Hydrating, Easy to Apply, Buildable Color, Lightweight, Easy to Blend</p>
    </div>
    <div className="review-content">
      <p className="stars">★★★★★</p>
      <p className="review-title">It’s So Beautiful</p>
      <p className="review-comment">
        I’m so happy they brought it back for us!!! I love it a lot.
      </p>
      <p className="review-slider-label">How long-wearing is this product?</p>
      <input type="range" className="review-slider" min="0" max="100" value="60" readOnly />
      <div className="slider-scale">
        <span>Not very long-wearing</span>
        <span>Super long-wearing</span>
      </div>
    </div>
  </div>
</div>


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

    {/* ✅ Product 4 (NEW) */}
    <div className="product-card">
      <div className="product-header">
        <h2>cream</h2>
        <span className="badge new">new</span>
      </div>
      <div className="product-image-container">
        <img src={about9} alt="Miracle Cream" className="product-image" />
      </div>
      <div className="product-info">
        <div className="rating">★★★★★ <span className="reviews">(5,002)</span></div>
        <div className="info-row">
          <div className="name">MIRACLE CREAM</div>
          <div className="price">$38.00</div>
        </div>
        <div className="desc">Long-lasting hydration</div>
      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default Shop;
