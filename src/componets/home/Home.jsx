import { Link } from "react-router-dom"
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png" 
import imagebig from "./imagebig.png"
import image1 from "./image1.png"
import image2 from "./image2.png"
import image3 from "./image3.png"
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
import image13 from "./image13.png"
import image14 from "./image14.png"
import image15 from "./image15.png"
import image36 from "./image36.jpg"
import image37 from "./image37.jpg"
import image38 from "./image38.jpg"
import image39 from "./image39.jpg"
import image40 from "./image40.jpg"
import image41 from "./image41.jpg"
import image42 from "./image42.jpg"
import image43 from "./image43.jpg"
import image44 from "./image44.jpg"

export default function Navbar () {
 
  return (
    <>
    <div className="container">
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



          <div className="containerbig">
            <div className="containersmall">
              <img className="imagebg" src={imagebig} />
            </div>
            
            <div className="containertext">
              <h4>New Arrival</h4>
              <h1 className="texttitle">Discover Our <br />
              New Collection
              </h1>
              <p>Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit.Ul <br />
                voluptatem quam facere quae nemo cumque.
              </p>

              <button className="btn">BUY NOW</button>
            </div>
          </div>






          <div className="containerlist">
           <nav className="list">
           <h1 className="listtitle">Browse The Range</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           </nav>

            <div className="imglists">
             <nav className="navlist">
             <img className="img-list" src= {image1} />
             <h1>Dining</h1>
             </nav>
            <nav className="navlist">
            <img className="img-list" src= {image2} />
            <h1>Living</h1>
            </nav>
              <nav className="navlist">
              <img className="img-list" src= {image3} />
              <h1>Bedroom</h1>
              </nav>
            </div>
          </div>



            <nav className="titalfex">
              <h1>Our Products</h1>
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




          <div className="containerflex">
            
          <nav className="feximgs">
          <img className="labels" src={Label2} />
              <img className="imgss" src={image9} />
              <nav className="textfex">
              <h3>Syltherine</h3>
              <p>Stylish cafe chair</p>
              <h3>Rp 2.500.000</h3>
              </nav>
            </nav>

            <nav className="feximgs">
              <img className="imgss" src={image10} />
             <nav className="textfex">
             <h3>Syltherine</h3>
              <p>Outdoor bar table and stool</p>
              <h4>Rp 2.500.000  <span className="spn">Rp 3.500.000</span></h4>
             </nav>
            </nav>

            <nav className="feximgs">
            <img className="labels" src={Label1} />
              <img className="imgss" src={image11} />
             
             <nav className="textfex">
             <h3>Syltherine</h3>
              <p>Stylish cafe chair</p>
              <h4>Rp 2.500.000 </h4>
             </nav>
            </nav>

            <nav className="feximgs">
            <img className="labels" src={Label2} />
              <img className="imgss" src={image12} />
            <nav className="textfex">
            <h3>Syltherine</h3>
              <p>Outdoor bar table and stool</p>
              <h4>Rp 2.500.000</h4>
            </nav>
            </nav>

          </div>

            <div className="showMore">
            <button className="showMoreButton">Show More</button>
            </div>



    <div className="slaider">

      <div className="slaiderText">
         <h1>50+ Beautiful rooms <br />
          inspiration</h1>
          <p>
            Our designer already made a lot of beautiful <br />
             prototypes of rooms
            that inspire you.
          </p>
          <button className="slaider-btn">explore More</button>
      </div>

      
      <div className="slaiders">
      <img className="slaidimgs" src= {image13} />
      <img className="slaidimg" src= {image14} />
      <img className="slaidim" src= {image15} />
      </div>
    </div>



      <div className="rowText">
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>


    <div className="rows">

      <div className="flexbox">
        <nav>
        <img className="lowimg" src={image36} />
        <img className="lowimg" src={image37} />
        <img className="lowimg" src={image38} />
        <img className="lowimg" src={image39} />
        </nav>
        <nav>
        <img className="lowimg" src={image40} />
        <img className="lowimg" src={image41} />
        <img className="lowimg" src={image42} />
        <img className="lowimg" src={image43} />
        <img className="lowimg" src={image44} />
        </nav>
      </div>
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
        
    </>
  )
}
