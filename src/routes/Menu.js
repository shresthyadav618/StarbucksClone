import React from 'react'
// import Bh from ""
import "./menu.css"
import { Backupheader } from '../Backupheader'
import List from "./MenuList"
import { Sidechild  } from './Sidechild'
import { SideChildpic } from './SideChildpic'
import { Footer } from '../Footer'
export const Menu = () => {

console.log(List)

  return (
    <>
    <Backupheader/>
    <div>

<div className='list-con'>
  <ul className='list'>
<li>All products</li>
<li>Featured</li>
<li>Previours Orders</li>
<li>Favourite Products</li>
  </ul>
</div>
    </div>

<div className='menu-main flex'>

<div className='sidebar'>
  <Sidechild List={List[0].drinks} type={"Drinks"}/>
  <Sidechild List={List[0].food} type={"Food"}/>
  <Sidechild List={List[0].atHomeCoffee} type={"AtHomeCoffee"}/>
  <Sidechild List={List[0].merchandise} type={"Merchandise"}/>
  
   </div>
<div className='menu-hero text-left'>

<h1 className='text-2xl font-bold mb-10 mt-4'>Menu</h1>
<div className='flex flex-col'>
  <SideChildpic type="Drinks" List={List[0].drinks}/>
  <SideChildpic type="Food" List={List[0].food}/>
  <SideChildpic type="AtHomeCoffee" List={List[0].atHomeCoffee}/>
  <SideChildpic type="Merchandise" List={List[0].merchandise}/>
</div>
</div>




</div>
<div className='huehue'></div>
<Footer/>
    </>
    
  )
}


// bg-cl 
// bd 
