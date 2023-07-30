import React, { useState } from "react";
import "./Signup.css";
import {useNavigate} from "react-router-dom"
import { Backupheader } from "../Backupheader";
import { motion } from "framer-motion";
import { Footer } from "../Footer";
import auth from "../firebase/firestore"
// import { getAuth } from "firebase/auth"
import {  createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth"
export default function Signup() {


  const [data,changeData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    pass:"",
    rec:"",
    terms:""
  })

  const [Err,errMsg]=useState();

  const Navigate = useNavigate();

  function handleSubmit(){
    console.log(data)
    
    createUserWithEmailAndPassword(auth,data.email, data.pass)
    .then((usercre)=>{
      console.log(usercre);
      const user=usercre.user;
      updateProfile(user,{
        displayName: data.firstname+ data.lastname
      });
      Navigate('/account/signin');
      console.log(user)
    }).catch((err)=>{
       errMsg(err.message);
    })
  }

  return (
    <>
      <Backupheader />
      <div className="flex flex-col gap-5 mt-6">
        <div className="text-3xl font-bold">Create an account</div>
        <div className="box1">
          <div className="font-bold mb-4 mt-6">STARBUCKS® REWARDS</div>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </div>
      </div>

      <div className="mainbox ">
        <div className="pdd">* indicates required field</div>

        {/* yhase div mai lgega */}

        <div className="flex flex-col gap-3 relative">
          <div className="text-lg font-bold">Personal Information</div>

          <motion.div
            whileTap={{
              backgroundColor: "#439879",
              borderRadius: "40px",
            }}
            transition={{ duration: "0.6" }}
            className="addeff"
          >
            <input  onChange={(event)=>{
              event.target.nextElementSibling.classList.add("effectstay")
     changeData((prev)=>{
      return {...prev,firstname: event.target.value}
     })
            }} className="text-lg font-semibold ip"></input>
            <label className="lbll">*First Name</label>
            
          </motion.div>

          <motion.div
            whileTap={{
              backgroundColor: "#439879",
              borderRadius: "40px"
            }}
            transition={{ duration: "0.6" }}
            className="addeff"
          >
            <input onChange={(event)=>{
              event.target.nextElementSibling.classList.add("effectstay")
              
     changeData((prev)=>{
      return {...prev,lastname: event.target.value}
     })
            }}  className="text-lg font-semibold ip"></input>
            <label className="lbll">*Last Name </label>
          </motion.div>
        </div>


{/* <span className="p-10">hey</span> */}

        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold">Account security</div>

          <motion.div
            whileTap={{
              backgroundColor: "#439879",
              borderRadius: "40px",
            }}
            transition={{ duration: "0.6" }}
            className="addeff"
          >
            <input onChange={(event)=>{
              event.target.nextElementSibling.classList.add("effectstay")
     changeData((prev)=>{
      return {...prev,email: event.target.value}
     })
            }} className="text-lg font-semibold ip"></input>
            <label className="lbll">*Username or email address</label>
            <p>This will be your username</p>
          </motion.div>

          <motion.div
            whileTap={{
              backgroundColor: "#439879",
              borderRadius: "40px",
            }}
            transition={{ duration: "0.6" }}
            className="addeff"
          >
            <input onChange={(event)=>{
              event.target.nextElementSibling.classList.add("effectstay")
     changeData((prev)=>{
      return {...prev,pass: event.target.value}
     })
            }} className="text-lg font-semibold ip"></input>
            <label className="lbll">*password</label>
            <div>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</div>
          </motion.div>
        </div>
        
<div className="newgrclr font-bold text-lg underline">Already have a Starbucks gift card?</div>

<div className="flex flex-col gap-6">
  <div className="text-md font-semibold gryclr">COLLECT MORE STARS & EARN REWARDS</div>
  <div>Email is a great way to know about offers and what’s new from Starbucks.</div>
  <span className="huee">
  <input onChange={(event)=>{
     changeData((prev)=>{
      return {...prev,rec: event.target.checked}
     })
  }} type="checkbox"></input>event
  <label>Yes, I’d like email from Starbucks</label>
       </span>
 <div >Know about initiatives, announcements and product offers.</div>
</div>


<div className="flex flex-col gap-6">
<div className="text-md font-semibold gryclr">TERMS OF USE</div>
<span className="huee">
  <input onChange={(event)=>{
    console.log(event)
    changeData((prev)=>{
      return {...prev,terms: event.target.checked}
    }) 
  }} type="checkbox"  ></input>
  <label className="text-justify ml-2 ">I agree to the 
    <p className="newgrclr inline-block underline mr-1">Starbucks® Rewards Terms </p>
opens in new window and the<p className="newgrclr inline-block underline mr-1">
Starbucks Card Terms </p> 
opens in new window and have read the 
<p className="newgrclr inline-block underline mr-1">Starbucks Privacy Statement </p>
 opens in new window.</label>
</span>
</div>
<div className="relative">
  <div className="redclr">{Err}</div>
<button className="btnsu" onClick={handleSubmit}>Create Account</button>
</div>

      </div>
      {/* //mainbox ^^ */}
      <Footer/>
    </>
  );
}
