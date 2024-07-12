import React from 'react'
import logo from "../assests/logo.png";
import brandName from "../assests/brandName.png"
import cart from "../assests/cart.png"
function Navbar() {
  return (
    <div className="flex flex-row w-[100%] h-[61px] 
    justify-between items-center pl-5 pr-5">
      <img className="w-[40px] h-[34px]" src={logo} />
      <img className="w-[113px] h-[33px]" src={brandName}/>
      <img className="w-[40px] h-[34px]" src={cart}/>

    </div>
  )
}

export default Navbar