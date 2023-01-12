import React from 'react'
import logo from "./assets/logo.png"
import "./header.css"
import {Routes, Route, Link} from "react-router-dom"
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Backupheader = () => {
  return (
    <div className='h-auto flex items-center headercon'>

<div className='left flex  ml-6'>
<img src={logo} width="60px"></img>
<Link to="/menu"><div>MENU</div></Link>
<Link to="/rewards"><div>REWARDS</div></Link>
<Link to="/gift"><div>GIFT CARDS</div></Link>


</div>
<div className='right absolute flex '>
    <div className='flex div1'>
    <LocationOnIcon />
    <Link to="/store-locator"> <div>Find a store</div></Link>


    </div>
<div className='btns flex'>
<Link to="/account/signin"> <button className='btn-white'>Sign In</button></Link>
<Link to="/account/create">  <button className='btn-black'>Join Now</button> </Link>
    
   
</div>
</div>

       
    </div>
  )
}
