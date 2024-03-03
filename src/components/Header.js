import React, { useState } from "react";
import { Link } from "react-router-dom";
import constant from "../utils/constant";
import useOnlineStatus from "../utils/useOnlinStatus";


const Header = () => {

  var mybtn = "Login";
  const[btn,setBtn] = useState(mybtn);

  const OnlineStatus = useOnlineStatus();
    return (
      <div className="header flex justify-between bg-pink-100 shadow-lg">
        <div className="logoContainer">
          <img className="w-32 rounded-r-full m-2"
            src={constant.LOGO_URL}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li className="px-5">Online Status: {OnlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-5 hover:font-bold"> <Link to='/'>Home</Link></li>
            <li className="px-5 hover:font-bold"> <Link to='/about'>About Us</Link></li>
            <li className="px-5 hover:font-bold"> <Link to='/contact'>Contact</Link></li>
            <li className="px-5 hover:font-bold"> <Link to='/grocery'>Grocery</Link></li>
            <li className="px-5 hover:font-bold"> <Link to='/cart'>Cart</Link></li>
            <button className="loginBtn  hover:font-bold" onClick={()=>{
              btn == "Login"?setBtn("LogOut"): setBtn("Login");
            }}>{btn}</button>

          </ul>
        </div>
      </div>
    );
  };

export default Header;