import React from 'react'
import "./Sidechild.css"
import {Routes, Route, Link} from "react-router-dom"
export const SideChildpic = (props) => {
  
    const xx=(props.List).map((elm)=>{
    return <Link to={elm.path}>
    <div className='flex gap-2'><img src={elm.image} width="112px"></img>
    <div className='flex flex-col justify-center font-bold text-lg'>{elm.type}</div>
    </div>
    </Link>
    
    })

    return (
    <div className='flex flex-col maxw'>
        <h1 className='text-xl font-bold mb-4'>
            {props.type}
        </h1>
        <hr/>
        <div className='line flex flex-wrap mt-4'>
{xx}
        </div>
    </div>
  )
}
