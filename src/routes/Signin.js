import React,{useState} from 'react'
import { Backupheader } from '../Backupheader'
import "./Signin.css"
import {motion} from "framer-motion"
import auth from "../firebase/firestore"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Footer'
export default function useSignin() {
const navigate=useNavigate()
const [data,changeData]=useState({
  email:"",
  pass:"",
  keep:""
}); 

const [Err,errMsg]=useState("");

function handleSubmit(){
  if(!data.email || !data.pass){
    errMsg("Please fill all field , either password or email is unfilled");
    return;
  }
signInWithEmailAndPassword(auth,data.email,data.pass)
.then((res)=>{
  console.log(res)
  navigate("/")
}).catch((err)=>{
  errMsg(err.message)
})

}

  return (
    <>
    <Backupheader/>
    <div className='signin mt-10 flex flex-col'>
        <div className='text-3xl font-bold'>Sign in or create an account</div>
        <div className='box '>
<div className='flex flex-col gap-3 '>
  <p className='text-lg font-semibold'>* indicates required field</p>

  <motion.div  whileTap={{
  backgroundColor: '#439879',
  borderRadius : '40px'
}}  transition={{duration:"0.6"}} className='addeff'>
  <input  onChange={(event)=>{
    event.target.nextElementSibling.classList.add("effectstay")
    changeData((prev)=>{
      return {...prev,email:event.target.value}
    })
  }} className='text-lg font-semibold'></input>
  <label className='lbl'>*Username or email address</label>
  </motion.div>

<motion.div whileTap={{
  backgroundColor: '#439879',
  borderRadius : '40px'
}}  transition={{duration:"0.6"}} className='addeff'>
<input  onChange={(event)=>{
  event.target.nextElementSibling.classList.add("effectstay")
  changeData((prev)=>{
    return {...prev,pass:event.target.value}
  })
}} className='text-lg font-semibold'></input>
<label className='lbl'>*password</label>
</motion.div>

<span className='flex hue'>
  <input onChange={(event)=>{
    changeData((prev)=>{
      return {...prev,keep:event.target.checked}
    })
  }} type={'checkbox'} className='brgr'></input>
  <p className='text-lg font-semibold'>Keep me signed in. </p>
  <p className='clrgr font-bold underline mt-1 ml-1'>Details</p>
</span>
<div className='redclr'>{Err}</div>
<div className='clrgr text-lg font-bold hue xx'>Forgot your username? </div>
<div className='clrgr text-lg font-bold hue xx'>Forgot your password? </div>
<div className='btn'>
<button onClick={handleSubmit}>Sign in</button>
</div>
</div>
        </div>
    </div>
    
<div className='joinrew flex flex-col gap-5'>
<div className='clrr'>JOIN STARBUCKS® REWARDS</div>
<div className='text-lg text-center comp'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</div>
<button className='newbtn'>Join now</button>
</div>

<Footer/>
    </>
    
  )
}
