import { Link } from "react-router-dom";
import imageshop from "./imageshop.png"
import logo  from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import logotextshop from "./logotextshop.png"
import Rectangle1 from "./Rectangle1.png"
import Vector15 from "./Vector15.png"
import Rectangle2 from "./Rectangle2.png"
import Rectangle3 from "./Rectangle3.png"
import Rectangle697 from "./Rectangle697.png"
import Rectangle66 from "./Rectangle66.png"
import Rectangle69 from "./Rectangle69.png"
import Rectangle698 from "./Rectangle698.png"
import Rectangle65 from "./Rectangle65.png"
import Vector1 from "./Vector1.png"
import Vector2 from "./Vector2.png"
import Vector3 from "./Vector3.png"
import Vector4 from "./Vector4.png"
export default function Blog() {
  
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
          <h1 className="titalshop">Blog</h1>

          <nav className="navshopttital">
          <h4><Link className="linktaital" to={"/"}>Home</Link> 
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Blog</span>  </h4>
          </nav>
        </nav>
        </div>








    <div className="containerblog">

      <nav className="bignav">
        <img className="imgRectangle1" src={Rectangle1} />

        <nav className="navblog">
          <img className="imgvectorblog" src={Vector15} />
          <p>Admin</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>14 Oct 2022</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>Wood</p>
        </nav>

       
       <nav className="textBlog">
          <h1 className="texth1">Going all-in with millennial design</h1>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
       </nav>

       <nav>
        <button className="butnbog">
          Read more
        </button>
        <hr className="hrline" />
       </nav>

       
      </nav>

      <nav className="bignav">
        <img className="imgRectangle1" src={Rectangle2} />

        <nav className="navblog">
          <img className="imgvectorblog" src={Vector15} />
          <p>Admin</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>14 Oct 2022</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>Wood</p>
        </nav>

       
       <nav className="textBlog">
          <h1 className="texth1">Exploring new ways of decorating</h1>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
       </nav>

       <nav>
        <button className="butnbog">
          Read more
        </button>
        <hr className="hrline" />
       </nav>


      </nav>

      <nav className="bignav">
        <img className="imgRectangle1" src={Rectangle3} />

        <nav className="navblog">
          <img className="imgvectorblog" src={Vector15} />
          <p>Admin</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>14 Oct 2022</p>


          <img className="imgvectorblog" src={Vector15} />
          <p>Wood</p>
        </nav>

       
       <nav className="textBlog">
          <h1 className="texth1">Handmade pieces that took time to make</h1>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
          </p>
       </nav>

       <nav>
        <button className="butnbog">
          Read more
        </button>
        <hr className="hrline" />
       </nav>


      </nav>
    </div>






    <div className="rightblog">

        <nav className="lowblog">
        
        <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="button">
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
    </div>
        <h2 className="h1blogright">Categories</h2>
     <nav className="rightcart">


        <p className="listblog">Crafts <span className="spnblog">2</span></p>
        <p className="listblog">Design <span className="spnblog">8</span></p>
        <p className="listblog">Handmade <span className="spnblog">7</span></p>
        <p className="listblog">Interior <span className="spnblog">1</span></p>
        <p className="listblog">Wood <span className="spnblog">6</span></p>




          
      <nav className="navblods">

        <h2>Recent Posts</h2>

        <nav className="lowcart">
        <img src={Rectangle65} />
        <p>Going all-in with <br />
        millennial design</p>
        </nav>

        <nav className="lowcart">
        <img src={Rectangle66} />
        <p>Going all-in with <br />
        millennial design</p>
        </nav>

        <nav className="lowcart">
        <img src={Rectangle697} />
        <p>Going all-in with <br />
        millennial design</p>
        </nav>

        <nav className="lowcart">
        <img src={Rectangle69} />
        <p>Going all-in with <br />
        millennial design</p>
        </nav>

        <nav className="lowcart">
        <img src={Rectangle698} />
        <p>Going all-in with <br />
        millennial design</p>
        </nav>

</nav>
     </nav>
        </nav>





     



    </div>










    
    
    <div className="containervectorcard">
  <nav className="nav-imgvecroe">
  <img className="imgvecroe" src={Vector1} />
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
