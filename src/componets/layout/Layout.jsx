
import  {Outlet}  from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'


export default function Layout () {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}