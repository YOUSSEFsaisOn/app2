
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/layout/Layout'
import Home from './componets/home/Home'
import About from './componets/about/About'
import Contact from './componets/contact/Contact'
import Shop from './componets/shop/Shop'
import PaymentOptions from './componets/paymentOptions/PaymentOptions'
import Returns from './componets/returns/Returns'
import PrivacyPolicies from './componets/privacyPolicies/PrivacyPolicies'
import CartSidebar from "./componets/cartSidebar/CartSidebar"
import SingleProduct from "./componets/singleProduct/SingleProduct"
import ProductComparison from './componets/productComparison/ProductComparison'
import ShowMore from './componets/showmore/ShowMore'
import Card from "./componets/card/Card"
import CheckOut from "./componets/checkout/Checkout"
import Blog from './componets/blog/Blog'
export default function App() {
    
   

     const Routing = createBrowserRouter([
        
        {
            
            className: "App", path: "/",
            element: <Layout/>,
             children:  [
                {
                    path:  "/", element: <Home/>,
                },
                {
                    path: "Shop", element: <Shop/>,
                },
                {
                    path: "Contact", element: <Contact/>,
                },
                {
                    path: "About", element:<About/>,
                },
                {
                    path: "PaymentOptions", element: <PaymentOptions/>,
                },
                {
                    path: "Returns", element: <Returns/>,
                },
                {
                    path: "PrivacyPolicies", element: <PrivacyPolicies/>,
                },
                {
                    path: "SingleProduct", element: <SingleProduct/>,
                },
                {
                    path: "CartSidebar", element: <CartSidebar/>,
                },
                {
                    path: "ProductComparison", element: <ProductComparison/>,
                },
                {
                    path: "ShowMoreSingle", element: <ShowMore/>
                },
                {
                    path: "Card", element: <Card/>
                },
                {
                    path: "CheckOut", element: <CheckOut/>
                },
                {
                    path: "Blog", element: <Blog/>
                }
             
               
            ]
        },
       
    ])
  return (
    <>
    <RouterProvider router={Routing}/>
    </>
  )
}