import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const { singUp, user } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/')
      await singUp(email, password);
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex">
    <div>
      <img src="" alt="" />
    </div>
      <div className="w-full justify-center items-center flex flex-col">
        <h1 className="text-5xl text-white font-bold mt-20">sing up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-10 ">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            className="mb-5 p-2 rounded-sm outline-none text-black"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="mb-5 p-2 rounded-sm outline-none text-black"
          />

          <button className="border-stone-500 border-4 rounded-md w-1/2 m-auto p-1 mb-7 ">sing up</button>
         
          <p>
           
            <span>already subscribed to chiltime</span>
            <Link to="/logIn " className="text-blue-900"> logIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
