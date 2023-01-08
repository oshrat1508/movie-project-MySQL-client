import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link ,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const [listStyle, setListStyle] = useState(
    "hover:text-md font-bold text-gray-400 hover:text-violet-700 transition-all"
  );
  const [responsive, setRespinsive] = useState(false);
  const { user, logOut } = UserAuth();
const navigate = useNavigate()
  const handleLogOut = async () => {
    try{
    logOut()
    navigate('/')
    }catch(e){
      console.log(e);
    }

  };
  return (
    <div className=" capitalize w-[90%] flex justify-between m-auto  p-6 ">
      <div className="logo text-4xl font-bold text-violet-700 font-mono ">
        ChillTime{" "}
      </div>
      <div
        onClick={() => setRespinsive(!responsive)}
        className="text-white md:hidden flex text-2xl cursor-pointer"
      >
        <AiOutlineMenu />
      </div>
      <div className="w-3/4  justify-end mr-14 hidden md:flex">
        <ul className=" flex justify-end w-2/6  ">
          <Link to={"/"}>
            <li className={`${listStyle} w-20`}>home</li>
          </Link>
          <Link to={"/movie"}>
            {" "}
            <li className={`${listStyle} w-20`}>movie</li>
          </Link>
          <Link to={"/tv"}>
            {" "}
            <li className={`${listStyle} w-20`}>tv show</li>
          </Link>
          </ul>
          {user?.email ? (
            <ul className=" flex w-5/6 justify-end  ">
              <Link to={"/account"}>
                {" "}
                <li className={`${listStyle} w-40  `}>My Favorite movie's  </li>
              </Link>
             
                
                <li onClick={handleLogOut} className={`${listStyle} w-20 cursor-pointer `}>| log out</li>
             </ul>
          
          ) : (
            <ul className=" flex w-3/6 justify-end  ">
              <Link to={"/singup"}>
                {" "}
                <li className={listStyle}>singup </li>
              </Link>
              <Link to={"/login"}>
                {" "}
                <li className={listStyle}>login </li>
              </Link>
            </ul>
          )}
        
      </div>
      {responsive ? (
        <div className=" absolute text-white bg-gradient-to-t from-black to-[rgb(0, 5, 20)]  flex justify-center  top-20 w-screen left-0 h-36 md:hidden ">
          <ul className="flex  flex-col justify-around">
            <Link to={"/"}>
              {" "}
              <li className={listStyle}>home</li>
            </Link>
            <Link to={"/movie"}>
              {" "}
              <li className={listStyle}>movie</li>
            </Link>
            <Link to={"/tv"}>
              {" "}
              <li className={listStyle}>tv show</li>
            </Link>
            {user?.email ? (
              <div>
                <Link to={"/account"}>
                  {" "}
                  <li className={listStyle}>My Favorite movie's </li>
                </Link>
                <li onClick={handleLogOut} className={listStyle}>log out</li>
              </div>
            ) : (
              <div>
                <Link to={"/singup"}>
                  {" "}
                  <li className={listStyle}>singup </li>
                </Link>
                <Link to={"/login"}>
                  {" "}
                  <li className={listStyle}>login </li>
                </Link>
              </div>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
