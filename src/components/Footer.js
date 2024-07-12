import React from 'react'
import footer1 from "../assests/footer1.png";
import footer2 from "../assests/footer2.png";
import footer3 from "../assests/footer3.png";
import footer4 from "../assests/footer4.png";

function Footer() {
  return (
    <div className="flex flex-row justify-evenly items-center w-[100%] border-t-3 p-2">
    <img className="w-[33px] h-[42px]" src={footer1} />
    <img className="w-[33px] h-[42px]"  src={footer2}/>
    <img className="w-[33px] h-[42px]"  src={footer3}/>
    <img className="w-[33px] h-[42px]"  src={footer4}/>
    </div>
  )
}

export default Footer