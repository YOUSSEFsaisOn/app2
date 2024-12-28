import {Link} from 'react-router-dom';
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import logotextshop from "./logotextshop.png"
import imageshop from './imageshop.png'
import Asgaardsofa5 from "./Asgaard sofa 5.png"
import Vector11 from "./Vector 11.png"
import vector1 from "./Vector1.png"
import vector2 from "./Vector2.png"
import vector3 from './Vector3.png'
import vector4 from './Vector4.png'
export default function Card() {


  return (
    <div>

<div className="containerShops">
       
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
          <h1 className="titalshop">Card</h1>

          <nav className="navshopttital">
          <h4> <Link className="linkhome-imge" to="/">Home</Link>
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Comparison</span>  </h4>
          </nav>
        </nav>
        </div>







    
    <div className='listcard'>

      <nav className='textcard'>
      <td>Product</td>
      <td>Price</td>

      <nav className='endtxtcard'>
        <td>Quantity</td>
        <td>Subtotal</td>
      </nav>
      </nav>


      <nav className='listimgcard'>

          <img className='imglistcard' src={Asgaardsofa5} />

        <nav className='lowtextcard'>
          <h4>Asgaard sofa</h4>
          <h4>Rs. 250,000.00</h4>

        </nav>

        <nav className='lowbutntext'>

          <button className='butncardlow'>1</button>

          <h4>Rs. 250,000.00</h4>


          <button className='butnimg'>
          <img className='imglistcarddeled' src={Vector11} />
          </button>

        </nav>

      </nav>



      <div className='cart-box'>

        <h2>Cart Totals</h2>

        <nav className='cart-totals'>
          <h4>Subtotal <span className='subtotal'>Rs. 250,000.00</span></h4>
          <h4>Total <span className='subtotal'>Rs. 250,000.00</span></h4>

        </nav>
          <Link className='linkbox' to="/Checkout"><button className='butnbox'>Check Out</button></Link>
      </div>
    </div>



<br />
<br />
<br />
<br />


<br />
<br />
<br />
<br />
<br />
<br />
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





<hr  className='hrcard'/>







     
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


    </div>
  )
}
