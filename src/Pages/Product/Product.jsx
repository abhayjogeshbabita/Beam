import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Product.css'
import product2 from '../../assets/product2.png'
import product12 from '../../assets/product12.png'
import product7 from '../../assets/product7.png'
import product13 from '../../assets/product13.png'
import product9 from '../../assets/product9.png'
import product4 from '../../assets/product4.png'
import product6 from '../../assets/product6.png'
import product3 from '../../assets/product3.png'
import product1 from '../../assets/product1.png'
import product10 from '../../assets/product10.png'
import product8 from '../../assets/product8.png'
import product5 from '../../assets/product5.png'
import product11 from '../../assets/product11.png'

const Product = () => {
  return (
    <>   
    
      <div className="hero-wrapper">
      <div className="hero-image-container">
        <img src={product2} alt="Product Visual" className="hero-image" />
      </div>

      <div className="button-group">
        <button className="pill">FEATURED</button>
        <button className="pill">SKIN</button>
        <button className="pill">LIP+CHEEK</button>
        <button className="pill">SETS</button>
        <button className="pill">AWARD WINNERS</button>
        <button className="pill">SHOP ALL</button>
      </div>
    </div>
    
    
    
<div className="product-wrapper">
  {/* Group 1 */}
  <div className="product-pair">
    <div className="product-card">
      <h2 className="product-category">blush</h2>
      <img src={product12} alt="Pocket Blush" />
      <div className="product-info">
        <p className="rating">★★★★★ (4.8/5)</p>
        <p className="title">POCKET BLUSH</p>
        <p className="subtitle">The natural flush</p>
        <p className="price">$24.00</p>
      </div>
    </div>

    <div className="product-card">
      <h2 className="product-category">prep</h2>
      <img src={product7} alt="Glazing Milk" />
      <div className="product-info">
        <p className="rating">★★★★★ (4.8/5)</p>
        <p className="title">GLAZING MILK</p>
        <p className="subtitle">The essential prep layer</p>
        <p className="price">$32.00</p>
      </div>
    </div>
  </div>

  {/* Group 2 */}
  <div className="product-pair">
    <div className="product-card">
      <h2 className="product-category">pink</h2>
      <img src={product13} alt="The Pink Edit" />
      <div className="product-info">
        <p className="rating">★★★★★ (5/5)</p>
        <p className="title">THE PINK EDIT</p>
        <p className="subtitle">Blush + lip trio</p>
        <p className="price">$62.00</p>
      </div>
    </div>

    <div className="product-card">
      <h2 className="product-category">blushes</h2>
      <img src={product9} alt="Pocket Blush Trio" />
      <div className="product-info">
        <p className="title">THE POCKET BLUSH TRIO</p>
        <p className="subtitle">Three shades of your choice</p>
        <p className="price">$69.00</p>
      </div>
    </div>
  </div>
</div>


<div className="product-wrapper">
  {/* Group 1 */}
  <div className="product-pair">
    <div className="product-card">
      <h2 className="product-category">seal</h2>
      <img src={product4} alt="Barrier Butter" />
      <div className="product-info">
        <p className="rating">★★★★★ (1,377)</p>
        <p className="title">BARRIER BUTTER</p>
        <p className="subtitle">The intensive moisture balm</p>
        <p className="price">$38.00</p>
      </div>
    </div>

    <div className="product-card">
      <h2 className="product-category">travel</h2>
      <img src={product6} alt="The Travel Set" />
      <div className="product-info">
        <p className="rating">★★★★★ (156)</p>
        <p className="title">THE TRAVEL SET</p>
        <p className="subtitle">Your travel-friendly essentials</p>
        <p className="price">$66.00</p>
      </div>
    </div>
  </div>

  {/* Group 2 */}
  <div className="product-pair">
    <div className="product-card full-image-only">
      <img src={product1} alt="Mirror Image" />
    </div>

    <div className="product-card">
      <h2 className="product-category">shape</h2>
      <img src={product3} alt="Peptide Lip Shape" />
      <div className="product-info">
        <p className="rating">★★★★★ (1,416)</p>
        <p className="title">PEPTIDE LIP SHAPE</p>
        <p className="subtitle">The contouring lip shaper</p>
        <p className="price">$24.00</p>
      </div>
    </div>
  </div>
</div>
      
 

<div className="product-wrapper">
  {/* Group 1 */}
  <div className="product-pair">
    <div className="product-card">
      <h2 className="product-category">tint</h2>
      <img src={product10} alt="Peptide Lip Tint" />
      <div className="product-info">
        <p className="rating">★★★★★ (10,624)</p>
        <p className="title">PEPTIDE LIP TINT</p>
        <p className="subtitle">The tinted lip hugger</p>
        <p className="price">$18.00</p>
      </div>
    </div>

    <div className="product-card">
      <h2 className="product-category">blush</h2>
      <img src={product8} alt="Pocket Blush" />
      <div className="product-info">
        <p className="rating">★★★★★ (14,642)</p>
        <p className="title">POCKET BLUSH</p>
        <p className="subtitle">The natural flush</p>
        <p className="price">$24.00</p>
      </div>
    </div>
  </div>

  {/* Group 2 */}
  <div className="product-pair">
    <div className="product-card">
      <h2 className="product-category">the kit</h2>
      <img src={product5} alt="The Ribbon Kit" />
      <div className="product-info">
        <p className="rating">★★★★★ (7,554)</p>
        <p className="title">THE RIBBON KIT</p>
        <p className="subtitle">Four daily skin-essentials</p>
        <p className="price">$117.00</p>
      </div>
    </div>

    <div className="product-card">
      <h2 className="product-category">case</h2>
      <img src={product11} alt="Lip Case" />
      <div className="product-info">
        <p className="rating">★★★★★ (7,560)</p>
        <p className="title">LIP CASE</p>
        <p className="subtitle">Your essentials in one place</p>
        <p className="price">$18.00</p>
      </div>
    </div>
  </div>
</div>

      </>
  )
}

export default Product
