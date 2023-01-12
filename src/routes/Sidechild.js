import React from 'react'
import "./Sidechild.css"
export const Sidechild = (props) => {

const list=props.List;
const type=props.type;

const xx=list.map((elm)=>{
return <li>{elm.type}</li>
})

  return (
    <div className='sidechild flex flex-col mb-4'>
        <div className='subclass'>
        <h1 className='text-xl font-bold text-left'>{type}</h1>
        <ul className='sidechild-list flex flex-col'>
            {xx}
        </ul>
        </div>
       
    </div>
  )
}
