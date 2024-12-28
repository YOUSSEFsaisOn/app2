import { Link } from "react-router-dom"
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import imageshop from "./imageshop.png"
import logotextshop from "./logotextshop.png"
import vector1 from "./Vector1.png"
import vector2 from "./Vector2.png"
import vector3 from "./Vector3.png"
import vector4 from "./Vector4.png"
import { useState } from "react"
export default function Checkout() {

    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'Sri Lanka',
        address: '',
        city: '',
        province: 'Western Province',
        zip: '',
        phone: '',
        email: '',
        additionalInfo: '',
        paymentMethod: 'Direct Bank Transfer',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted:', formData);
      };
   
  return (
    <div>

<ul className="navbar">
      <nav className="navh1-img"> <img src={logo} />
      <h1 className="logo-h1">Furniro</h1>
      </nav>
              <li className="navlnk">
                  <Link className="navlnks" to= "/">Home</Link>
                  <Link className="navlnks" to= "/Shop">Shop</Link>
                  <Link className="navlnks" to= "/About">About</Link>
                  <Link className="navlnks" to= "/Contact">Contact</Link>
              </li>
              <nav className="nvlogs">
              <button className="nav-log-btn"> <img className="logs" src={logo1} /></button>
              <button className="nav-log-btn"> <img className="logs" src={logo2} /></button>              
              <button className="nav-log-btn"> <img className="logs" src={logo3} /></button>
              <button className="nav-log-btn"> <img className="logs" src={logo4} /></button> 
              </nav>
          </ul>





        <div className="containerbigshop"> 
          <div className="containersmall">
            <img className="imagebgshop" src={imageshop} />
          </div>

        <nav className="shoptltal"> 
          <h1 className="titalshop">Checkout</h1>

          <nav className="navshopttital">
          <h4><Link className="linktaital" to={"/"}>Home</Link> 
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Checkout</span>  </h4>
          </nav>
        </nav>
        </div>









        <div className="billing-container">
      <form onSubmit={handleSubmit} className="billing-form">
        <h2>Billing Details</h2>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Company Name (Optional)</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />

        <label>Country / Region</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>

        <label>Street Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Town / City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label>Province</label>
        <select name="province" value={formData.province} onChange={handleChange}>
          <option value="Western Province">Western Province</option>
        </select>

        <label>ZIP Code</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />

        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Additional Information</label>
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
      </form>

      <div className="order-summary">
        <h2>Product</h2>
        <div className="summary-item">
          <p>Aggregated Sofa x 1</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="summary-item">
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className="summary-item ">
          <p>Total</p>
          <p>Rs. 250,000.00</p>
        </div>

        <hr className="hrlow" />



      <div className="paymentmethodlow">
        
       
        <label className="payment-method">
          <input
            type="radio"
            name="paymentMethod"
            value="Direct Bank Transfer"
            checked={formData.paymentMethod === 'Direct Bank Transfer'}
            onChange={handleChange}
          />
          Direct Bank Transfer
        </label>
            
  
            
      
        <p>
          Make your payment directly into our bank account. Please use <br />
           your Order ID as the payment reference. Your
          order will not be <br />
           shipped until the funds have cleared in our account.
        </p>

        <label className="payment-method">
          <input
            type="radio"
            name="paymentMethod"
            value="Direct Bank Transfer"
            checked={formData.paymentMethod === 'Direct Bank Transfer'}
            onChange={handleChange}
          />
          Direct Bank Transfer
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Cash On Delivery"
            checked={formData.paymentMethod === 'Cash On Delivery'}
            onChange={handleChange}
          />
          Cash On Delivery
        </label>




      <p>
      Your personal data will be used to support your experience throughout this <br />
       website, to manage access to <br />
       your account, and for other purposes described in our privacy policy.
      </p>
      </div>

      <div>
        
      </div>
        <nav className="lowbtn">
        <button type="submit" className="place-order-btn">Place Order</button>
        </nav>

      </div>
    </div>




    <br />
    
    
<div className="containervectorcard">
  <nav className="nav-imgvecroe">
  <img className="imgvecroe" src={vector1} />
  <nav className="vectortext">
    <h1 className="vectorh1"> High Quality </h1> 
    <p>crafted from top materials</p>
  </nav>
  </nav>


  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={vector2} />
    <nav className="vectortext">
    <h1 className="vectorh1">Warranty Protecti</h1>
    <p>Over 2 years</p>
    </nav>
  </nav>


  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={vector3} />
    <nav className="vectortext">
    <h1 className="vectorh1">24 / 7 Support</h1>
    <p>Order over 150 $</p>
    </nav>
  </nav>

  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={vector4} />
    <nav className="vectortext">
    <h1 className="vectorh1">Free Shipping</h1>
    <p>Dedicated support</p>
    </nav>
  </nav>
</div>

 











<hr  />



     
<div className="footer-container">
        <div className="endlist">
          <h1 className="footer_title">Funiro.</h1>
          <p className="footer-p">400 University Drive Suite 200 Coral <br /> 
          Gables,  <br />
          FL 33134 USA</p>
        </div>

        <div className="endlist">
          <ul className="uls">
          <h4 className="footer_subtitle">Links</h4>
            <li><Link className="rutr" to="/">Home</Link></li>
            <li><Link className="rutr" to="/shop">Shop</Link></li>
            <li><Link className="rutr" to="/about">About</Link></li>
          </ul>
        </div>

        <div className="endlist">
          <ul className="uls">
          <h4 className="footer_subtitle">Help</h4>
            <li><Link className="rutr" to="/payment-options">Payment Options</Link></li>
            <li><Link className="rutr" to="/returns">Returns</Link></li>
            <li><Link className="rutr" to="/privacy-policies">Privacy Policies</Link></li>
          </ul>
        </div>

        <div className="footer__section ">
          <h4 className="footer__subtitle">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="footer__input"
            />
            <button type="submit" className="footer__button">Subscribe</button>
          </form>
        </div>
      </div>




    <div className="enddv">
    <hr />
      <p className="endtext">2023 furino. All rights reverved</p>
    </div>


      
    </div>
  )
}
