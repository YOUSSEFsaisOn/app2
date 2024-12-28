
import {NavLink ,Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div>
  <div>
    <div className='abouts'>
    <NavLink to={""}>Form</NavLink>
    <NavLink to = {"phone number"}>phone number</NavLink>
    <NavLink to = {"room"}>room</NavLink>

    </div>
    <Outlet/>
  </div>
    </div>
    </>
  )
}
