import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <>
    <div className='FOOTER'>
    <div className='topbox flex gap-10'>

<div className='subbox flex flex-col give'>
<div className='text-lg font-semibold'>About us</div>
<ul className='boxlist flex flex-col gap-2'>
    <li>Our company</li>
    <li>Our coffee </li>
    <li>Stories and news</li>
    <li>Starbucks Archive</li>
    <li>Investor Relations</li>
    <li>Customer Service</li>
</ul>
</div>

<div className='subbox flex flex-col'>
<div className='text-lg font-semibold'>Career</div>
<ul className='boxlist flex flex-col gap-2'>
    <li>Culture and Values</li>
    <li>Inclusion, Diversity, and Equity </li>
    <li>College Achievement Plan</li>
    <li>Alumni Community</li>
    <li>U.S. Careers</li>
    <li>International Careers</li>
</ul>
</div>


<div className='subbox flex flex-col'>
<div className='text-lg font-semibold'>Social Impact</div>
<ul className='boxlist flex flex-col gap-2'>
    <li>People</li>
    <li>Planet </li>
    <li>Environmental and Social Impact Reporting</li>
   
</ul>
</div>

<div className='subbox flex flex-col'>
<div className='text-lg font-semibold'>For Business Partners</div>
<ul className='boxlist flex flex-col gap-2'>
    <li>Landlord Support Center</li>
    <li>Suppliers </li>
    <li>Corporate Gift Card Sales</li>
    <li>Starbucks Archive</li>
    <li>Investor Relations</li>
    <li>Office and Foodservice Coffee</li>
</ul>
</div>


<div className='subbox flex flex-col'>
<div className='text-lg font-semibold'>Order and Pickup</div>
<ul className='boxlist flex flex-col gap-2'>
    <li>Order on the App</li>
    <li>Order on the Web </li>
    <li>Delivery</li>
    <li>Order and Pickup Options</li>
    <li>Investor Relations</li>
    <li>Explore and Find Coffee for Home</li>
</ul>
</div>

    </div>
    <hr aria-hidden="true" className='py5 hrr'/>

<div className='flex flex-col last gap-4'>
<div className='flex icons gap-4'>
    <a href="https://open.spotify.com/user/starbucks"><i class="fa fa-spotify fa-2xl" aria-hidden="true"></i></a>
<a href='https://www.facebook.com/Starbucks/'><i class="fa fa-facebook-square fa-2xl" aria-hidden="true"></i></a>
<a href='https://in.pinterest.com/starbucks/'><i class="fa fa-pinterest fa-2xl" aria-hidden="true"></i></a>
<a href='https://www.instagram.com/starbucks/'> <i class="fa fa-instagram fa-2xl" aria-hidden="true"></i></a>
<a href='https://www.youtube.com/starbucks'> <i class="fa fa-youtube-play fa-2xl" aria-hidden="true"></i></a>
<a href='https://twitter.com/starbucks/'><i class="fa fa-twitter-square fa-2xl" aria-hidden="true"></i></a>




 
</div>
<div className='flex gap-5'>
    <div className='text-lg font-semibold'>Privacy Notice   <p className='ml-4  inline-block'>|</p></div>
    <div className='text-lg font-semibold'>Terms of Use   <p className='ml-4 inline-block'>|</p></div>
    <div className='text-lg font-semibold'>Do Not Share My Personal Information   <p className='ml-4 inline-block'>|</p></div>
    <div className='text-lg font-semibold'>CA Supply Chain Act   <p className='ml-4 inline-block'>|</p></div>
    <div className='text-lg font-semibold'>Cookie Preferences  <p className='ml-4 inline-block'>|</p> </div>
</div>
<div className='he'>© 2023 Starbucks Coffee Company. All rights reserved.</div>
</div>

    </div>
    </>
  )
}
