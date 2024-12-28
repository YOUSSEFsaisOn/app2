import { Link } from "react-router-dom"
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import imageshop from "./imageshop.png"
import logotextshop from "./logotextshop.png"
import Line1 from "./Line 1.png"
import Asgaard1 from "./Asgaard1.png"
import Asgaard2 from "./Asgaard2.png"
import Group88 from "./Group 88.png"
import Line5 from "./Line 5.png"
import vector1 from "./Vector1.png"
import vector2 from "./Vector2.png"
import vector3 from './Vector3.png'
import vector4 from './Vector4.png'
export default function ProductComparison() {
  
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
          <h1 className="titalshop">Product Comparison</h1>

          <nav className="navshopttital">
          <h4> <Link className="linkhome-imge" to="/">Home</Link>
          <img className="logotext" src={logotextshop} /> 
          <span className="spnshop">Comparison</span>  </h4>
          </nav>
        </nav>
        </div>




    <div className="containercomparison">
         <nav className="listcard"> 
         <h2>Go to Product
          <br /> page for more <br />
          Products</h2>


          <nav className="viewmore">
            <h4>View More</h4>
            <img className="textline" src={Line1} />
          </nav>
         </nav>



         <nav className="img-comption">
            <img className="imgcomp" src={Asgaard1} />
          


          
            <h2>Asgaard Sofa</h2>
            <h4>Rs. 250,000.00</h4>
           

               <nav className="ratingcomp">
                <h4>4.7</h4>
                <img className="starimg" src={Group88} /> 
                <img className="starlines" src={Line5} /> 
                <h5>145 Review</h5>
               </nav>
         </nav>


         

         <nav className="img-comption">
          <nav className="nav-img-comption2">
            <img className="imgcomp2" src={Asgaard2} />
          </nav>
            
            <h2>Outdoor Sofa Set</h2>
            <h4>Rs. 250,000.00</h4>


            

            <nav className="ratingcomp">
                <p>4.7</p>
                <img className="starimg" src={Group88} /> 
                <img className="starlines" src={Line5} /> 
                <h5>145 Review</h5>
               </nav>
         </nav>


         <nav className="containerdrop">
          <h3>Add A Product</h3>
          <button className="dropdwn-button">Choose Product
            <span className="arrow">▼</span>
          </button>
         </nav>
    </div>


    





    <div className="comparison-container">
        <hr />
            <table className="comparison-table">
                <thead>
                    <th>
                        <th>Category</th>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Sales Package</td>
                        <td>1 sectional sofa</td>
                        <td>1 Three Seater, 2 Single <br /> Seater</td>
                    </tr>
                    <tr>
                        <td>Model Number</td>
                        <td>TRCGR06BR189-RS</td>
                        <td>DTUBGR816568</td>
                    </tr>
                    <tr>
                        <td>Secondary Material</td>
                        <td>Solid Wood</td>
                        <td>Solid Wood</td>
                    </tr>
                    <tr>
                        <td>Configuration</td>
                        <td>L-shaped</td>
                        <td>L-shaped</td>
                    </tr>
                    <tr>
                        <td>Upholstery Material</td>
                        <td>Fabric + Cotton</td>
                        <td>Fabric + Cotton</td>
                    </tr>
                    <tr>
                        <td>Upholstery Color</td>
                        <td>Bright Grey & Lion</td>
                        <td>Bright Grey & Lion</td>
                    </tr>


                    <thead>
                    <br />
                    <br />
                    <br />
                    <tr>
                        <th>Product</th>
                    </tr>
                </thead>
                    <tr>
                        <td>Filling Material</td>
                        <td>Foam</td>
                        <td>Matt</td>
                    </tr>
                    <tr>
                        <td>Finish Type</td>
                        <td>Bright Grey & Lion</td>
                        <td>Bright Grey & Lion</td>
                    </tr>
                    <tr>
                        <td>Adjustable Headrest</td>
                        <td>No</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Maximum Load <br /> Capacity</td>
                        <td>280 KG</td>
                        <td>300 KG</td>
                    </tr>
                    <tr>
                        <td>Origin of Manufacture</td>
                        <td>India</td>
                        <td>India</td>
                    </tr>
                    <thead>
                    <br />
                    <br />
                    <br />
                    <tr>
                        <th>Dimensions</th>
                    </tr>
                </thead>
                    <tr>
                        <td>Width</td>
                        <td>268.22 cm</td>
                        <td>268.32 cm</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>76 cm</td>
                        <td>76 cm</td>
                    </tr>
                    <tr>
                        <td>Depth</td>
                        <td>157.48 cm</td>
                        <td>187.76 cm</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>65 KG</td>
                        <td>65 KG</td>
                    </tr>
                    <tr>
                        <td>Seat Height</td>
                        <td>49.53 cm</td>
                        <td>41.92 cm</td>
                    </tr>
                    <tr>
                        <td>Leg Height</td>
                        <td>6.46 cm</td>
                        <td>5.46 cm</td>
                    </tr>
                    <thead>
                    <br />
                    <br />
                    <br />
                    <tr>
                        <th>Warranty</th>
                    </tr>
                </thead>
                    <tr>
                        <td>Warranty Summary</td>
                        <td>1 Year Manufacturing <br /> Warranty</td>
                        <td>1 Year Manufacturing <br /> Warranty</td>
                    </tr>
                    <tr>
                        <td>Warranty Service Type</td>
                        <td>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurniture.com</td>
                        <td>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurniture.com</td>
                    </tr>
                    <tr>
                        <td>Covered in Warranty</td>
                        <td>Warranty Against <br /> Manufacturing Defects</td>
                        <td>Warranty of the Product <br /> is Limited to <br /> Manufacturing <br /> Defects Only</td>
                    </tr>
                    <tr>
                        <td>Not Covered in Warranty</td>
                        <td>The Warranty Does Not <br /> Cover Damage Due to <br /> Usage of the Product <br /> Beyond its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</td>
                        <td>The Warranty Does Not <br /> Cover Damage Due to <br /> Usage of the Product <br /> Beyond its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</td>
                    </tr>
                    <tr>
                        <td>Domestic Warranty</td>
                        <td><Link to="/" className="linkbutntd"><button className="butntable">Add to Card</button></Link></td>
                        <td><Link to="/Card" className="linkbutntd"><button className="butntable">Add to Card</button></Link></td>
                    </tr>
                        
                
                </tbody>
                
            </table>
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
    </div>
  )
}
