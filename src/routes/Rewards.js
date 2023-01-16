import React from "react";
import { Backupheader } from "../Backupheader";
import "./reward.css";
import { Link } from "react-router-dom";
import one from "../assets/one.webp";
import two from "../assets/two.webp";
import fav1 from "../assets/fav1.webp";
import fav2 from "../assets/fav2.webp";
import fav3 from "../assets/fav3.webp";
import fav4 from "../assets/fav4.webp";
import fav5 from "../assets/fav5.webp";
import three from "../assets/third.webp";
import fr1 from "../assets/fr1.webp"
import fr2 from "../assets/fr2.webp"
import fr3 from "../assets/fr3.webp"
import pay1 from "../assets/pay1.png"
import pay2 from "../assets/pay2.webp"
import pay3 from "../assets/pay3.webp"
import pay4 from "../assets/pay4.webp"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Footer } from "../Footer";
export default function Rewards() {
  const [choice, changechoice] = useState(1);

  useEffect(() => {
    let con = document.querySelectorAll(".onec");
    con.forEach((elm, idx) => {
      console.log("1")
      if (idx +1  === choice) {
        elm.style.display = "block";
      } else {
        elm.style.display = "none";
      }
    });
  }, [choice]);

  


  return (
    <>
      <Backupheader />
      <div className="rewards-con">
        <div className="con1">
          <div className="ml8 ">STARBUCKS® REWARDSs</div>
        </div>

        <div className="reward-hero text-left">
          <div className="rh-left">
            <div className="flex flex-col theflex">
              <h1 className="text-4xl font-bold mwl">
                FREE COFFEE IS A TAP AWAY
              </h1>
              <p className="text-lg bd">Join now to start earning rewards</p>
              <div>
                <button className="btn-green">Join now</button>
              </div>

              <p className="inline-block text-lg bd">
                Or{" "}
                <Link className="inline-block" to="mobile-apps">
                  {" "}
                  <p className="underline text-lg inline-block">
                    {" "}
                    join in the app{" "}
                  </p>
                </Link>{" "}
                for the best experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="getstart flex flex-col">
        <div className="first flex flex-col">
          <div className="text-3xl font-bold">Getting started is easy</div>
          <div className="text-xl font-semibold">
            Earn stars and get rewarded in few steps
          </div>{" "}
        </div>
        <div className="second flex">
          <div className="flex flex-col h">
            <img src={one} width="50px"></img>
            <h1 className="text-xl font-bold">Create an account</h1>
            <div className="inline-block cnt">
              To get started, <p className="inline-block grclr">join now</p>.
              You can also <p className="inline-block grclr">join in the app</p>{" "}
              to get access to the full range of Starbucks® Rewards benefits.
            </div>
          </div>
          <div className="flex flex-col h">
            <img src={two} width="50px"></img>
            <h1 className="text-xl font-bold ">Order and pay how you’d like</h1>
            <div className="cnt">
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.{" "}
              <p className="inline-block grclr">Learn how</p>
            </div>
          </div>
          <div className="flex flex-col h">
            <img src={three} width="50px"></img>
            <h1 className="text-xl font-bold ">Earn Stars, get Rewards</h1>
            <div className="cnt">
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </div>
          </div>
        </div>
      </div>
      {/* rgba(212,233,226,.33)!important */}

      <div className="favs mt-20">
        <div className="choices">
          <div>
            <div className="text-3xl font-semibold mb-12">
              Get your favourites for free
            </div>
            <div className="flex justify-center gap-10 cursor-pointer">
              <motion.div
                className="inline-block  font-bold text-2xl  "
                onClick={() => {
                  changechoice(1);
                }}
              >
                25<p className="gdclr inline-block">★</p>
              </motion.div>
              <div
                className="inline-block  font-bold text-2xl "
                onClick={() => {
                  changechoice(2);
                }}
              >
                50<p className="gdclr inline-block">★</p>
              </div>
              <div
                className="inline-block  font-bold text-2xl "
                onClick={() => {
                  changechoice(3);
                }}
              >
                150<p className="gdclr inline-block">★</p>
              </div>
              <div
                className="inline-block font-bold text-2xl "
                onClick={() => {
                  changechoice(4);
                }}
              >
                200<p className="gdclr inline-block">★</p>
              </div>
              <div
                className="inline-block font-bold text-2xl "
                onClick={() => {
                  changechoice(5);
                }}
              >
                400<p className="gdclr inline-block">★</p>
              </div>
            </div>
           
          </div>
          
        </div>
        <div className="favdis">
          <AnimatePresence>
              <motion.div className="flex onec"  initial={{y:10 , opacity: 0}} animate={{y:0 , opacity:1}} exit={{y:-10, opacity: 0}} transition={{duration: 2}} key="1">
                <div className="flex">
                  <img src={fav1} width="400px"></img>
                  <div>
                    <h1 className="text-xl font-bold">Customize your drink</h1>
                    <p>
                      Make your drink just right with an extra espresso shot,
                      dairy substitute or a dash of your favorite syrup.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex onec "  initial={{y:10 , opacity: 0}} animate={{y:0 , opacity:1}} exit={{y:-10, opacity: 0}} transition={{duration: 2}} key="2" >
                <div className="flex">
                  <img src={fav2} width="400px"></img>
                  <div className="dede">
                    <h1 className="text-xl font-bold">
                      Brewed hot coffee, bakery item or hot tea
                    </h1>
                    <p>
                      Pair coffee cake or an almond croissant with your fresh
                      cup of hot brew.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex onec" initial={{y:10 , opacity: 0}} animate={{y:0 , opacity:1}} exit={{y:-10, opacity: 0}} transition={{duration: 2}} key="3">
                <div className="flex">
                  <img src={fav3} width="400px"></img>
                  <div>
                    <h1 className="text-xl font-bold">
                      Handcrafted drink, hot breakfast or parfait
                    </h1>
                    <p>
                      Have a really good morning with a breakfast sandwich,
                      oatmeal or your favorite drink.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex onec" initial={{y:10 , opacity: 0}} animate={{y:0 , opacity:1}} exit={{y:-10, opacity: 0}} transition={{duration: 2}} key="4">
                <div className="flex">
                  <img src={fav4} width="400px"></img>
                  <div>
                    <h1 className="text-xl font-bold">
                      Salad, sandwich or protein box
                    </h1>
                    <p>
                      Nourish your day with a hearty Chipotle Chicken Wrap or
                      Eggs & Cheese Protein Box.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="flex onec" initial={{y:10 , opacity: 0}} animate={{y:0 , opacity:1}} exit={{y:-10, opacity: 0}} transition={{duration: 2}} key="5">
                <div className="flex">
                  <img src={fav5} width="400px"></img>
                  <div>
                    <h1 className="text-xl font-bold">
                      Select merchandise or at-home coffee
                    </h1>
                    <p>
                      Take home a signature cup, a bag of coffee or your choice
                      of select coffee accessories.
                    </p>
                  </div>
                </div>
              </motion.div>
              </AnimatePresence>
            </div>


            <div className="getstart flex flex-col">
        <div className="first flex flex-col">
          <div className="text-3xl font-bold">Endless extras</div>
          <div className="text-lg font-semibold lessw">
          Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
          </div>{" "}
        </div>
        <div className="second flex">
          <div className="flex flex-col h">
            <img src={fr1} width="50px"></img>
            <h1 className="text-xl font-bold">Fun freebies</h1>
            <div className="inline-block cnt">
            Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.

            </div>
            <div className="grclr underline">Learn more</div>
          </div>
          <div className="flex flex-col h">
            <img src={fr2} width="50px"></img>
            <h1 className="text-xl font-bold ">Order and pay ahead</h1>
            <div className="cnt">
            Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.
              
            </div>
            <p className="inline-block grclr underline">Learn more</p>
          </div>
          <div className="flex flex-col h">
            <img src={fr3} width="50px"></img>
            <h1 className="text-xl font-bold ">Get to free faster</h1>
            <div className="cnt">
            Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
            </div>
            <p className="inline-block grclr underline">Learn more</p>
          </div>
        </div>
      </div>

<div className="runner">
    <div className="lesserw">
        <h1 className="font-bold text-3xl">Cash or card, you earn stars</h1>
        <p className="mt-6 font-semibold">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
    </div>

<div className="flex flex-col mt-6">
    <div className="container">
<div>
    <div className="text-xl font-bold">1★Star per dollar</div>
    <p>Pay as you go</p>
</div>

<div className="flex  gap-6">
<img src={pay1} width="100px"></img>
<div className="flex flex-col">
    <div className="text-xl font-semibold">Scan and pay seperately</div>
    <p>Use cash or credit/debit card at the register.</p>
</div>
</div>

<div className="flex gap-6">
<img src={pay2} width="100px"></img>
<div className="flex flex-col">
    <div className="text-xl font-semibold">Save payment in the app</div>
    <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
</div>
</div>

    </div>

<div className="dark"></div>

    <div className="container">
<div>
    <div className="text-xl font-bold">1★Star per dollar</div>
    <p>Pay as you go</p>
</div>

<div className="flex gap-6">
<img src={pay3} width="100px"></img>
<div className="flex flex-col">
    <div className="text-xl font-semibold">Scan and pay seperately</div>
    <p>Use cash or credit/debit card at the register.</p>
</div>
</div>

<div className="flex gap-6">
<img src={pay4} width="100px"></img>
<div className="flex flex-col">
    <div className="text-xl font-semibold">Save payment in the app</div>
    <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
</div>
</div>

    </div>

</div>

</div>

        {/* <div className='favdis'></div> */}
      </div>
      <Footer/>
    </>
  );
}

// color --> #1e3932!important

//

//


// back clr 
