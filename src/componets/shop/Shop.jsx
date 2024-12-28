import {  Link } from "react-router-dom";
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"  
import imageshop from "./imageshop.png"
import logotextshop from "./logotextshop.png"
import logo5 from "./logo5.png"
import logo6 from "./logo6.png"
import logo7 from "./logo7.png"
import Line1 from "./Line1.png"
import image5 from "./image5.png"
import image6 from "./image6.png"
import image7 from "./image7.png"
import image8 from "./image8.png"
import image9 from "./image9.png"
import image10 from "./image10.png"
import image11 from "./image11.png"
import image12  from "./image12.png"
import Label1 from "./Label1.png"
import Label2 from "./Label2.png"
import vector1 from "./Vector1.png"
import vector2 from "./Vector2.png"
import vector3 from "./Vector3.png"
import vector4 from "./Vector4.png"
export default function Shop() {
  return (
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
          <h1 className="titalshop">Shop</h1>

          <nav className="navshopttital">
          <h4>Home 
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Shop</span>  </h4>
          </nav>
        </nav>
        </div>



    
    <div className="containershowlitter">

      <div className="showlitter">
        <img src={logo5} />
      <button className="filter-button">Filter</button>
      <img src={logo6} />
      <img src={logo7} />
      <img src={Line1} />
      <p>Showing 1–16 of 32 results</p>
      </div>

      <div className="showresult"> 
        <h4>Show</h4>
        <button className="showresult_span">16</button>
        <h4>Short by</h4>
        <button className="showresult_bt">Default</button>
      </div>
    </div>
      







    <div className="containerflexshop">

<nav className="fleximgsshop">
  <img className="labels" src={Label1} />
  <img className="imgss" src={image5} />
  <nav className="textfex">
  <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
  </nav>
</nav>

<nav className="fleximgsshop">
  <img className="imgss" src={image6} />
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>

 </nav>
</nav>

<nav className="fleximgsshop">

  <img className="labels" src={Label2} />
  <img className="imgss" src={image7} />
 
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label1} />
  <img className="imgss" src={image8} />
<nav className="textfex">
<h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>
</nav>
</nav>

</div>




<div className="containerflexshop">

<nav className="fleximgsshop">
<img className="labels" src={Label2} />
  <img className="imgss" src={image9} />
  <nav className="textfex">
  <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h3>Rp 2.500.000</h3>
  </nav>
</nav>

<nav className="fleximgsshop">
  <img className="imgss" src={image10} />
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label1} />
  <img className="imgss" src={image11} />
 
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000 </h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label2} />
  <img className="imgss" src={image12} />
<nav className="textfex">
<h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>
</nav>
</nav>

</div>




<div className="containerflexshop">

<nav className="fleximgsshop">
  <img className="labels" src={Label1} />
  <img className="imgss" src={image5} />
  <nav className="textfex">
  <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
  </nav>
</nav>

<nav className="fleximgsshop">
  <img className="imgss" src={image6} />
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>

 </nav>
</nav>

<nav className="fleximgsshop">

  <img className="labels" src={Label2} />
  <img className="imgss" src={image7} />
 
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label1} />
  <img className="imgss" src={image8} />
<nav className="textfex">
<h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>
</nav>
</nav>

</div>




<div className="containerflexshop">

<nav className="feximgs">
<img className="labels" src={Label2} />
  <img className="imgss" src={image9} />
  <nav className="textfex">
  <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h3>Rp 2.500.000</h3>
  </nav>
</nav>

<nav className="fleximgsshop">
  <img className="imgss" src={image10} />
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label1} />
  <img className="imgss" src={image11} />
 
 <nav className="textfex">
 <h3>Syltherine</h3>
  <p>Stylish cafe chair</p>
  <h4>Rp 2.500.000 </h4>
 </nav>
</nav>

<nav className="fleximgsshop">
<img className="labels" src={Label2} />
  <img className="imgss" src={image12} />
<nav className="textfex">
<h3>Syltherine</h3>
  <p>Outdoor bar table and stool</p>
  <h4>Rp 2.500.000</h4>
</nav>
</nav>

</div>




<div className="pagination">
  <Link className="paginationptn1" to="/">1</Link>
  <Link className="paginationptn" to= "/SingleProduct">2</Link>
  <Link className="paginationptn" to="/CartSidebar">3</Link>
  <Link className="paginationptn4" to="/">Next</Link>
</div>

<br />
<br />
<br />

<div className="containervector">
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
    <h1 className="vectorh1">24 / 7 Support</h1>
    <p>Dedicated support</p>
    </nav>
  </nav>
</div>





<br />
<br />



     
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
