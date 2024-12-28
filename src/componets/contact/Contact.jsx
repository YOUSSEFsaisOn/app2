
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import imageshop from "./imageshop.png"
import logotextshop from "./logotextshop.png"
import { useState } from "react"
import vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
import Vector4 from "./Vector4.png"
import Vector5 from "./Vector5.png"
import Vector6 from "./Vector6.png"
import Vector7 from "./Vector7.png"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
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
          <h1 className="titalshop">Contact</h1>

          <nav className="navshopttital">
          <h4><Link className="linktaital" to={"/"}>Home</Link> 
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Contact</span>  </h4>
          </nav>
        </nav>
        </div>







        <div className='continercontact'>

     

        <nav className='contact-title'>
        <h2>Get In Touch With Us</h2>
        <p>
          For more information about our products & services, please feel free to drop us <br />
           an email. Our staff is always here to
          help you out. Do not hesitate!
        </p>
        </nav>
        
          <div className="contact-container">
      <div className="contact-details">

        <div className="detail-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h3><img className='imgvector' src={Vector5} /> Address</h3>
            <p>230 5th SE Avenue, New <br />
             York NY10000, United <br />
              States</p>
          </div>
        </div>
        <div className="detail-item">
          <i className="fas fa-phone"></i>
          <div>
            <h3>  <img className='imgvector2' src={Vector6} /> Phone</h3>
            <p>Mobile: (+84) 546-5789<br />Hotline: (+84) 456-8789</p>
          </div>
        </div>
        <div className="detail-item">
          <i className="fas fa-clock"></i>
          <div>
            <h3> <img className='imgvector3' src={Vector7} /> Working Time</h3>
            <p>Monday–Friday: 9:00– <br />
            22:00<br />Saturday–Sunday: 9:00– <br />
            21:00</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <label>Your name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="This is an optional field" />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <Link className='link-contct' to="/Blog">
        <button type="submit" className="submit-btn">Submit</button>
        </Link>
      </form>
    </div>
        </div>




    
    
<div className="containervectorcard">
  <nav className="nav-imgvecroe">
  <img className="imgvecroe" src={vector1} />
  <nav className="vectortext">
    <h1 className="vectorh1"> High Quality </h1> 
    <p>crafted from top materials</p>
  </nav>
  </nav>


  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={Vector2} />
    <nav className="vectortext">
    <h1 className="vectorh1">Warranty Protecti</h1>
    <p>Over 2 years</p>
    </nav>
  </nav>


  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={Vector3} />
    <nav className="vectortext">
    <h1 className="vectorh1">24 / 7 Support</h1>
    <p>Order over 150 $</p>
    </nav>
  </nav>

  <nav className="nav-imgvecroe">
    <img className="imgvecroe" src={Vector4} />
    <nav className="vectortext">
    <h1 className="vectorh1">Free Shipping</h1>
    <p>Dedicated support</p>
    </nav>
  </nav>
</div>



<br />
<hr />







     
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
