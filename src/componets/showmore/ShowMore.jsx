import {Link} from "react-router-dom";
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import logotextshop from "./logotextshop.png"
import Line1 from "./Line1.png"
import imag1 from "./imag1.png"
import imag2 from "./imag2.png"
import imag3 from "./imag3.png"
import imag4 from "./imag4.png"
import Group95 from "./Group 95.png"
import Group88 from "./Group 88.png"
import Vector11 from "./Vector11.png"
import Vector12 from "./Vector12.png"
import Vector13 from "./Vector13.png"
import cloud1 from "./cloud1.png"
import cloud2 from "./cloud2.png"
import Label1 from "./Label1.png"
import Label2 from "./Label2.png"
import image5 from "./image5.png"
import image6 from "./image6.png"
import image7 from "./image7.png"
import image8 from "./image8.png"
import imagebox from "./imagebox.png"
import imagebox1 from "./imagebox1.png"
import {useState,} from "react";
export default function SingleProduct() {

  const [isChecked, setIsChecked] = useState(false);
  
  const handelButtonClick = () => {
    setIsChecked((prev) => !prev);
  }
  
  return (
    <div className="containersingle">
     
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
              <button onClick={handelButtonClick} className="nav-log-btn" > <img className="logs" src={logo4} /></button>
              <div>
              {isChecked && (
              <div className="cart-box">
                <h2>Shopping Cart</h2>

                <hr />

                <nav className="nav-box">
                <img className="imageboxs" src={imagebox} />
                <h3>Casaliving Wood</h3>
                <p className="p-box">1 x <span className="span-box">Rs. 250,000.00</span></p>
                </nav>
                <nav className="nav-box">
                <img className="imageboxs" src={imagebox1} />
                <h3>Casaliving Wood</h3>
                <p className="p-box">1 x <span className="span-box">Rs. 250,000.00</span></p> 
                </nav>

                
            
                <nav>
                  <p>Subtotal</p>
                  <p>Rs. 520,000.00</p>
                </nav>

                <nav>
                  <hr />
                  <button>Cart</button>
                  <button>Checkout</button>
                  <button>Comparison</button>
                </nav>
                
              </div>
              )}
              </div>
              </nav>
          </ul>
 <br />

    <div className="lestsingle">
      <nav className="navsingle">
        <Link className="navlink" to="/">Home</Link>
        <img className="" src={logotextshop} /> 
        <Link className="navlink" to="/shop">Shop</Link> 
        <img className="" src={logotextshop} /> 
        <img className="" src={Line1}/> 
        <h4>Asgaard sofa</h4>
      </nav>
    </div>


<div className="singlelists">

    <div className="container-single">
    <nav className="nvimg">
      <button className="imgsinglbtn"> <img className="imagesingle" src={imag1} /></button>
      </nav>
      <nav className="nvimg">
        <button className="imgsinglbtn"><img className="imagesingle" src={imag2} /></button>
      </nav>
      <nav className="nvimg">
        <button className="imgsinglbtn"><img className="imagesingle" src={imag3} /></button>
      </nav>
      <nav className="nvimg">
        <button className="imgsinglbtn"><img className="imagesingle" src={imag4} /></button>
      </nav>

    </div>

    <div className="listlitterimg">
    <img className="imagesinglee" src={Group95} />
    </div>

    <div className="containerrows">
      <nav >
        <nav className="texttital">
      <h1>Asgaard sofa <br /> <span className="listtital" >Rs. 250,000.00</span></h1>
        </nav>

    <nav className="nvtext" > 
      <img className="imgtext" src={Group88} />
      <img className="imgtextline" src={Line1} />
      <h5 className="text">5 Customer Review</h5>
    </nav>

    <nav>
    <p>Setting the bar as one of the loudest speakers in its class, the <br />
       Kilburn is a compact, stout-hearted hero with a well-balanced <br />
        audio which boasts a clear midrange and extended highs for a <br />
         sound.
      </p>

    </nav>

<br />

      <div className="listtext">
        <nav className="listtextnv">
        <h5>Size</h5>

        <nav className="listbuts">
        <button className="listtextbtnn">L</button>
        <button className="listtextbtn">XL</button>
        <button className="listtextbtn">XS</button>
        </nav>
        <h5>Color</h5>
        <nav className="btncolr">
        <span className="collr"> </span>
        <span className="collrblack"> </span>
        <span className="collrbony"> </span>
        </nav>
<br />
        <nav className="navchange">
          <button className="changebtn1"><span className="change"> <span className="pointchangee">-</span></span> 1 <span className="pointchange">+</span> </button>
          <button className="changebtn">Add To Cart</button>
          <button className="changebtn"> <span className="change">+</span>Compare</button>
        </nav>

        <br />
        <hr />

        <div className="product-info">
            <div className="sku">
              <span>SUK :</span>
              <span>SS001</span>
            </div>

            <div className="sku">
                <span>Category :</span>
                <span>Sofas </span>
            </div>

            <div className="sku">
                <span>Tags :</span>
                <span>Sofa, Chair, Home, Shop</span>
            </div>

            <div className="sku">
                <span>Share:</span>
                <div className="linksfece">
                  <Link className="Face" to="Facebook"><img src={Vector11}/></Link>
                  <Link className="Face" to="Linkedin"><img src={Vector12}/></Link>
                  <Link className="Face" to="Twitter"><img src={Vector13}/></Link>
                </div>
            </div>
        </div>
        </nav>
      </div>
      </nav>
    </div>

</div>


<br />
<br />
  <hr />

<div className="centerlistbig">

  <div className="centerlist">
    <nav className="centertital">
  <h2 className="titalblack">Description</h2>
  <h2>Additional Information</h2>
  <h2>Reviews [5]</h2>
    </nav>
    
  
  <p className="colorcenter">Embodying the raw, wayward spirit
     of rock ‘n’ roll, the Kilburn portable 
    active stereo speaker takes the unmistakable look and <br />
   sound of Marshall, unplugs the
    chords, and takes the show on the road.</p>


    <p className="colorcenter">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
     speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
     and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
      to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>



      <div className="controlimgcenter">
        <img className="imgcenter" src={cloud1} />
        <img className="imgcenter2" src={cloud2} />
      </div>

  </div>


    


  <nav className="titalfex">
              <h1>Related Products</h1>
            </nav>

          <div className="containerflex">

            <nav className="feximgs">
              <img className="labels" src={Label1} />
              <img className="imgss" src={image5} />
              <nav className="textfex">
              <h3>Syltherine</h3>
              <p>Stylish cafe chair</p>
              <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
              </nav>
            </nav>

            <nav className="feximgs">
              <img className="imgss" src={image6} />
             <nav className="textfex">
             <h3>Syltherine</h3>
              <p>Outdoor bar table and stool</p>
              <h4>Rp 2.500.000</h4>

             </nav>
            </nav>

            <nav className="feximgs">

              <img className="labels" src={Label2} />
              <img className="imgss" src={image7} />
             
             <nav className="textfex">
             <h3>Syltherine</h3>
              <p>Stylish cafe chair</p>
              <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
             </nav>
            </nav>

            <nav className="feximgs">
            <img className="labels" src={Label1} />
              <img className="imgss" src={image8} />
            <nav className="textfex">
            <h3>Syltherine</h3>
              <p>Outdoor bar table and stool</p>
              <h4>Rp 2.500.000</h4>
            </nav>
            </nav>
          
          </div>


        
          <div className="showMoresingle">
             <Link className="lnk-showmore" to="/ShowMoreSingle">Show more</Link>
           </div> 

          
  </div>

<br />
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
 