import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link ,useNavigate } from "react-router-dom";

export default function Navbar() {
  const user =JSON.parse( localStorage.getItem('user'))?.data
  // console.log(user);
  const [listStyle, setListStyle] = useState(
    "hover:text-md font-bold text-gray-400 hover:text-violet-700 transition-all"
  );
  const [responsive, setRespinsive] = useState(false);
const navigate = useNavigate()
  const handleLogOut =  () => {
    
localStorage.clear()    
navigate('/')
    

  };

  console.log(responsive);
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
      <div className="   hidden md:flex">
        <ul className=" flex ">
          <Link to={"/"}>
            <li className={`${listStyle} w-20`}>Home</li>
          </Link>
          <Link to={"/movie"}>
            {" "}
            <li className={`${listStyle} w-20`}>Movie</li>
          </Link>
          <Link to={"/tv"}>
            {" "}
            <li className={`${listStyle} w-20`}>Tv show</li>
          </Link> 
          {user && <Link to={"/favorite"}>
                {" "}
                <li className={`${listStyle} w-40  `}>My favorite movie's  </li>
              </Link>}
              {user ? (
            <ul className="    ">
            
                
                <li onClick={()=> localStorage.clear()} className={`${listStyle} w-20 cursor-pointer `}> log out</li>
             </ul>
          
          ) : (
            <ul className=" flex w-3/6 justify-end  ">
              <Link to={"/auth"}>
                {" "}
                <li className={listStyle}>singin </li>
              </Link>
            </ul>
          )}
          </ul>
         </div> 
        
         
        
      {responsive ? (
        <div  className=" absolute text-white bg-gradient-to-t from-black to-[#000514]  flex justify-center  top-20 w-screen left-0 h-36 md:hidden ">
          <ul onClick={()=> setRespinsive(false)} className="flex  flex-col justify-around">
            <Link to={"/"}>
              <li  className={listStyle}>home</li>
            </Link>
            <Link to={"/movie"}>
              <li className={listStyle}>movie</li>
            </Link>
            <Link to={"/tv"}>
              <li className={listStyle}>tv show</li>
            </Link>
            {user ? (
              <div>
                
                <li onClick={handleLogOut} className={listStyle}>log out</li>
              </div>
            ) : (
              <div>
                <Link to={"/auth"}>
  
                  <li className={listStyle}>singup </li>
                </Link>
              </div>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
