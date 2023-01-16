import React from "react";
import "./Homescreen.css";
import Drink from "../assets/Drink.jpg";
import { Link } from "react-router-dom";
import Drink2 from "../assets/Drink2.jpg";
import Drink3 from "../assets/Drink3.webp";
import Img1 from "../assets/Img1.jpg";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "styled-components";
import { Slide } from "react-awesome-reveal";
import { Footer } from "../Footer";
export const Homescreen = () => {

    const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-200px, -100px, 0);
      delay="3";
    }
  
    to {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
  `;

  return (
    <>
    <Slide damping={10}>
      <div className="screen-con">
        <div className="con1 flex flex-col">
          <div className="font-bold text-xl">
            Start fresh with Starbucks® Rewards
          </div>
          <div className="text-lg con1-2">
            <Link to="/account/create">Join</Link> today to earn your way to
            free coffee and treats.*
          </div>
        </div>
      </div>
      {/* <Fade > */}

      <div className="screen-con1 mt-8 flex ">
        <div className="left-screen">
          <div className="flex flex-col getit">
            <div className="largetext">New year, cool new brew</div>
            <div className=" font-bold wid text-center">
              Introducing Pistachio Cream Cold Brew—bold, smooth coffee topped
              with pistachio cream cold foam.
            </div>
            <button className="btn-purewhite font-bold">Try it now</button>
          </div>
        </div>
        <div className="right-screen">
          <img src={Drink}></img>
        </div>
      </div>
    
      {/* </Fade> */}
     
{/* <Fade direction="up" > */}

<div className="screen-con1 mt-8 flex ss ">
        <div className="right-screen">
          <img src={Drink2}></img>
        </div>

        <div className="left-screen">
          <div className="flex flex-col getit">
            <div className="largetext">Pistachio your way</div>
            <div className="text-2xl  wid text-center newrr">
              Our creamy Pistachio Frappuccino® blended beverage satisfies all
              your winter cravings.
            </div>
            <button className="btn-purewhite font-bold ss ssbtn">
              Order Now
            </button>
          </div>
        </div>
      </div>

{/* </Fade> */}
      

      <div className="screen-con1 mt-8 flex">
        <div className="left-screen ">
          <div className="flex flex-col getit moregap">
            <div className="largetext">Taste of the globe</div>
            <div className="text-xl font-bold wid text-center newrr">
              Exceptional coffees unite in Starbucks Tribute Blend® showcasing
              four of our favorite origins.
            </div>
            <button className="btn-purewhite font-bold">Order now</button>
          </div>
        </div>
        <div className="right-screen">
          <img src={Drink3}></img>
        </div>
      </div>

      <div className="screen-con1 mt-8 flex newss">
        <div className="right-screen">
          <img src={Img1}></img>
        </div>

        <div className="left-screen ">
          <div className="flex flex-col getit">
            <div className="largetext newss font-bold">
              Gratitude by the cup
            </div>
            <div className=" wid text-center newrr newss ">
              Share your appreciation for the people in your life with a gift
              card.
            </div>
            <button className="btn-purewhite  newss ssbtn">
              Send an eGift
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">at participating stores*</div>
<Footer/>
      </Slide>

    </>
  );
};
